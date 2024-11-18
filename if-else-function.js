//exercise 1
let number1=Number(prompt("Your first number?"));
let number2=Number(prompt("Your second number?"));
if((number1+number2) % 5 === 0) { 
    alert("the sum is a multiple of 5");}
    else{ 
        alert("the sum is not a multiple of 5");}
//exercise 2
let side=Number(prompt("Your square length?"))
function squareA(side){
    return side * side;
}

//exercise 3
function menuDrinks() {
    let choice = prompt(
        "1 - Tea\n" +
        "2 - Coffee\n" +
        "3 - Juice\n" +
        "4 - Water\n"
    );
    switch (choice) {
        case "1":
        alert("You chose tea");
        break;
        case "2":
        alert("You chose coffee");
        break;
        case "3":
        alert("You chose juice");
        break;
        case "4":
        alert("You chose water");
        break;
        default:
        alert("We don't have it");
    }
}
//exercise 4
let sum= Number(prompt("purchase sum:"))
let price = (sum> 800)? sum * 0.95 :(sum>500)? sum * 0.97 : sum;

console.log("Final Price: " + price);

//exercise 5 
// let number10 = Number(prompt("Your first number:"));
// let number20 = Number(prompt("Your second number:"));
//     if (number10 % number20 === 0) {
//console.log(true)
//}   

let number10 = Number(prompt("Your first number:"));
let number20 = Number(prompt("Your second number:"));

function check(number10, number20) {
    return number10 % number20 === 0;
}
console.log(true)

//exercise 6
let a = Number(prompt("Your first number:"));
let b = Number(prompt("Your second number:"));
let c = Number(prompt("Your third number:"));

function discriminant(a, b, c){
    return b**2 - 4*a*c;
}
console.log(discriminant(a, b, c));