//exercise 1
let b=1;
while(b<=10){ 
    b++;
    console.log(Math.pow(b,2));
}

//exercise 2
const CORECT_PASSWORD=`password`;
let userPassword=prompt(`your password:`);

while(userPassword!==CORECT_PASSWORD){
    console.log(`try again`)
    userPassword=prompt(`your password:`);
}
    console.log(`you have successfully logged in`);


//exercise 3
let a= 1
let sum=0;
while(a<=100){ 
    sum+=a;
    a++;
}
console.log(sum);

//exercise 4
for(let b=10; b<=50; b++){ 
    if(b%5!==0)continue;
    console.log(b);
}

//exercise 5
let triangleSize=prompt(`how many rows should a triangle take?`);
let row=`*`;
for (let i=0; i<=triangleSize; i++){
    row+= `*`;
}
i++;
console.log(row)
