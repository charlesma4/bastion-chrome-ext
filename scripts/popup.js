/* Begin Bastion Mainframe Runtime
Version 0.0.1
*/

window.onload=function(){}

/*
document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("myImage").src = "images/switch.gif";
  document.getElementById('button1').textContent="Verifying"
  setTimeout(function() {window.location.href='landing.html'}, 2000);
});
*/

window.onload=function(){
  var el = document.getElementById('confirm_button1')
  el.addEventListener("click", function(){
    window.location.href='bastion.html';
  });
}
