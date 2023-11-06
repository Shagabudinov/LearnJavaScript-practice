// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToTomorrow = () => {
    const now = new Date()

    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

    return ((tomorrow - now) / 1000).toFixed(0)
}

console.log(getSecondsToTomorrow())