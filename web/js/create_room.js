document.getElementById('Join').onclick = function () {
    var UsernameValue = document.getElementById('Username').value;
    if (UsernameValue.match(' ')){
        alert('Username is not allowed to include blank characters !');
    }else{
        if(UsernameValue!=null){
            sessionStorage.setItem('Username', UsernameValue);
            sessionStorage.setItem('UUID','')
            sessionStorage.setItem('RoomID','')
            sessionStorage.setItem('UserType','RoomHoster')
            document.location.href = '/room';
        }else if(UsernameValue==''){
            alert('Please set Username !');
        }
    }
}
