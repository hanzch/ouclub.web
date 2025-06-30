// PM2 配置文件（用于 Node.js 部署选项）
const fs = require('fs');
const path = require('path');

// 手动读取 .env 文件
function loadEnvFile(filePath) {
  const envVars = {};
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    content.split('\n').forEach(line => {
      line = line.trim();
      if (line && !line.startsWith('#')) {
        const [key, value] = line.split('=');
        if (key && value) {
          envVars[key.trim()] = value.trim();
        }
      }
    });
  }
  return envVars;
}

const envVars = loadEnvFile('.env');

module.exports = {
  apps: [{
    name: 'outennis',
    script: '.output/server/index.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '1G',
    env: {
      PORT: 3000,
      HOST: '0.0.0.0',
      NODE_ENV: 'production',
      ...envVars  // 合并 .env 文件中的变量
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}