// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

const sumSalaries = (salaries) => {
    return Object.entries(salaries).reduce((acc, [key, value]) => acc += value, 0)
}

// Или

const sumSalaries1 = (salaries) => {
    let sum = 0
    for (const salary of Object.values(salaries)) {
        sum += salary
    }
    return sum
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650
console.log( sumSalaries1(salaries) ); // 650