// //exercise 1
// let b = 1;
// while (b <= 10) {
//   b++;
//   console.log(Math.pow(b, 2));
// }

// //exercise 2
// const CORECT_PASSWORD = `password`;
// let userPassword = prompt(`your password:`);

// while (userPassword !== CORECT_PASSWORD) {
//   console.log(`try again`);
//   userPassword = prompt(`your password:`);
// }
// console.log(`you have successfully logged in`);

// //exercise 3
// let a = 1;
// let sum = 0;
// while (a <= 100) {
//   sum += a;
//   a++;
// }
// console.log(sum);

// //exercise 4
// for (let b = 10; b <= 50; b++) {
//   if (b % 5 !== 0) continue;
//   console.log(b);
// }

// //exercise 5
let triangleSize = Number(prompt(`how many rows should a triangle take?`));
// let row = `*`;
// for (let i = 1; i <= triangleSize; i++) {
//   row += `*`;
//   console.log(row);
// }
//exercise 6
for (let i = 0; i < triangleSize; i++) {
  let row = "";
  for (let j = 0; j < triangleSize; j++) {
    if (
      i === 0 ||
      i === triangleSize - 1 ||
      j === 0 ||
      j === triangleSize - 1 ||
      j === i
    ) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
//exercise 7
// for (let i = 0; i < triangleSize; i++) {
//   let row = "";
//   for (let j = 0; j < triangleSize; j++) {
//     if(i===0||i===triangleSize-1||j===0 ||j===triangleSize-1|| j===triangleSize-1-i){
//       row+="*"
//     }else{
//       row+=" "
//     }

//   }
//   console.log(row)
// }
