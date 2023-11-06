// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?

function printList(list) {
    while (true) {
        console.log(list.value)
        list = list.next
        if (list === null) {
            break
        }
    }
}

function printRecList(list) {
    console.log(list.value)
    if (list.next !== null) {
        printRecList(list.next)
    }
    
}

printList(list)
printRecList(list)