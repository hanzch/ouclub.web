// PM2 配置文件（用于 Node.js 部署选项）
module.exports = {
  apps: [{
    name: 'outennis',
    script: '.output/server/index.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '1G',
    env_file: '.env',  // 加载 .env 文件
    env: {
      PORT: 3000,
      HOST: '0.0.0.0',
      NODE_ENV: 'production'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}