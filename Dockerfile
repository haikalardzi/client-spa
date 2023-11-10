FROM node:18-alpine

WORKDIR /var/www/app

COPY package*.json /var/www/app

RUN npm install

COPY . /var/www/app

EXPOSE 3000

CMD [ "npm", "start" ]