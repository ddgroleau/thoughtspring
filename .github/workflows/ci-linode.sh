#!/bin/bash

#$1 LOCAL_PORT
#$2 NEXT_PUBLIC_RECAPTCHA_SITE_KEY
#$3 RECAPTCHA_SECRET_KEY
#$4 EMAIL_ACCOUNT
#$5 EMAIL_DAEMON
#$6 EMAIL_PASSWORD

docker pull thoughtspring/thoughtspring;

docker stop thoughtspring && docker rm thoughtspring;

docker build . -t thoughtspring/thoughtspring;

docker run -d -p "$1":3000 --name thoughtspring --restart always \
-e NEXT_PUBLIC_RECAPTCHA_SITE_KEY="$2" \
-e RECAPTCHA_SECRET_KEY="$3" \
-e EMAIL_ACCOUNT="$4" \
-e EMAIL_DAEMON="$5" \
-e EMAIL_PASSWORD="$6" \
thoughtspring/thoughtspring;

exit;