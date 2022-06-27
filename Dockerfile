FROM node:16.15.1

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 443
RUN date >/build-date.txt
CMD [ "node", "app.js" ]
# https://dev.to/vladyslavnua/dockerizing-a-node-js-application-2dd1