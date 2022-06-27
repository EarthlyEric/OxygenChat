var UsernameValue = sessionStorage.getItem('Username');
var UserType = sessionStorage.getItem('UserType');

function initialize(){
  if(UserType=='RoomHoster'){
    if(sessionStorage.getItem('Username')!=null){
      if(sessionStorage.getItem('UUID')==''){
        var uuid = crypto.randomUUID();
        sessionStorage.setItem('UUID',uuid);
      }else{
        var uuid = sessionStorage.getItem('UUID');
      }
      const peer = new Peer(uuid, {
        host: location.hostname,
        port: 443,
        path: '/api/webrtc'
        });
      peer.on('open', function (id) {
        document.getElementById('uuid').textContent = 'Room ID: '+peer.id;
        document.getElementById('Username').textContent = 'Username: '+UsernameValue;
        });
    }else{
      document.location.href = '/';
    }
  }else if(UserType=='Visitor'){
    
  }

}
initialize();