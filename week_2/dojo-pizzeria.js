// returns a pizza object given crust type, sauce type, cheeses & toppings
function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(p2);

// generates a random integer within the selected range
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
// generates a random pizza
function randomPizza(){
    // 9 types of pizza crust
    var crust = ["chicago style","deep dish","detroit style","flatbread","gluten free",
    "neopolitan","new york style","sicilian","stuffed crust"];
    // 6 types of sauces
    var sauce =["traditional","marinara","bbq","buffalo","alfredo","pesto"];
    // 6 types of cheeses
    var cheese = ["mozzarella","parmesan","ricotta","goat","gruyere","provolone"];
    // 10 types of toppings
    var topping = ["pepperoni","sausage","mushrooms","olives","onions","pineapple",
    "green peppers","bacon","spinach","chicken"];
    // array to contain cheese and topping choices
    var cheeses = [], toppings = [];
    // randomly generate an array of 1 to 4 unique cheeses
    for(var i=0; i<=randomInt(0,4); i++){
        // select cheese
        var choice = cheese[randomInt(0,cheese.length-1)];
        var alreadyPicked = false;
        // checks if selected cheese has already been picked
        for(var j=0; j<cheeses.length; j++){
            if(choice==cheeses[j]){ 
                alreadyPicked = true;
                break; // exit loop if cheese is a duplicate
            }
        }
        // only add cheese to array if it has not already been picked
        if(alreadyPicked==false){
            cheeses.push(choice);
        }
    }
    // randomly generate an array of 1 to 5 unique toppings
    for(var i = 0; i <= randomInt(0,5); i++){
        // select topping
        var choice = topping[randomInt(0,topping.length-1)];
        var alreadyPicked = false;
        // checks if selected topping has already been picked
        for(var j=0; j<toppings.length; j++){
            if(choice==toppings[j]){ 
                alreadyPicked = true;
                break; // exit loop if topping is a duplicate
            }
        }
        // only add topping to array if it has not already been picked
        if(alreadyPicked==false){
            toppings.push(choice);
        }
    }
    // randomly select a crust and sauce, then use cheeses and toppings to create the pizza with pizzaOven(...)
    return pizzaOven(crust[randomInt(0,crust.length-1)],sauce[randomInt(0,sauce.length-1)],cheeses,toppings);
}

// Create 2 pizzas with randomPizza()
console.log(randomPizza());
console.log(randomPizza());