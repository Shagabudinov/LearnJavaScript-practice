// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

const checkSpam = (str) => {
    const spamText = ['viagra', 'xxx']
    for (let i = 0; i < spamText.length; i++) {
        if (str.toLowerCase().includes(spamText[i])) {
            return true
        }
    }
    return false
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))