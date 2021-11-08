FROM node:14-alpine3.12

WORKDIR /app

# Install python/pip
# ENV PYTHONUNBUFFERED=1
# RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
# RUN python3 -m ensurepip
# RUN pip3 install --no-cache --upgrade pip setuptools

RUN apk --no-cache --virtual build-dependencies add \
        python3 \
        py3-pip \
        make \
        g++ 

COPY ./package.json .

COPY ./package-lock.json .

RUN npm install

RUN npm install node-pre-gyp --save

RUN npm install sqlite3 --build-from-source --save

COPY . /app/

RUN npm run knex:seed && npm run knex:migrate

EXPOSE 3333

ENTRYPOINT [ "npm", "run", "dev" ]