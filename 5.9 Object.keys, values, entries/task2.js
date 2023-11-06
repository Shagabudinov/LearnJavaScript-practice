// Напишите функцию count(obj), которая возвращает количество свойств объекта:

const count = (obj) => Object.keys(obj).length

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

function fn() {
  console.log(this.global)
}

fn()