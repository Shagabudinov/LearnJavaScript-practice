// задача - реализовать функцию для глубокого копирования

const getDeepCopy = (obj) => {
    if (typeof obj !== 'object') {
        return obj;
    }
    const newObj = {}
    for (let key in obj) {
        newObj[key] = getDeepCopy(obj[key])
    }
    return newObj
}

const obj = {
    name: 'Ivan',
    surname: 'Aksenov',
    age: '29',
    jobs: {
        main: 'school',
        alt: 'sber',
        fn2: () => {
            let a = 27;
            console.log(a)
        }
    },
    fn1: () => {
        let a = 18;
        console.log(a)
    }
}
const newObj = getDeepCopy(obj)
newObj.jobs.main = 'skatepark'
console.log(obj)
console.log(newObj)

