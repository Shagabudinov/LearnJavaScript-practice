//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

//ucFirst("вася") == "Вася";

const ucFirst = (word) => {
    if (!word) return word;
    return word.slice(0, 1).toUpperCase() + word.slice(1)
}

console.log(ucFirst("вася"))