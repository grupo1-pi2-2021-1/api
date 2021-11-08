FROM node:16-alpine3.12

WORKDIR /app

RUN apk --no-cache --virtual build-dependencies add \
        python3 \
        py3-pip \
        make \
        g++ 

COPY ./package.json .

RUN npm install

COPY . /app/

RUN npm run knex:seed && npm run knex:migrate

EXPOSE 3333

ENTRYPOINT [ "npm", "run", "dev" ]