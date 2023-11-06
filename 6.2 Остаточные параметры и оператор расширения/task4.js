//Реализуйте функцию convertToUpperCase, которая принимает строку и возвращает новую строку,
//в которой все буквы переведены в верхний регистр. Используйте оператор расширения для преобразования строки 
//в массив символов и toUpperCase для их преобразования.

const convertToUpperCase = (str) => [...str].map(letter => letter.toUpperCase()).join('')

console.log(convertToUpperCase('fjkgdfjikh'))