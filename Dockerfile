FROM node:lts-alpine

COPY . /app

WORKDIR /app

RUN npm ci
