// BASIC 13 ALGORITHMS

// 1. Print all the integers from 1 to 255
function print1to255(){
    // FOR LOOP ITERATES FROM 1 TO 255
    for(var i=1; i<=255; i++){
        // PRINT CURRENT ELEMENT
        console.log(i);
    }
}

// 2. Print all the odd integers from 1 to 255
function printOdds1To255(){
    // FOR LOOP ITERATES FROM 1 TO 255 IN INCREMENTS OF 2
    for(var i=1; i<=255; i+=2){
        // PRINT CURRENT ELEMENTS
        console.log(i);
    }
}

// 3. Print integers from 0 to 255, and with each integer print the sum so far
function printIntsAndSum0to255(){
    // CREATE A VARIABLE TO TRACK SUM
    var sum=0;
    // FOR LOOP TO ITERATES FROM 0 TO 255
    for(var i=0; i<=255; i++){
        // ADD CURRENT INTEGER TO SUM
        sum += i;
        // PRINT THE INTEGER
        console.log(i);
        // PRINT THE SUM
        console.log(sum);
    }
}

// 4. Iterate through a given array, printing each value

// 5. Given an array, find and print it largest element

// 6. Analyze an array's values and print the average

// 7. Create an array with all the odd integers between 1 and 255 (inclusive)

// 8. Square each value in a given array, returning that same array with changed values

// 9. Given an array and a value Y, count and print the number of array values greater than Y

// 10. Return the given array, after setting any negative values to zero

// 11. Given an array, print the max, min and average values for that array

// 12. Given an array, move all values forward (to the left) by one index, dropping the first 
//     value and leaving a 0 value at the end of the array

// 13. Given an array of numbers, replace any negative values with the string 'Dojo'.