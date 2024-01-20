FROM node:18-alpine as builder

WORKDIR /main

COPY apps/client/package.json apps/client/package.json

COPY package.json .
COPY yarn.lock .

RUN yarn install --pure-lockfile --cache-folder ./yarncache; rm -rf ./yarncache; 

COPY apps/client apps/client

RUN yarn workspace client build

FROM nginx:1.25 as runner

COPY --from=builder /main/apps/client/dist /usr/share/nginx/html




