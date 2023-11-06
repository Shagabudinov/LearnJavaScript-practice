//Напишите функцию countArgs, которая принимает любое количество аргументов и возвращает их количество. Используйте объект arguments.

function countArgs(){
    return arguments.length
} 

console.log(countArgs(1, 3, 6, [1, 45], 'fgfdg'))