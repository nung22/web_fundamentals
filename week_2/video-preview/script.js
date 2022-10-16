console.log("page loaded...");

// play video muted on mouseover 
function over(element){
    element.play();
    element.muted = true;
}

// pause video on mouseout
function out(element){
    element.pause();
}