// Имитируйте выполнение нескольких асинхронных задач, таких как запросы к API, используя Promise.all. 
// Создайте массив с URL-адресами ресурсов, и для каждого URL создайте промис, который имитирует запрос 
// (например, с помощью setTimeout). Используйте Promise.all для выполнения всех запросов параллельно и выведите результат, 
// когда все они завершатся.

const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
]

const aLotOFPromises = urls.map((url) => {
    return (fetch(url)
    .then(response => response.json())
    .then(json => console.log(json)))
})

Promise.all(aLotOFPromises)