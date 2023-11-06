//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// до вызова функции

const multiplyNumeric = (obj) => {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2
        }
    }
    return obj
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu))
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
//Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

//P.S. Используйте typeof для проверки, что значение свойства числовое.