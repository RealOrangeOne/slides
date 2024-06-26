FROM alpine

RUN apk add --no-cache nginx gettext nginx-mod-http-brotli nginx-mod-http-dav-ext nginx-mod-http-js apache2-utils

RUN mkdir -p /run/nginx
RUN htpasswd -b -c /etc/nginx/.htpasswd user password

COPY ./nginx.conf /etc/nginx/http.d/default.conf
COPY ./slides.js /etc/nginx/slides.js
COPY ./docker-entrypoint.sh /docker-entrypoint.sh

ENV PUID 1000

EXPOSE 80

STOPSIGNAL SIGKILL

CMD ["/docker-entrypoint.sh"]
