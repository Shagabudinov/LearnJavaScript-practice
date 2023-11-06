// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

const sum = (a) => {
    return function(b) {
        return a + b
    }
}

console.log(sum(1)(2))// = 3
console.log(sum(5)(-1))// = 4

let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();