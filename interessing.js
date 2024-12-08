/// genereate random numbers from to
function randomN(min,max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomN(10,15))
//factorial
function factorial(n) { 
    if (n == 0) {
        return 1;
        } else{
        return n * factorial(n - 1);
        }
    }
console.log(factorial(4)) 
//fibonacci
function fibonacci(n) {
    if (n <= 0) {
        return "Input should be positive integer";
    } else if (n === 1) {
        return 0;
    }
    else if (n === 2) {
        return 1;}
        else{
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
}
console.log(fibonacci(7));
//Завдання: Запитай у користувача ряд чисел, розділених комами (наприклад, 5, 10, 2, 8), і виведи найменше і найбільше число.
let input = prompt("Введіть числа, розділені комами");
// Перетворюємо рядок у масив чисел
let numbers = input.split(",").map(num => parseFloat(num.trim()));
// map обробляє кожен елемент масиву (рядок, розділений комами).
// trim() видаляє зайві пробіли у кожному елементі.
// parseFloat перетворює кожен рядок у число.
// Знаходимо мінімальне та максимальне значення
let min = Math.min(...numbers);
let max = Math.max(...numbers);

// Виводимо результат
console.log(`Мінімум: ${min}, Максимум: ${max}`);
//average
let arr=prompt("Введіть 3 числа, розділені комами");
function average(arr) {
    let numbers = arr.split(",").map(num => parseFloat(num.trim()));
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}
console.log(average(arr));

//Програма випадково обирає число від 1 до 100. Користувач повинен вгадати його, вводячи числа через prompt. 
//Програма підказує: "Більше" чи "Менше", поки користувач не вгадає правильно.
let random = Math.floor(Math.random() * 100) + 1;
let guess;
guess=Number(prompt("Введіть число від 1 до 100"));
    while(guess!==random){
        if(guess>random){ 
            alert("Більше");  
        }else if(guess<random){ 
            alert("Менше"); }
        guess=Number(prompt("Введіть число від 1 до 100"));
    }
    alert("Ви вгадали!");
        
//Запитай у користувача масив чисел (через кому), відсортуй його у порядку зростання і виведи результат.
let input2 = prompt("Введіть числа, розділені комами");
// Перетворюємо рядок у масив чисел
let numbers2 = input2.split(",").map(num => parseFloat(num.trim()));
// Відсортовуємо масив у порядку зростання
numbers2.sort((a, b) => a - b);
// Функція порівняння (a, b) => a-b
// ((a, b) => a - b)в гарантує правильне
// сортування чисел по зростанню:
// ((a, b) => a - b)Якщо результат віднімання а - в відʼємний, то а йде перед b.
// ((a, b) => a - b)Якщо результат додатний — b иде перед а.
// ((a, b) => a - b)Якщо результат 0 — порядок не змінюється.

// arr.sort((a, b) => b -a);за спаданням
console.log(numbers2); // [1, 2, 3, 4, 5

//Запитай у користувача кількість секунд і переведи її в години, хвилини та секунди.
let seconds = Number(prompt("Введіть кількість секунд"));
let hours = Math.floor(seconds / 3600);
let minutes = Math.floor((seconds % 3600) / 60);
let seconds2 = seconds % 60;
console.log(`${hours} годин, ${minutes} хвилин, ${seconds2} секунд`);
//Завдання: Створи генератор випадкових паролів, який містить букви (великий і малий регістр), цифри та спеціальні символи.
let password = "";
let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={1234567890";
for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * symbols.length);
    password += symbols[randomIndex];
    }
    console.log(password); // генерує випадковий пароль із 10 символів
//Запитай у користувача рядок і визначи, скільки слів у ньому.
let str = prompt("Введіть рядок");
let words = str.split(" ");
console.log(words.length); // виводить кількість слів у рядку

// вибрати рандомне значення
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  console.log(getRandomComputerResult()); // виводить випадковий результат
   
