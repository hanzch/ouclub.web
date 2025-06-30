# 部署 OU Tennis Club 网站到 AWS Lightsail

本指南介绍如何将这个 Nuxt 3 应用部署到 AWS Lightsail。

## 部署选项

### 选项 1：静态站点部署（推荐）
由于这是一个营销网站，没有后端 API，建议使用静态生成方式部署。

### 选项 2：Node.js 应用部署
如果需要 SSR（服务端渲染）功能，可以作为 Node.js 应用部署。

## 选项 1：静态站点部署步骤

### 1. 本地生成静态文件
```bash
# 安装依赖
npm install

# 生成静态站点
npm run generate
```

生成的文件将位于 `.output/public/` 目录。

### 2. 创建 Lightsail 实例
1. 登录 AWS Lightsail 控制台
2. 点击"创建实例"
3. 选择：
   - 平台：Linux/Unix
   - 蓝图：OS Only → Ubuntu 22.04 LTS
   - 实例计划：选择合适的计划（$3.5/月起）

### 3. 配置实例
SSH 连接到实例后，执行以下命令：

```bash
# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装 Nginx
sudo apt install nginx -y

# 启动 Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# 创建网站目录
sudo mkdir -p /var/www/outennis
sudo chown -R $USER:$USER /var/www/outennis
```

### 4. 上传静态文件
在本地终端使用 SCP 上传文件：

```bash
# 将 .output/public 目录的内容上传到服务器
scp -r -i ~/LightsailDefaultKey.pem .output/public/* ubuntu@<your-lightsail-ip>:/var/www/outennis/
```

### 5. 配置 Nginx
创建 Nginx 配置文件：

```bash
sudo nano /etc/nginx/sites-available/outennis
```

添加以下内容：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/outennis;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

启用站点：

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/outennis /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重新加载 Nginx
sudo systemctl reload nginx
```

## 选项 2：Node.js 应用部署步骤

### 1. 创建 Lightsail 实例
同选项 1，但选择 Node.js 蓝图。

### 2. 部署应用
SSH 连接到实例后：

```bash
# 克隆代码（假设使用 Git）
git clone <your-repo-url> /opt/outennis
cd /opt/outennis

# 安装依赖
npm install

# 构建应用
npm run build
```

### 3. 使用 PM2 管理进程
```bash
# 安装 PM2
sudo npm install -g pm2

# 创建 ecosystem 配置文件
nano ecosystem.config.js
```

添加以下内容：

```javascript
module.exports = {
  apps: [{
    name: 'outennis',
    script: '.output/server/index.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      PORT: 3000,
      HOST: '0.0.0.0'
    }
  }]
}
```

启动应用：

```bash
# 启动应用
pm2 start ecosystem.config.js

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup systemd
```

### 4. 配置 Nginx 反向代理
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 配置 HTTPS（两种选项都适用）

使用 Let's Encrypt 免费 SSL 证书：

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx -y

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期测试
sudo certbot renew --dry-run
```

## Lightsail 网络配置

1. 在 Lightsail 控制台中，进入实例的"网络"标签
2. 添加以下防火墙规则：
   - HTTP (80)
   - HTTPS (443)
   - SSH (22) - 默认已开启

## 域名配置

1. 在 Lightsail 控制台创建静态 IP
2. 将静态 IP 附加到实例
3. 在域名提供商处添加 A 记录指向静态 IP

## 自动化部署脚本

创建 `deploy.sh` 脚本简化部署：

```bash
#!/bin/bash
# deploy.sh

# 配置
SERVER_IP="your-lightsail-ip"
SERVER_USER="ubuntu"
KEY_PATH="~/LightsailDefaultKey.pem"
REMOTE_PATH="/var/www/outennis"

# 构建
echo "Building project..."
npm run generate

# 上传
echo "Uploading files..."
rsync -avz --delete -e "ssh -i $KEY_PATH" .output/public/ $SERVER_USER@$SERVER_IP:$REMOTE_PATH/

echo "Deployment complete!"
```

使用方法：
```bash
chmod +x deploy.sh
./deploy.sh
```

## 注意事项

1. **表单配置**：部署前需要在 `components/EnquireForm.vue` 中配置实际的表单提交端点
2. **环境变量**：如需使用环境变量，创建 `.env` 文件并在部署时配置
3. **监控**：建议配置 CloudWatch 监控实例健康状态
4. **备份**：定期创建实例快照作为备份
5. **性能优化**：考虑使用 CloudFront CDN 加速静态资源

## 成本估算

- Lightsail 实例：$3.5-$20/月（取决于选择的计划）
- 静态 IP：免费（附加到实例时）
- 数据传输：前 1TB 免费
- SSL 证书：Let's Encrypt 免费

## 故障排除

### Nginx 错误
```bash
# 查看错误日志
sudo tail -f /var/log/nginx/error.log
```

### Node.js 应用错误（如使用选项 2）
```bash
# 查看 PM2 日志
pm2 logs outennis
```

### 权限问题
```bash
# 修复文件权限
sudo chown -R www-data:www-data /var/www/outennis
```