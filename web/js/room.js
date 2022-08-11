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
        document.getElementById('uuid').textContent = peer.id;
        document.getElementById('Username').textContent = 'Username: '+UsernameValue;
        });
    }else{
      document.location.href = '/';
    }
  }else if(UserType=='Visitor'){
    
  }

}
function copyUUID(){
  if (navigator.clipboard) {
    var uuid = sessionStorage.getItem('UUID');
    navigator.clipboard.writeText(uuid)
    UIkit.notification('<i class="fas fa-copy"></i> Copy UUID Sucessful',{status:'success'});
  }
}
initialize();