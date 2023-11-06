// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

let datenow = new Date()

const printNumbers = (from, to) => {
    const intervalId = setInterval(() => {
        console.log(from++)
        console.log("Обычный интервал")
        console.log(new Date() - datenow)
        if (from === to + 1) {
            clearInterval(intervalId)
        }
    }, 1000)
}

const printNumbersRec = (from, to) => {
    if (from === to + 1) {
        return
    }
    const timeoutId = setTimeout(() => {
        console.log(from)
        console.log("Рекурсивный timeOut")
        console.log(new Date() - datenow)
        printNumbersRec(from + 1, to)
    }, 1000)
}

printNumbersRec(1, 3)
printNumbers(1, 3)