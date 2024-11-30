//exepcise 1
class Book {
  constructor(author, title, year, pages, shelfN) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
    this.shelfN = shelfN;
    this.userId = null;
  }

  isVacant() {
    return this.userId === null;
  }
  getRent(id) {
    if (this.isVacant()) {
      this.userId = id;
      this.shelfN = null;
      console.log(`книгу ${this.title} взято в оренду`);
    } else{ 
      console.log(`книга ${this.title} уже взята в оренду`);
    }
  }
  returnBook() {
    if (this.userId !== null) {
      this.userId = null;
      console.log(`книгу ${this.title} повернуто`)
  }
}
}

class User {
  constructor(id, name, lastName, address) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.address = address;
  }
}
const book1 = new Book("Suzanne Collins", "Hunger Games", 2008, 600, 1);
const book2 = new Book("J.K. Rowling", "Harry Potter", 1997, 800, 2)
const user1 = new User("u100", "John", "Doe");
const user2 = new User("u200", "Jane", "Doe");
book1.getRent(user1.id);
console.log(book1.isVacant());
book2.getRent(user1.id);
console.log(book2.isVacant());
console.log(book2.returnBook())
book2.getRent(user2.id);

//exepcise 2
class Animal {
    constructor(nickname) {
      this.nickname = nickname;
    }
    
    hunting() {
      console.log(`${this.nickname} зараз здожене здобич`);
    }
    
    growl() {
      console.log("грррррр");
    }
  }
  
  class Wolf extends Animal {
    constructor(nickname, color) {
      super(nickname);  
      this.color = color;
    }
  
    hunting() {
      console.log(`${this.color} вовк ${this.nickname} тримає здобич в лапах`);
    }
  
    growl() {
      console.log("ayayayyyyyy");
    }
  }
  
  class Tiger extends Animal {
    constructor(nickname, age) {
      super(nickname);  
      this.age = age;  
    }
  
    set age(age) {
      if (age < 0) {
        throw new RangeError('вік не може бути відємним');
      } else if (age < 1) {
        this._age = "тигреня";
      } else {
        this._age = "дорослий тигр";
      }
    }
  
    get age() {
      return this._age;
    }
  
    hunting() {
      console.log(`Цей ${this.age} ${this.nickname} вибрав свою здобич`);
    }
  
    growl() {
      console.log("мяв-мяв");
    }
  }
  
  try {
    const wolf = new Wolf("Барс", "сірий");
    wolf.hunting(); 
    wolf.growl(); 
    
    const tiger = new Tiger("Тигр", -1);  
    tiger.hunting();
    tiger.growl(); 
  } catch (error) {
    console.log("вік введено не коректно");  
  }
  
