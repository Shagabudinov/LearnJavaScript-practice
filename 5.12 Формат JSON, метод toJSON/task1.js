//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

const stringifyUser = JSON.stringify(user)

console.log(stringifyUser)
console.log(user)