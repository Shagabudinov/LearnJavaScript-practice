// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

const filterRange = (arr, a, b) => arr.filter(digit => digit >= a && digit <= b)

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)