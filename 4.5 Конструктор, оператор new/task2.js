//Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму этих свойств.
//mul() возвращает произведение этих свойств.

function Calculator(a, b) {
    this.read = function() {
        this.a = a
        this.b = b
    },
    this.sum = function() {
        return this.a + this.b
    }
    this.mul = function() {
        return this.a * this.b
    }
} 

let calculator = new Calculator(3, 4);
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );