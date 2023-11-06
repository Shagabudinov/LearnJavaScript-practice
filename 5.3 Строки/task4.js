// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

const extractCurrencyValue = (str) => {
    return Number(str.slice(1))
}

console.log( extractCurrencyValue('$120') === 120 ); // true