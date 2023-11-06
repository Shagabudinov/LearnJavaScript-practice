//Здесь функция makeUser возвращает объект.
//Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    const a = {
        name: "John",
        ref: this,
    };
    return a
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат?

//Ответ: 'john'???
//Верный ответ: undefined, потому что ref - это поле объекта, а не функция (пиздец...)
