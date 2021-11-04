FROM node:16-alpine3.11

WORKDIR /app

VOLUME .:/app

COPY ./package.json .

RUN npm install

EXPOSE 3333

ENTRYPOINT [ "npm", "run", "dev" ]