FROM node:12.13.0-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

RUN apk add --no-cache bash

RUN npm install -g pm2

COPY package*.json ./
RUN npm install --production

COPY ./dist .
COPY ./pm2.config.js .
COPY ./.env .

EXPOSE 4000

CMD [ "pm2-runtime", "start", "pm2.config.js" ]
