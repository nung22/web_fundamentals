// REMOVES COOKIE POLICY MESSAGE
function dismissMessage(){
    var cookieMessage = document.querySelector(".cookie");
    cookieMessage.remove();
}


// CONVERT TEMPERATURE BETWEEN FAHRENHEIT AND CELSIUS
function changeUnits(element){
    // store all temperatures in an array temp
    var temp = document.querySelectorAll("#temp");
    // convert temperatures from fahrenheit to celsius if celsius units are selected
    if(element.value === "°C"){
        for(var i=0; i<temp.length; i++){
            temp[i].innerText = Math.round((temp[i].innerText - 32) / 9*5);
        }
    }
    // convert temperatures from celsius to fahrenheit if fahrenheit units are selected
    else if(element.value === "°F"){
        for(var i=0; i<temp.length; i++){
            temp[i].innerText = Math.round(temp[i].innerText * 9/5 + 32);
        }
    }
}