FROM node:alpine

ENV YARN_VERSION 1.22.19

WORKDIR /usr/app/

COPY . .
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start:dev"]
