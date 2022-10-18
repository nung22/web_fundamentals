// 1. Always Hungry

function alwaysHungry(arr) {
    // CREATE VARIABLE full TO KEEP TRACK OF WHETHER OR NOT FOOD WAS PRESENT
    var full = false;
    // FOR LOOP ITERATES THROUGH ARRAY arr
    for(var i=0; i<arr.length; i++){
        // IF VALUE IS "food" CONSOLE LOG "yummy" and set value of full to true
        if(arr[i]==="food"){
            console.log("yummy");
            full = true;
        }
    }
    // CONSOLE LOG "I'm hungry" IF NO FOOD WAS PRESENT
    if(full===false){
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// 2. High Pass Filter

function highPass(arr, cutoff) {
    // CREATE A NEW ARRAY filteredArr TO HOLD VALUES LARGER THAN CUTOFF
    var filteredArr = [];
    // FOR LOOP ITERATES THROUGH ARRAY arr
    for(var i=0; i<arr.length; i++){
        // IF ELEMENT IS GREATER THAN cutoff ADD IT TO filteredArr
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// 3. Better than average

function betterThanAverage(arr) {
    // calculate the average
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    var avg = sum/arr.length;

    // count how many values are greated than the average
    var count = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]>avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// 4. Array Reverse

function reverse(arr) {
    // set variables to track end and start indices of arr
    var start = 0;
    var end = arr.length-1;
    // execute while loop until start and end have same value 
    while(start!=end){
        // create temporary var to store front value of array
        var temp = arr[start];
        // set front value of array to end value
        arr[start] = arr[end];
        // set end value of array to start value that was stored in temporary var
        arr[end] = temp;
        // increase & decrease start & end by 1 respectively to swap values from the ends of the array working inward
        start++, end--;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// 5. Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // for loop iterates from length of starting fibonacci array through given length
    for(var i=fibArr.length; i<n; i++){
        // var to hold last element of fibArr
        var last = fibArr[fibArr.length-1];
        // var to hold second to last element of fibArr
        var nextToLast = fibArr[fibArr.length-2];
        // add sum of last two fibArr elements to the end of fibArr
        fibArr.push(last+nextToLast);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

