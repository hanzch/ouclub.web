# 部署指南

## 需要上传的文件

### 1. 必须上传的文件和目录
```
├── assets/              # 静态资源
├── components/          # Vue 组件
├── layouts/             # 布局文件
├── pages/               # 页面文件
├── public/              # 公共静态文件
├── server/              # 服务器端 API
├── nuxt.config.ts       # Nuxt 配置
├── package.json         # 依赖列表
├── package-lock.json    # 依赖锁定文件
├── tailwind.config.js   # Tailwind 配置
├── tsconfig.json        # TypeScript 配置
└── app.vue              # 应用入口
```

### 2. 不要上传的文件（已在 .gitignore 中）
- `.env` 文件（包含敏感信息）
- `node_modules/` 目录
- `.nuxt/` 目录
- `.output/` 目录
- `dist/` 目录
- `.data/` 目录
- `*.log` 文件
- `*.pem` 密钥文件

## 部署步骤

### 1. 上传代码
```bash
# 使用 Git
git clone your-repo-url
cd ouclub.web

# 或使用 FTP/SCP 上传所有文件（除了 .gitignore 中的文件）
```

### 2. 在服务器上创建 .env 文件
```bash
# 创建 .env 文件
nano .env

# 添加以下内容：
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
RECEIVE_EMAIL=receive@example.com
```

### 3. 安装依赖
```bash
# 确保已安装 Node.js 18+ 和 npm
node --version  # 应该是 v18.x.x 或更高

# 安装项目依赖
npm install
```

### 4. 构建项目
```bash
# 构建生产版本
npm run build
```

### 5. 运行项目

#### 方式一：直接运行（不推荐用于生产）
```bash
npm run preview
# 或
node .output/server/index.mjs
```

#### 方式二：使用 PM2（推荐）
```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start .output/server/index.mjs --name "ouclub-web"

# 设置开机自启
pm2 startup
pm2 save

# 查看状态
pm2 status

# 查看日志
pm2 logs ouclub-web
```

#### 方式三：使用 systemd（Linux）
创建服务文件 `/etc/systemd/system/ouclub-web.service`：
```ini
[Unit]
Description=OU Club Web
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/ouclub.web
ExecStart=/usr/bin/node .output/server/index.mjs
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

启动服务：
```bash
sudo systemctl enable ouclub-web
sudo systemctl start ouclub-web
sudo systemctl status ouclub-web
```

### 6. 配置反向代理（Nginx）

创建 Nginx 配置：
```nginx
server {
    listen 80;
    server_name yourdomain.com;

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

### 7. 配置 SSL（可选但推荐）
```bash
# 使用 Certbot 获取免费 SSL 证书
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn
- 至少 1GB RAM
- Linux/Unix 系统（推荐 Ubuntu 20.04+）

## 故障排查

### 端口被占用
```bash
# 修改端口
PORT=3001 node .output/server/index.mjs
```

### 邮件发送失败
1. 检查 .env 配置是否正确
2. 确保 Gmail 已开启"应用专用密码"
3. 检查防火墙是否允许 SMTP 端口（587）

### 查看日志
```bash
# PM2
pm2 logs ouclub-web

# systemd
sudo journalctl -u ouclub-web -f
```