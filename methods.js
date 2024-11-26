//exercise 1
const string='Даний рядок тексту. Вивести його задом наперед';
const reversedStr = string.split("").reverse().join("");
console.log(reversedStr);
//exercise 2
function roundNumber(n){
    if (Number.isSafeInteger(n)){ 
        throw new SyntaxError("your number should be not a integer")
    }else{ 
return Math.round(n);
    }
}
try {
    console.log(roundNumber(2));  
} catch (error) {
    console.error("your syntax is incorrect");
}
//exercise 3
let name =prompt("What is your nsme?");
const nameUp=name.toUpperCase();
console.log(nameUp);
//exercise 4
function dateFormater (date){  
   let dateSplit=date.split("-");
   let year=dateSplit.shift();
   dateSplit.push(year);
   return dateSplit.join("-");
}

console.log(dateFormater("2021-22-09"))
//exercise 5
function compare(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(compare('pApA', 'papa'));   
  console.log(compare('qwerty', 'QWErty')); 
  console.log(compare('aaa', 'EEE'));
  //exercise 6
  //завдання 2 підходить?