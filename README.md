# Homelab - Lenovo ThinkCentre M910q

Home server 24/7 untuk web server, file cloud, dan AI lokal. Uptime 17+ hari.

**Live:** https://appme.my.id (ganti dengan domain kamu)
**GitHub:** sony3776

### Infra Spec
- **Hardware:** Lenovo ThinkCentre M910q | Intel i7-7700 4C/8T @ 3.6GHz (boost 4.2) | 31GB RAM | 8GB Swap
- **OS:** Ubuntu 24.04.4 LTS, Kernel 6.17.0-35-generic
- **Storage:** 108GB NVMe System (ext4 LVM) + 916GB Ext HDD `/mnt/ext-hdd` untuk data
- **Network:** Nginx 1.24 Reverse Proxy (80/443) -> Docker & PM2, SSH

### Stack & Services
- **Web:** Nginx 1.24.0, Node.js v20.20.2, Python 3.12.3
- **Container (Docker 29.1.3):**
    - `ollama` : LLM server lokal port 11434
    - `anythingllm` : Chat UI port 3003 -> 3001
    - `n8n` : Automation port 5678
    - `seafile` + mysql + memcached : Private cloud port 8080
    - `scrutiny` : Disk health monitoring 9095/8066
- **PM2 Apps:** `deonde`, `cs`, `aics` (Node apps port 3000,3001,3002,3005)
- **Other:** Redis 6379, Mongo 27017, MySQL 3306

### Architecture
Internet -> Nginx (443) -> [ PM2: deonde/cs/aics | Docker: anythingllm/ollama/n8n/seafile ]

### Monitoring
- Uptime Kuma / `uptime` 17 days
- `pm2 list` dan `docker ps` untuk health check
- Backup cron ke /mnt/ext-hdd

### Cara Replikasi
\`\`\`bash
git clone https://github.com/sony3776/homelab
docker compose up -d
pm2 start ecosystem.config.js
\`\`\`
