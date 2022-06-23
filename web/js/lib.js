function onButtonToRedirect(path){
  document.location.href = path;
}
document.addEventListener('DOMContentLoaded', function() {
  fetch('/logo.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })
}, false);