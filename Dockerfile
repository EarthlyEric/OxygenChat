FROM node:16.15.1

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 443
CMD [ "node", "app.js" ]
RUN date >/build-date.txt
# https://dev.to/vladyslavnua/dockerizing-a-node-js-application-2dd1