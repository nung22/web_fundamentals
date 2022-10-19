function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
    
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    console.log(time%60);
    moveSecondHand(time);
    moveMinuteHand(time);
    moveHourHand(time);
}, 1000);

var seconds = document.querySelector("#seconds");
var minutes = document.querySelector("#minutes");
var hours = document.querySelector("#hour");


function moveSecondHand(sec){
    seconds.style.transform = 'rotate(' + sec*6 + 'deg)';
}

function moveMinuteHand(sec){
    minutes.style.transform = 'rotate(' + sec/3600% + 'deg)';

}

function moveHourHand(sec){
    hours.style.transform = 'rotate(' + ((sec/3600)%12)/12*360 + 180 + 'deg)';
}