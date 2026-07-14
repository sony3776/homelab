// ecosystem.config.js - PM2 Apps
// Sony3776 Homelab | ThinkCentre M910q | Ubuntu 24.04
// Apps: deonde, cs, aics - WhatsApp AI Bots + Web

module.exports = {
  apps: [
    {
      name: "deonde",
      // Toko De Onde Tumpeng & Kue Basah - Bot WA utama
      cwd: "/var/www/deonde",
      script: "index.js", // ganti dengan entry file kamu, misal app.js / server.js
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        TZ: "Asia/Jakarta"
      },
      error_file: "./logs/deonde-err.log",
      out_file: "./logs/deonde-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z"
    },
    {
      name: "cs",
      // CS / Customer Service Bot
      cwd: "/var/www/cs",
      script: "index.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "400M",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
        TZ: "Asia/Jakarta"
      },
      error_file: "./logs/cs-err.log",
      out_file: "./logs/cs-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z"
    },
    {
      name: "aics",
      // AICS / AI Customer Service - data di ext HDD
      cwd: "/mnt/ext-hdd/apps/aics",
      script: "index.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "600M",
      env: {
        NODE_ENV: "production",
        PORT: 3005,
        TZ: "Asia/Jakarta",
        OLLAMA_URL: "http://127.0.0.1:11434",
        ANYTHINGLLM_URL: "http://127.0.0.1:3003"
      },
      error_file: "./logs/aics-err.log",
      out_file: "./logs/aics-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z"
    }
  ]
};
