var displayDiv = document.querySelector("#display");
var savedVal = 0;
var currentVal = 0;
var currentOP = "";

function press(number){
    if(displayDiv.innerText==="0"||parseInt(displayDiv.innerText)===savedVal){
        displayDiv.innerText="";
    }
    displayDiv.innerText += number;
    currentVal = parseInt(displayDiv.innerText);
}

function setOP(operator){
    currentOP = operator;
    savedVal = parseInt(displayDiv.innerText);
}

function clr(){
    displayDiv.innerText = "0";
    savedVal = 0;
}

function calculate(){
    var newVal = 0;
    if(currentOP==="+"){ newVal = savedVal + currentVal; }
    else if(currentOP==="-"){ newVal = savedVal - currentVal; }
    else if(currentOP==="*"){ newVal = savedVal * currentVal; }
    else if(currentOP==="/"){ newVal = savedVal / currentVal; }
    displayDiv.innerText = newVal;
    savedVal = newVal;
}