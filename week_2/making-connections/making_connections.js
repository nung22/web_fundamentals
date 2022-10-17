console.log("page loaded...");
// CHANGE USERNAME FROM JANE DOE TO LESLIE KNOPE
function changeName(){
    var name = document.querySelector(".card-body h1");
    name.innerText = "Leslie Knope";
}

// REMOVE CONNECTION REQUEST AND DECREASE "CONNECTION REQUESTS" NUMBER
function closeRequest(){
    var request = document.querySelector(".card-list-item");
    var totalRequests = document.querySelector(".conn-req");
    totalRequests.innerText--;
    request.remove();
}

// REMOVE CONNECTION REQUEST, DECREASE "CONNECTION REQUESTS" NUMBER AND INCREASE "YOUR CONNECTIONS" NUMBER
function acceptRequest(){
    closeRequest();
    var totalConnections = document.querySelector(".your-conn");
    totalConnections.innerText++;
}