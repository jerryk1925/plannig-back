FROM node:12
WORKDIR /usr/app

COPY package.json .
COPY ormconfig.json .
RUN yarn

COPY . .
EXPOSE 8000

CMD ["yarn", "serve"]
