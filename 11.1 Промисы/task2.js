// Создайте функцию, которая возвращает промис, который разрешается через случайное количество миллисекунд (от 1 до 5 секунд).
// После разрешения промиса, он должен вернуть строку с загадкой. Затем создайте второй промис, который разрешается через 5 секунд
// и выводит ответ на загадку из первого промиса.

const min = 1;
const max = 5;

function riddle() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const question = "Кто проживает на дне океана?";
            return resolve(question);
        }, Math.random * (max - min) * 1000 + min * 1000);
    });
}

riddle().then((resolve) => {
    console.log(resolve)
    setTimeout(() => {
        console.log("Спанчбоб");
    }, 2000);
});
