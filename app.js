const express = require('express');
const path = require('path');
const http = require('http');
const { ExpressPeerServer } = require('peer');
const port = process.env.PORT || 80; //Set up http port.


const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/webrtc'
});

// Routing.
app.use(express.static(path.join(__dirname, 'web'))); 


server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
