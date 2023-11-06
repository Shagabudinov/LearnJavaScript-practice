//Создайте генератор, который генерирует бесконечную последовательность фибоначчи (1, 1, 2, 3, 5, 8, ...).

function* generateFibonacci(first, second) {
    let a = first
    let b = second
    let next

    while (true) {
        next = a + b;
        [a, b] = [b, next];
        yield next
    }
}

let fibonacci = generateFibonacci(1, 1)

console.log(fibonacci.next().value); // 2
console.log(fibonacci.next().value); // 3
console.log(fibonacci.next().value); // 5

// 5 из 5