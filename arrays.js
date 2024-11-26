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
//exercise 13*******************************************************************************************
//find maches /includes
let str;
let count;
const vovelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
function countVovels(str, vovelsArray){
  count=0;
  for(let l of str.toLowerCase()){
    if(vovelsArray.includes(l)){
      count++; 
    }
  }
  return count;
};
console.log(countVovels('hello to you',vovelsArray));
//
//
//alternative
function matchVowels(str) {
  // Regular expression to match vowels (including 'y')
  const vowelRegex = /[aeiouy]/g;
  
  // Use match() to find all occurrences of vowels in the string
  let result=str.match(vowelRegex) || []; 
 return result? result.length : 0;
}

// Example usage:
const str1 = 'hello to you';
const str2 = 'lorem ipsum dolor sit amet';

console.log(matchVowels(str1)); // Logs vowels in str1
console.log(matchVowels(str2)); 

//************************************************************************************************** *************************************
//14 cheking user password if it has any numbers any capitalcase, any symbols
/[A-Z]/;
/\d/;
/[^A-Za-z0-9]/;
//regular expression
function validatePassword(password) {
  // Check for uppercase letter
  const hasUpperCase = /[A-Z]/.test(password);
  
  // Check for a number
  const hasNumber = /\d/.test(password);
  
  // Check for a symbol (anything that is not a letter or number)
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  // Output the results for each check
  console.log('Contains uppercase letter:', hasUpperCase);
  console.log('Contains number:', hasNumber);
  console.log('Contains symbol:', hasSymbol);

  // Return true if all conditions are met, false otherwise
  return hasUpperCase && hasNumber && hasSymbol;
}

// Example usage
const password = "Hello123!";
const isValid = validatePassword(password);
console.log('Password valid:', isValid); // Outpu

// 15 ************************************************************************************************************************
//check password for length
function validatePassword(password) {
  const minLength = 8;
  const maxLength = 16;

  if (password.length < minLength) {
    return `Password is too short. It must be at least ${minLength} characters.`;
  } else if (password.length > maxLength) {
    return `Password is too long. It must be no more than ${maxLength} characters.`;
  }

  // Check for at least one uppercase letter, one number, and one special character
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
    return 'Password must contain at least one uppercase letter, one number, and one special character.';
  }

  return 'Password is valid.';
}

// Example usage:
console.log(validatePassword('hello123')); // Password must contain at least one uppercase letter, one number, and one special character.
console.log(validatePassword('Valid1Password!')); // Password is valid.
console.log(validatePassword('Short1!')); // Password is too short. It must be at least 8 characters.