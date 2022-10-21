function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
    
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    console.log(time%60);
    console.log(time%3600);
    hour.style.transform = 'rotate(' + (time%43200)/120 + 'deg)';
    minutes.style.transform = 'rotate(' + (time%3600)/10 + 'deg)';
    seconds.style.transform = 'rotate(' + (time%60)*6 + 'deg)';
}, 1000);