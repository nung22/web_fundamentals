// ARRAY NUMLIKES STORES NUMBER OF LIKES FOR EACH POST
var numLikes = [document.querySelector("#num-likes-top"),document.querySelector("#num-likes-middle"),document.querySelector("#num-likes-bottom")];

// ADDS A LIKE TO THE TOP POST
function addLikeTop(){
    numLikes[0].innerText++;
}

// ADDS A LIKE TO THE MIDDLE POST
function addLikeMiddle(){
    numLikes[1].innerText++;
}

// ADDS A LIKE TO THE BOTTOMPOST
function addLikeBottom(){
    numLikes[2].innerText++;
}