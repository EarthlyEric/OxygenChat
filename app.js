const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io');
const port = process.env.PORT || 80; //Set up port.


const app = express();
const server = http.createServer(app);
const io = socket(server);

//WebSocket
const onConnection = (socket) => {
    socket.on("join");
    socket.on("disconnect");
  
    // P2P
    //SDP offer 
    socket.on("SDPoffer");
    // SDP answer
    socket.on("SDPanswer");
    //ICE
    socket.on("icecandidate");
};

// Routing.
app.use(express.static(path.join(__dirname, 'web'))); 

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});