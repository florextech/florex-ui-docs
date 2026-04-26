FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location = / { return 302 /en/; } \
    location / { try_files $uri $uri/ $uri/index.html =404; } \
    error_page 404 /404.html; \
}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
