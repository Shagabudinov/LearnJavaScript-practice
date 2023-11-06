// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// Пример работы функции:

const random = (min, max) => {
    return min + Math.random() * (max - min)
}

console.log( random(1, 5) ); // 1.2345623452
console.log( random(1, 5) ); // 3.7894332423
console.log( random(1, 5) ); // 4.3435234525