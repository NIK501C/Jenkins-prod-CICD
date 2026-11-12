# Use lightweight Nginx image
FROM nginx:alpine

# Copy frontend files into Nginx web directory
COPY index.html style.css script.js /usr/share/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose Nginx port
EXPOSE 80

