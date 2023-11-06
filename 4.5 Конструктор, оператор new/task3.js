//Создайте функцию-конструктор Accumulator(startingValue).

//Объект, который она создаёт, должен уметь следующее:

//Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
//Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

//Ниже вы можете посмотреть работу кода:

function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function(a) {
        return this.value += a
    }
}

let accumulator = new Accumulator(4); // начальное значение 1

accumulator.read(1); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(2); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений