//exercise 1
const arr1=[1,2,3,4,5,6,7];
function allValue(){ 
  for(let i of arr1){ 
    console.log(i);
  }
}
allValue();
//exercise 2
const arr2=[1,2,3,4,5,6,7,8,9];
const evenNumbers = arr2.filter(item => item % 2 === 0);
console.log(evenNumbers);
//exercise 3

const array1=[1,2,3,];
const array2=[4,5,6];
const array3=array1.concat(array2);
console.log(array3);
//exercise 4
const arr4=[ 6, 5, 4]
const reversed=arr4.reverse();
console.log(reversed);
//exercise 5
const arr5=[1,2,3];
arr5.push(4,5,6);
console.log(arr5);
//exercise 6
const arr6=[7,8,9];
arr6.unshift(1,2,3);
console.log(arr6);
//exercise 7
const arr7=['aaa', 'bbb', 'ccc'];
console.log(arr7[0]);
arr7.shift();
console.log(arr7);
//exercise 8
const arr8=['aaa', 'bbb', 'ccc'];
console.log(arr8[2]);
arr8.pop();
console.log(arr8);
//exercise 9
const arr9=[9, 10, 11, 12, 13];
const sliced=arr9.slice(2,5);
console.log(sliced);
//exercise 10
const arr10=[1,2,3,4,5];
arr10.splice(1,2);
console.log(arr10);
//exercise 11
const arr11=[1,2,3,4,5];
const copied=arr11.slice(2);
console.log(copied);
//exercise 12
const arr12=[1,2,3,4,5];
arr12.splice(4,1,'vvv', 'a', 'hello');
arr12.splice(1,0,'w','trtr');
console.log(arr12);


