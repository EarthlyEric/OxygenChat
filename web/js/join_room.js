document.getElementById('Join').onclick = function () {
    var UsernameValue = document.getElementById("Username").value;
    var RoomID = document.getElementById('RoomID').value;
    if (UsernameValue.match(' ')){
        alert('Username is not allowed to include blank characters !');
    }else{
        if(UsernameValue!=''&RoomID !=''){
            sessionStorage.setItem('Username', UsernameValue);
            sessionStorage.setItem('UUID','')
            sessionStorage.setItem('RoomID',RoomID)
            sessionStorage.setItem('UserType','Visitor')
            document.location.href = '/room';
        }else if(UsernameValue===''){
            alert('Please set Username !');
        }
    }
}
