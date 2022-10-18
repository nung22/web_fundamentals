var displayDiv = document.querySelector("#display");
var savedVal = 0;
var currentOP = "";

function press(number){
    if(displayDiv.innerText==="0"){
        displayDiv.innerText="";
    }
    if(currentOPs!=""&&SavedVal){
        displayDiv.innerText="";
    }
    displayDiv.innerText += number;
}

function setOP(operator){
    currentOP = operator;
    savedVal = displayDiv.innerText;
}

function clr(){
    displayDiv.innerText = "0";
    savedVal = 0;
}

function calculate(){
    var newVal = 0;
    if(currentOp==="+"){
        newVal = savedVal + displayDiv.InnerText;
    }
    savedVal = 0;
    displayDiv.innerText = newVal;

}