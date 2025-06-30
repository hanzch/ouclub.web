#!/bin/bash

# OU Tennis Club 部署脚本
# 部署到 AWS Lightsail

# 配置变量（需要修改为实际值）
SERVER_IP="YOUR_LIGHTSAIL_IP"
SERVER_USER="ubuntu"
KEY_PATH="~/LightsailDefaultKey.pem"
REMOTE_PATH="/var/www/outennis"

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查配置
if [ "$SERVER_IP" = "YOUR_LIGHTSAIL_IP" ]; then
    echo -e "${RED}错误：请先配置 SERVER_IP 变量${NC}"
    exit 1
fi

# 检查密钥文件
if [ ! -f "$KEY_PATH" ]; then
    echo -e "${RED}错误：密钥文件不存在：$KEY_PATH${NC}"
    exit 1
fi

echo -e "${GREEN}开始部署 OU Tennis Club 网站...${NC}"

# 1. 安装依赖
echo -e "${YELLOW}步骤 1/4: 安装依赖...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}错误：依赖安装失败${NC}"
    exit 1
fi

# 2. 生成静态文件
echo -e "${YELLOW}步骤 2/4: 生成静态文件...${NC}"
npm run generate
if [ $? -ne 0 ]; then
    echo -e "${RED}错误：静态文件生成失败${NC}"
    exit 1
fi

# 3. 检查生成的文件
if [ ! -d ".output/public" ]; then
    echo -e "${RED}错误：静态文件目录不存在${NC}"
    exit 1
fi

# 4. 上传文件到服务器
echo -e "${YELLOW}步骤 3/4: 上传文件到服务器...${NC}"
rsync -avz --delete \
    -e "ssh -i $KEY_PATH -o StrictHostKeyChecking=no" \
    .output/public/ \
    $SERVER_USER@$SERVER_IP:$REMOTE_PATH/

if [ $? -ne 0 ]; then
    echo -e "${RED}错误：文件上传失败${NC}"
    exit 1
fi

# 5. 设置正确的文件权限
echo -e "${YELLOW}步骤 4/4: 设置文件权限...${NC}"
ssh -i $KEY_PATH -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "sudo chown -R www-data:www-data $REMOTE_PATH"

echo -e "${GREEN}✅ 部署成功完成！${NC}"
echo -e "${GREEN}网站地址：http://$SERVER_IP${NC}"
echo ""
echo -e "${YELLOW}提醒事项：${NC}"
echo "1. 确保 Lightsail 防火墙已开放 80 和 443 端口"
echo "2. 配置域名 A 记录指向 $SERVER_IP"
echo "3. 运行 'sudo certbot --nginx' 配置 HTTPS"