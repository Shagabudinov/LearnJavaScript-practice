// У нас есть объект salaries с зарплатами:

const topSalary = (salaries) => {
    let maxSalary = -1
    let nameWithMaxSalary = ''
    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary
            nameWithMaxSalary = name
        }
    }
    return nameWithMaxSalary
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries))
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.