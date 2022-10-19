// Sends alert to user that their cart is empty
function cartStatus(){
    alert('Your Cart is empty!');
}

// Changes original image to a new image
function changePic(element){
    element.src = ("./assets/succulents-2.jpg");
}
// Reverts changed image back to original image
function restorePic(element){
    element.src = ("./assets/succulents-1.jpg");
}

// Removes cookie message
function removeMessage(){
    document.querySelector(".cookie").remove();
}