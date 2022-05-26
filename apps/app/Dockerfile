FROM nginx:stable-alpine
COPY dist /app/dist
COPY nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
