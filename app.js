const express = require('express');
const path = require('path');
const http = require('http')
const port = process.env.PORT || 80; //Set up port.

const app = express();
const server = http.createServer(app) 

// Routing.
app.use(express.static(path.join(__dirname, 'web'))); 

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});