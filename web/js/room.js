var UsernameValue = sessionStorage.getItem("Username");

function initialize(){
  if(sessionStorage.getItem('Username')!=null){
    if(sessionStorage.getItem('UUID')==''){
      var uuid = crypto.randomUUID();
      sessionStorage.setItem('UUID',uuid);
    }else if(sessionStorage.getItem('UUID')){
      var uuid = sessionStorage.getItem('UUID');
    }
      const peer = new Peer(uuid, {
          host: location.hostname,
          port: 443,
          path: '/api/webrtc'
        });
      peer.on("open", function (id) {
        document.getElementById("uuid").textContent = "Room ID: "+peer.id;
        document.getElementById("Username").textContent = "Username: "+UsernameValue;
      });
  }else{
    document.location.href = '/';
  }
}
initialize()