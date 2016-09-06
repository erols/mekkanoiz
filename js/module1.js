console.log("module 1 loaded");

var context = new AudioContext();

var osc1 = context.createOscillator();
osc1.type = 'square';
osc1.frequency.value = 660;

var gain1 = context.createGain();

osc1.connect(gain1);
gain1.connect(context.destination);
osc1.start();

console.log(document.getElementsByClassName('mute'))
var mute = document.getElementsByClassName('mute')[0];

mute.onclick = voiceMute;

function voiceMute() {
  if(mute.id == "") {
  	document.onmousemove = "";
    gain1.gain.value = 0;
    mute.id = "activated";
    mute.innerHTML = "Unmute";
  } else {
  	document.onmousemove = updatePage;
    gain1.gain.value = 1;
    mute.id = "";
    mute.innerHTML = "Mute";
  }
}

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var maxFreq = 6000;
var maxVol = 1;

var initialFreq = 3000;
var initialVol = 0.5;


// Mouse pointer coordinates

var CurX;
var CurY;

// Get new mouse pointer coordinates when mouse is moved
// then set new gain and pitch values

document.onmousemove = updatePage;

function updatePage(e) {   
    CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    
    osc1.frequency.value = (CurX/WIDTH) * maxFreq;
    gain1.gain.value = (CurY/HEIGHT) * maxVol;

    canvasDraw();
}