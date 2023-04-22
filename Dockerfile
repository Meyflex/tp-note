FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn add global typescript

RUN yarn install --frozen-lockfile

COPY src ./src

ENV DATABASE_URL file:../../../db.development.sqlite
RUN yarn db:generate
RUN yarn db:migrate

CMD [ "yarn", "serve" ]