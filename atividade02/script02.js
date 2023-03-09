setInterval(timeNow, 1000);
function timeNow(){
  var hourNow = new Date();
  var time = hourNow.toLocaleTimeString();
  document.getElementById("hora").innerHTML = time;
}