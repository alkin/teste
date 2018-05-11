FROM nginx:1-alpine

EXPOSE 443

ADD ./devops/services/web/nginx.conf /etc/nginx/nginx.conf
ADD ./devops/services/web/vhost.conf /etc/nginx/conf.d/default.conf

# Copy Entrypoint
COPY ./devops/services/web/entrypoint.dev.sh /opt/bin/entrypoint.sh
RUN chmod +x /opt/bin/entrypoint.sh

# Run Entrypoint
CMD ["/opt/bin/entrypoint.sh"]