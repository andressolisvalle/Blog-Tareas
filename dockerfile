FROM node:21-alpine as build

WORKDIR /app

COPY package-lock.json .
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]

