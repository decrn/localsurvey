FROM node:lts-alpine

COPY . /app

WORKDIR /app

ENV PATH "$PATH:/app/node_modules/.bin"

RUN npm install

