// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

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

function printList(list) {
    const stack = []
    while (true) {
        stack.push(list.value)
        list = list.next
        if (list === null) {
            break
        }
    }
    while (stack.length > 0) {
        console.log(stack.pop())
    }
}

function printRecList(list) {
    if (list.next !== null) {
        printRecList(list.next)
    }
    console.log(list.value)
    
}

printList(list)
printRecList(list)