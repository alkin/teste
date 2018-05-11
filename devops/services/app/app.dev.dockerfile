FROM php:7.2-fpm-alpine

WORKDIR /var/www

# Install Packages
RUN apk update && \
    apk add --no-cache \
    git zip unzip supervisor \
    freetype-dev libpng-dev libjpeg-turbo-dev && \
    rm -rf /var/cache/apk/*

# TODO: Set timezone

# Install PHP extensions
RUN docker-php-ext-configure gd \
    --with-gd \
    --with-freetype-dir=/usr/include/ \
    --with-jpeg-dir=/usr/include/ \
    --with-png-dir=/usr/include/ && \
    docker-php-ext-install gd pdo_mysql opcache

# Install Composer
RUN curl -s http://getcomposer.org/installer | php && \
    echo "export PATH=${PATH}:/var/www/vendor/bin" >> ~/.bashrc && \
    mv composer.phar /usr/local/bin/composer

RUN composer global require hirak/prestissimo

# Install Supercronic (Scheduler)
ENV SUPERCRONIC_URL=https://github.com/aptible/supercronic/releases/download/v0.1.2/supercronic-linux-amd64 \
    SUPERCRONIC=supercronic-linux-amd64 \
    SUPERCRONIC_SHA1SUM=cdfde14f50a171cbfc35a3a10429e2ab0709afe0

RUN curl -fsSLO "$SUPERCRONIC_URL" \
    && echo "${SUPERCRONIC_SHA1SUM}  ${SUPERCRONIC}" | sha1sum -c - \
    && chmod +x "$SUPERCRONIC" \
    && mv "$SUPERCRONIC" "/usr/local/bin/${SUPERCRONIC}" \
    && ln -s "/usr/local/bin/${SUPERCRONIC}" /usr/local/bin/supercronic

# Configure Supercronic
RUN mkdir /etc/supercronic
COPY ./devops/services/app/crontab /etc/supercronic/app
RUN chmod 644 /etc/supercronic/app

# Configure Supervisor
COPY ./devops/services/app/supervisor.conf /etc/supervisor/supervisor.conf

# Configure PHP
COPY ./devops/services/app/php.ini /usr/local/etc/php/conf.d/php.ini

# Remove access.log from stdout
RUN sed -i -e 's/access.log = \/proc\/self\/fd\/2/access.log = \/proc\/self\/fd\/1/g' /usr/local/etc/php-fpm.d/docker.conf

# Copy Entrypoint
COPY ./devops/services/app/entrypoint.sh /opt/bin/entrypoint.sh
RUN chmod +x /opt/bin/entrypoint.sh

# Run Entrypoint
CMD ["/opt/bin/entrypoint.sh"]


