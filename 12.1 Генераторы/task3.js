//Напишите генератор, который генерирует бесконечную последовательность простых чисел.

function* generateSimple() {
    let simple = 2
    let count = 0

    while (true) {
        for (let i = 2; i <= Math.sqrt(simple); i++) {
            simple % i === 0 ? count++ : count;
        }
        if (count === 0) {
            yield simple
        }
        count = 0
        simple++
    }
}

let simple = generateSimple()

for (let i = 0; i < 10; i++) {
    console.log(simple.next().value);
  }

// 3 из 5, можно достичь лучшей производительности с помощью алгоритма "Решето Эратосфена"