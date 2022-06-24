document.getElementById('setUsername').onclick = function () {
    var UsernameValue = document.getElementById("Username").value;
    if (UsernameValue.match(' ')){
        alert('Please Set Username !');
    }else{
        if(UsernameValue!=''){
            sessionStorage.setItem('Username', UsernameValue);
            sessionStorage.setItem('UUID','')
            document.location.href = '/room';
        }else if(UsernameValue===''){
            alert('Please Set Username !');
        }
    }
  }
