// exercise 1
let a= 10;
let b=20;
console.log(a*b);
//exercise 2
let c= 10;
let d= 30;
console.log(c/d);
//exercise 3
let e=15;
let f=20;
console.log(e+f);
//exercise 4
const g= 11;
const h= true;
const i= 'java script';
const j= 100;
console.log(g);
console.log(h);
console.log(i);
console.log(j);
//exercise 5
let num = 1;
num += 11;
console.log(num);
num -= 11;
console.log(num);
num *= 11;
console.log(num);
num /= 11;
console.log(num);
console.log(++num);
console.log(--num);

//promn alert
//exercise 1
let number = prompt("Your number?");
number=Number(number);
let res1=Math.pow(number, 2);
alert("Your result: "+ res1 );
//exercise 2
let number1= prompt("Your first number?");
let number2= prompt("Your second number?");
number1=Number(number1);
number2=Number(number2);
let average= (number1+number2)/2;
alert("Your average: " + average);
//exercise 3
let min=Number(prompt("Number of minutes: "));
let sec= min * 60;
alert("Your seconds: " + sec);
//exercise4
let greeting="Hello ";
let userName= prompt("Your Name?");
alert(greeting + userName + "!");