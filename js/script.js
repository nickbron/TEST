
// function slugify(title) {
  
//     let slug = (title.toLowerCase()).split(' ');
//     slug = slug.join('-');
//     return slug;
    
     
// }

//  slugify('Массивы для новичков');

// // const clients = ['Mango', 'Poly', 'Ajax'];
// // console.log(clients.join('-')); // "Mango-Poly-Ajax"

//   const title = ('Массивы для новичков');
  
//    let result= (title.toLowerCase()).split(' ');
// console.log(result);
// result = result.join('-');
// console.log(result);

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];

// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(2, 5);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// console.log(fruits.length);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки

//     result = firstArray.concat(secondArray);
//     result = result.slice(0, maxLength);
//     return result;
//     // Пиши код выше этой строки
// }
  
// makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0);
// console.log(result);
     
// const start = 3;
// const end = 7;

// for (let i = start; i <= end ; i +=2 ) { 
//   console.log(i);
// }

// -----------------------------------

// function findLongestWord(string) {
//     let max= [];
//     string = string.split(' ');
//     for (const word of string) {
//         if (word.length >= max.length) {
//             max = word;
//         }
        
//     }
  
//     console.log(max);
//     return max;
    
// }

// findLongestWord('May the force be with you');

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
  
//     for (let i = min; i <= max; i += 1)
//     {
//         numbers.push(i);
        
//         }

//   // Пиши код выше этой строки
//     // return numbers;
//     console.log(numbers);
// }

// createArrayOfNumbers(1, 8);
// ------------------------------------
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//      const numbersnew = [];
//     for (let i = 0; i <= numbers.length; i+=1)
//     {
//         if (numbers[i] > value) {

           
//              numbersnew.push(numbers[i]);
                        
//         }
//    }
//     console.log("старый массив ", numbers);
//      console.log("новый массив ", numbersnew);

//   // Пиши код выше этой строки
// }
//  filterArray([1, 2, 3, 4, 5], 3) 
// ----------------------------------------------

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2)
// {
//   // Пиши код ниже этой строки
//     const array3 = [];
//     for (let i of array1)
//     { 
//         let newArray = array2.includes(i);
//         if (newArray) {
//             array3.push(i);
//         }
//     }
//      console.log(array3);
//     return array3;
    
// // Пиши код выше этой строки
// }

// getCommonElements([10, 20, 30, 40, 90] , [4, 30, 17, 10, 80, 20, 90]);

// ------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let i of order) {
//        total += i;
//        console.log(i);
//   }

//   // Пиши код выше этой строки
//       console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// возвращает массив всех чётных чисел от start до end. 
// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//     let newArray = [];
//     for (i = start; i <= end; i += 1){
//         if (i % 2 === 0)
//         {
//            newArray.push(i);
//         }
//     }
//     console.log(newArray);
//     return (newArray);
//     // Пиши код выше этой строки
//   }

// getEvenNumbers(3, 11)
// ------------------------------------   
// function includes(array, value) {
//   // Пиши код ниже этой строки

//     for (let i = 0; i <= array.length; i += 1){
     
//         if (array[i] === value) {
//                console.log("true");
//             return true;
//         }
//     }
//      console.log("false");
//         return false;
//   // Пиши код выше этой строки
// }

// includes([1, 2, 3, 4, 5], 6);
// ---------------------------------------
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
//  apartment.area = 60;
//  apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Ямайка';
//  apartment.location.city = 'Кингстон';
// console.table(apartment);

//-Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys
//массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);
// // console.log(keys);
// for (const key of keys) {

//    values.push(apartment[key]);
// }
// console.log(values);
 
//-----------------------
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount ++;
//   }
//   console.log(propCount);
//   return propCount;
//   // Пиши код выше этой строки
// }
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

//-Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства
//это имя сотрудника, а значение свойства это зарплата.Функция должна рассчитать общую сумму зарплат
//сотрудников и вернуть её.Используй переменную totalSalary для хранения общей суммы зарплаты.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const values = Object.values(salaries);

//   for (const value of values) {
//     totalSalary += value;
//   }
//     console.log(totalSalary);
//   // Пиши код выше этой строки
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

//Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название
//продукта.Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его
//цену(свойство price).Если продукт с таким названием не найден, функция должна возвращать null.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName)
// {
//   for (product of products)
//   {
//     if (product.name === productName) {
//       console.log(product.price);
//       return product.price;
//     }
  
//   }
//   return null;  
// }

// getProductPrice('Дроид');


//
//Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
//Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
//Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName)
// {
//   const values = [];
 
//   for (const product of products) {
//      if (product[propName]) {
//      values.push(product[propName]);
//   }
//   }
//   console.log(values);

//   return (values);
// }

// getAllPropValues('quantity');

/////Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
//Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let total=0;
//   for (const product of products) {
//     if (product.name === productName) {
//       total = product.price * product.quantity;
//    }
  
//   }
//   console.log(total);
//     return total;
//   // Пиши код выше этой строки
// }
// calculateTotalPrice('Дроид')
//----------------------------

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const {
//   today: { low: lowToday, high: highToday, icon: todayIcon },
//   tomorrow: { low: lowTomorrow, high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg' },
// } = forecast;

///-----------------
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки

//   const data1 = {completed, category, priority,...data};
  
//   console.log(data1);
//   return data1;
//   // Пиши код выше этой строки
// }

// makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' });


//--Используя операцию rest дополни код функции add() так, чтобы она принимала любое
//количество аргументов, считала и возвращала их сумму.
// function add(...args) {
//   let result = 0;
//   for (const arg of args) {
//     result += arg;
//   }
//   console.log(result);
//   return result;
 
// }

// add(74, 11, 62, 46, 12, 36);
//-----------------------------
// function addOverNum(values,...args) {
//   let total = 0;
  
//   for (const arg of args) {
//     if (arg>values) {
//       total += arg;
//     }
//   }
//   console.log(total);
//   return total;
// }

// addOverNum(10, 12, 4, 11, 48, 10, 8)

//----Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только
//те аргументы, начиная со второго, которые есть в массиве первого аргумента.
// function findMatches(value, ...args) {
//   const matches = []; // Не изменяй эту строку
//   for (i = 0; i < args.length; i++){
//      for (j = 0; j < value.length; j++)
//     {
//       if (args[i] === value[j]) {
//         matches.push(args[i]);
//       }
//     }
//   }
//   console.log(matches);
//   return matches;
// }
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)
 //---------------------------

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },

//   updateBook(bookName, newBook)
//   {
//     return `Обновляем книгу ${bookName} на ${newBook}`;
//   }
// };

// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));

//Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName
//в свойстве books.Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы
//заменить этот элемент.
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
   
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1); //удаляем
//     this.books.splice(bookIndex, 0, newName); //вставляем
//     console.log(this.books);

//   },
// };

// bookShelf.updateBook('Последнее королевство', 'Дюна');
//------------------------------
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],

//  updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//     console.log(potionIndex);
//    this.potions.splice(potionIndex, 1, newName); //удаляем и вставляем
  
//     return this.potions;
//   }
// };
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
//------------------------------------------

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i++)
//     {
//       if (potionName === potions[i].name)
//       {
//         potions.splice(i,1);
//         }
//       }
    
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     console.table(potions);
//     for (const potion of potions)
//     {
//       if (potion.name===oldName)
//       {potion.name = newName;}
//     }
//     console.table(potions);
//   }
//   // Пиши код выше этой строки
// };


// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')
//

// функция фильтр с CALLBACK - ПРИМЕР ---------------------
/*
const filter = function (array, test) {
  const filterArray = [];
  for (const el of array) {
    //console.log(el);
    const passed=test(el);
    if (passed) {
      filterArray.push(el);
    }
  }
  return filterArray;
}

const callback1 = function (value) {
  return value >= 3;
}
const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
}

const fruits = [
  { name: "apples", quantity: 200, ifFresh: true },
  { name: "grapes", quantity: 15, ifFresh: false },
  { name: "bananas", quantity: 100, ifFresh: true }
];
  

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// }



const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

// const r3 = filter(fruits, getFruitsWithQuantity);
const r3 = filter(fruits, fruit =>fruit.quantity >=120);
console.log(r3);


//-------------Замыкание пример-------------------
const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
  };
  return makeDish;
};

const mango = makeSheff("");

mango("котлеты");

const poly = makeSheff("Poly");
poly("чай");
*/

/*
Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza 
или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
*/
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   console.log( callback(pizzaName));
//    return callback(pizzaName);
// }

// makeMessage('Роял гранд', makePizza);
// makeMessage('Ультрасыр', deliverPizza);

//----------------------------------------------------------------
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError)
//   {
//     if (this.pizzas.includes(pizzaName))
//     { return onSuccess(pizzaName); }
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//   }
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));

//------------------------------------------------------------------------
/*
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}
const messages = [];

for (let key = 0; key < orders.length; key++) {
  messages.push(composeMessage.call(orders[key],key+1));
}
console.log(messages);
*/
//----------------------
/*
const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


//- -конструкторы---------------
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);

//
/*
function Car({ brand, model, price }) {
  this.brand = brand;
   this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function (){
return this.price;
};

Car.prototype.changePrice = function(newPrice){
this.price=newPrice;
};
*/

//--------------------
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// // В результате вызова
// const hotel = new Hotel('Resort Hotel', 5, 100);
// // Получаем такой объект
// console.log(hotel);
//------------------
/*
function Storage(items) {
  this.items = items;
}

  Storage.prototype.getItems = function () {
    return this.items;
  };

    Storage.prototype.addItem = function (items) {
    this.items.push(items);
  };

    Storage.prototype.removeItem = function (items) {
    const index=this.items.indexOf(items);
     this.items.splice(index, 1);
  };



// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);

 console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
 storage.addItem('Дроид');
 console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
 storage.removeItem('Пролонгер');
 console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
*/
 /////////////////////
 /*function StringBuilder(baseValue) {
  this.value = baseValue;
}

 StringBuilder.prototype.getValue = function () {
    return this.value;
};

 StringBuilder.prototype.padEnd = function (str) {
    this.value+=str;
};
  StringBuilder.prototype.padStart = function (str) {
    this.value=str+this.value;
};

 StringBuilder.prototype.padBoth = function (str) {
   this.value = str + this.value;
    this.value+=str;
};
   
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
console.log(StringBuilder.prototype.hasOwnProperty('getValue'));
builder.padStart('^');
console.log(builder.getValue()); // '^.'
 builder.padEnd('^');
 console.log(builder.getValue()); // '^.^'
 builder.padBoth('=');
 console.log(builder.getValue()); // '=^.^='
 */

 //////////////////////
 /*class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getBrand(){
  return this.#brand;
  }
  
  changeBrand(newBrand)
  {
  this.#brand=newBrand;
  }
}
*/
/////////////////////////////
/*
class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }


  getItems () {
    return this.#items;
  };

  addItem(newItem) {
    this.#items.push(newItem);
  };

  removeItem (item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  };
}
// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
*/
//////////////////
/*
class StringBuilder {
  #value;

  constructor(baseValue) {
    this.#value = baseValue;
  }

  getValue () {
    return this.#value;
  };

  padEnd (str) {
    this.#value += str;
  };

  padStart (str) {
    this.#value = str + this.#value;
  };

 padBoth (str) {
    this.padStart(str);
    this.padEnd(str);
  };
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='
*/
////////
/*
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}
*/
///////
/*
class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice<=Car.MAX_PRICE) {
      this.#price = newPrice;
    }
    
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
*/

///////
/*
class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
  static checkPrice(price) {
    
    if(price > Car.#MAX_PRICE){
    return ('Внимание! Цена превышает допустимую.');
      
    }
     
        return ( "Всё хорошо, цена в порядке.");
    }
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
 console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
 */
///////
/*
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки

class Admin extends User  {
  BASIC;
  SUPERUSER;
  constructor() { }
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
 
}
*/
/////
/*
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentWriter extends User {
  posts;

  constructor({ email, posts }) {
    // Вызов конструктора родительского класса User
   super(email);
    this.posts = posts;
  }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer); // { email: 'mango@mail.com', posts: [] }
console.log(writer.email); // 'mango@mail.com'
*/
////////
/*
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    }

 static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
*/
/////////////////////
/*
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
   blacklistedEmails = [];

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    
    return  this.blacklistedEmails.includes(email);
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 
*/