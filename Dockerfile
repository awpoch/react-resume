FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN yarn build

CMD ["yarn", "dev"]

EXPOSE 3000