document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("myImage").src = "images/switch.gif";
  document.getElementById('button1').textContent="Verifying"
  setTimeout(function() {window.location.href='landing.html'}, 2000);
});
