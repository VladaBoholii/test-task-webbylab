#!/bin/sh

# Створити runtime config.js з потрібним API_URL
echo "window._env_ = { REACT_APP_API_URL: '${REACT_APP_API_URL:-http://localhost:8000/api/v1}' };" > /usr/share/nginx/html/env.js

# Запустити nginx
exec "$@"
