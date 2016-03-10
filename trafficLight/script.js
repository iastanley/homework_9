// turn on stop function 
function turnOnStopLight(){
  document.getElementById("stopLight").style.backgroundColor = "red";
//turns off other lights
document.getElementById("slowLight").style.backgroundColor = "black";
document.getElementById("goLight").style.backgroundColor = "black";
}

// turn on slow function
function turnOnSlowLight(){
  document.getElementById("slowLight").style.backgroundColor = "yellow";
//turns off other lights
document.getElementById("stopLight").style.backgroundColor = "black";
document.getElementById("goLight").style.backgroundColor = "black";
}

// turn on go function
function turnOnGoLight(){
document.getElementById("goLight").style.backgroundColor = "green";
//turns off other lights
document.getElementById("slowLight").style.backgroundColor = "black";
document.getElementById("stopLight").style.backgroundColor = "black";
}

// set stop light click event
document.getElementById("stopButton").onclick = turnOnStopLight;

// set slow light click event
document.getElementById("slowButton").onclick = turnOnSlowLight;

// set go light click event
document.getElementById("goButton").onclick = turnOnGoLight;




