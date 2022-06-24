const express = require('express');
const path = require('path');
const http = require('http');
const { ExpressPeerServer } = require('peer');
const port = process.env.PORT || 443; //Set up http port.

const app = express();
const server = http.createServer(app);
//PeerServer
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/webrtc'
});
// Routing.
//Web
app.use(express.static('web'));
//WebRTC PeerServer
app.use('/api',peerServer);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/web/index.html'));
});

app.get('/create_room', function(req,res){
  res.sendFile(path.join(__dirname+'/web/create_room.html'))
});

app.get('/room', function(req,res){
  res.sendFile(path.join(__dirname+'/web/room.html'))
});

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
