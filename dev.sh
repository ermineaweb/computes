#!/bin/bash

LOCAL_PATH=$(pwd)
APP_NAME="computes"

docker build -t "$APP_NAME":dev .

docker run -it --rm \
--entrypoint /bin/sh \
-p 5000:5000 \
-v "$LOCAL_PATH":/app \
"$APP_NAME":dev \
-c 'npm install && npm run dev'