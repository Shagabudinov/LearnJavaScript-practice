//У нас есть массив объектов, который нужно отсортировать:

function byField(str) {
    return function(a, b) {
        return a[str] > b[str] ? 1 : -1
    }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

//Можем ли мы сделать его короче, например вот таким?

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
//То есть чтобы вместо функции мы просто писали byField(fieldName).

//Напишите функцию byField, которая может быть использована для этого.