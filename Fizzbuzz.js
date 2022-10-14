// Go through each number from 1 to 100
for(var i=1; i<101; i++){
    // Print FizzBuzz for multiples of 3 and 5
    if(i%3===0&&i%5===0){
        console.log("FizzBuzz");
    }
    // Print Fizz for multiples of 3
    else if(i%3===0){
        console.log("Fizz");
    }
    // Print Buzz for multiples of 5
    else if(i%5===0){
        console.log("Buzz");
    }
    // Print the number if it's neither a multiple of 3 nor 5
    else{
        console.log(i);
    }
}