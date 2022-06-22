document.getElementById('setUsername').onclick = function () {
    let UsernameValue = document.getElementById("Username").value; 
    sessionStorage.setItem('Username', UsernameValue);
    document.location.href = '/room';
  }