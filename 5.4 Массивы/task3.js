// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  console.log( this[0] );
});

arr[2](); // ? Ответ: 2???   ->   [ 'a', 'b', [Function (anonymous)] ]