//Создайте функцию getFirstElements, которая принимает массив и произвольное количество чисел в качестве аргументов.
//Функция должна вернуть новый массив, содержащий первые n элементов из исходного массива, где n - количество переданных аргументов.
//Используйте остаточные параметры.

function getFirstElements(arr, ...rest) {
    arr.length = rest.length
    return arr
}

console.log(getFirstElements([1, 2, 3, 45, 5, 45, 54, 5], 1, 4, 6, 3));
