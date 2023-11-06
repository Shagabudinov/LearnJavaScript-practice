// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

const getWeekDay = (date) => {
    return date.getDay()
}

const daysOfMonth = {
    0: 'ВС',
    1: 'ПН',
    2: 'ВТ',
    3: 'СР',
    4: 'ЧТ',
    5: 'ПТ',
    6: 'СБ',
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(daysOfMonth[getWeekDay(date)]);        // нужно вывести "ВТ"