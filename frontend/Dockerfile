FROM node:current-alpine3.16
# setup workspace
RUN mkdir -p /home/app
WORKDIR /home/app

# install angular
RUN npm install -g @angular/cli

# copy dependency files
COPY package*.json /home/app/

# install dependencies
RUN npm ci

# setup chromium for tests
RUN apk add chromium
ENV CHROME_BIN=/usr/bin/chromium-browser
