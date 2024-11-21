//exercise 1
const user = {
  name: "John",
  surname: "Kenny",
  email: "John@gmail.com",
  password: "123456",
  mobilNumber: "+380661235407",
  address: {
    city: "IvanoFrankivsk",
    street: "Konovalca",
    house: 44,
    flat: 112,
  },
};
console.log(user);
//exercise 2
function greet(user) {
  console.log("Hello " + user.name + " " + user.surname);
}
greet(user);
//exercise 3
function allValue(user) {
  for (let key in user) {
    console.log(`${key} : ${user[key]}`);
  }
}
allValue(user);
//exercise 4
let car = {
  color: "black",
  model: "BMW",
  brand: "X5",
  engineVolume: 1000,
  passengers: 5,
  speed: 70,
  maxSpeed: 180,
  accelerate() {
    let increase =Number(prompt("Enter increase (km/hours)"));
    while(increase % 1 !== 0 || this.speed + increase > this.maxSpeed) {
      console.log("incorrect imput");
      increase=Number(prompt("Enter increase (km/hours)"))
    }
    this.speed= this.speed +increase;
    return this.speed;
  },
  deaccelerate() {
    let dicrease =Number(prompt("Enter dicrease(km/hours)"));
    while(dicrease % 1 !== 0 || this.speed - dicrease <= 0) {
      console.log("incorrect imput");
      dicrease=Number(prompt("Enter dicrease (km/hours)"))
    }
    this.speed -= dicrease;
    return  this.speed;
  },
  stop() {
    this.speed=0;
    return this.speed;
  },
}
console.log(car.accelerate());
console.log(car.deaccelerate());
console.log(car.stop());
//exercise 5
function Car(carsColor,carsModel,carsBrand,carsEngine,carsPassengers,carsSpeed,carsMaxSpeed,){
  this.color = carsColor;
  this.model = carsModel;
  this.brand = carsBrand;
  this.engineVolume = carsEngine;
  this.passengers = carsPassengers;
  this.speed = carsSpeed;
  this.maxSpeed = carsMaxSpeed;
  this.accelerate = function() {
    let increase =Number(prompt("Enter increase (km/hours)"));
    while(increase % 1 !== 0 || this.speed + increase > this.maxSpeed) {
      console.log("incorrect imput");
      increase=Number(prompt("Enter increase (km/hours)"))
    }
    this.speed += increase;
    return this.speed;
  },
  this.deaccelerate= function() {
    let dicrease =Number(prompt("Enter dicrease(km/hours)"));
    while(dicrease % 1 !== 0 || this.speed - dicrease <= 0) {
      console.log("incorrect imput");
      dicrease=Number(prompt("Enter dicrease (km/hours)"))
    }
    this.speed -= dicrease;
    return  this.speed;
  },
  this.stop= function() {
    this.speed=0;
    return this.speed;
  }
}

const ford = new Car("gray", "8", "ford", 2000, 5, 90, 190);
const mazda = new Car("white", "X2", "mazda", 1000, 5, 70, 190);
const peugeot = new Car("dark gray", "8", "ford", 1800, 7, 70, 170);
console.log(ford);
console.log(mazda);
console.log(peugeot)