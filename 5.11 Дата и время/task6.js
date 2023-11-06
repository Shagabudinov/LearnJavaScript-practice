// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

//getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToday = () => {
    const dateNow = new Date()

    const hours = dateNow.getHours()
    const minutes = dateNow.getMinutes()
    const seconds = dateNow.getSeconds()

    return hours * 3_600 + minutes * 60 + seconds
}

console.log(getSecondsToday())