class LinkedList {
  constructor() {
    this.head = null; // Start of the list
  }

  createNode(data) {
    // це внутрішній метод класу, який ми будемо використовувати у інших методах класу
    // площа відповідальності: просто створити об'єкт нового вузла і повернути його
    return {
      data, // data: data
      next: null,
    };
  }
//додавання елемента********************************************************************************************************* 
  append(data) {
    const newNode = this.createNode(data);
    if (!this.head) {
      // перевірка на те, чи список порожній, чи ні
      this.head = newNode;
    } else {
      let current = this.head; // голова списку, перед тим елементом, який ми хочемо додати
      while (current.next) {
        // буквально: до тих пір, поки current.next має не негативне значення
        // current.next стане мати негативне значення у той момент, коли ми дійдемо до вершини списку
        // наша задача: обійти весь список, дістатися до останнього елементу і тільки після нього вставити новий елемент

        current = current.next;
      }
      // коли ми дійшли до кінця списку - вставляємо новий вузол
      current.next = newNode;
    }
  }
   // Додавання елемента після певної позиції******************************************************************
   addNthElement(data, position) {
    let current = this.head;
const newNode=this.createNode(data);
    if (position === 0) { // Додавання на початок списку
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    let index = 0;

    while (current && index < position) {
        if (index === position - 1) {
            newNode.next = current.next;
            current.next = newNode;
            return;
        }
        current = current.next;
        index++;
    }

    if (!current) {
        console.error("Позиція виходить за межі списку");
    }
}
//пошук елемента*****************************************************************************************
findNode(data) {
    let current = this.head;

    while (current) {
        if (current.data === data) {
            return current; // Знайдено вузол
        }
        current = current.next; // Переходимо до наступного вузла
    }

    return null; // Повертаємо null, якщо вузол не знайдено
}
//виведення*************************************************************************************************
  printList() {
    if (!this.head) {
      // перевірка на те, чи порожній список, чи ні
      return null;
    }

    let current = this.head;
    const resultArray = [];
    while (current) {
      // буквально: до тих пір, поки current має не негативне значення
      // current стане мати негативне значення у той момент, коли ми дійдемо до вершини списку
      // (next = null)
      resultArray.push(current.data);
      current = current.next; // для того, щоб ми "просувались" списком, щоб ми не "застигли" на одному місці
    }

    return resultArray.join(" -> ");
  }
//видалення******************************************************************************************************************************* 
  deleteNode(data) {
    if (!this.head) return; // Список порожній
    if (this.head.data === data) {
      // якщо видаляється перший елемент списку
      this.head = null; // Обнуляємо вершину списку
      return;
    }

    // Якщо видаляється щось не з вершиин списку - обходимо весь список циклом і шукаємо потрібний нам елемент
    let current = this.head;
    while (current.next && current.next.data !== data) {
      // буквально: до тих пір, поки current.next має не негативне значення
      // current.next стане мати негативне значення у той момент, коли ми дійдемо до вершини списку
      // (current.next)
      // наша задача: обійти весь список, дістатися до останнього елементу АЛЕ нам потрібно вийти...
      // з цього циклу, коли ми знайдемо той елемент, який нам потрібно видалити
      // (current.next.data !== data)

      current = current.next; // щоб ми не застигли на одному місці, щоб ми просувались по списку
    }

    if (current.next) {
      // якщо ми знайшли елемент, який нам потрібно видалити
      current.next = null; // видаляємо цей елемент
    }
    // але, маємо на увазі, що видаляється не тільки цей вузол, а і всі наступні вузли також
  }
}

const list = new LinkedList();

list.append(10);
list.append(30);
list.append(50);
list.append(70);
list.append(150);

list.printList(); // '10 -> 30 -> 50 -> 70 -> 150'

// list.deleteNode(150); // '10 -> 30 -> 50 -> 70'
// list.deleteNode(50); // '10 -> 30'
