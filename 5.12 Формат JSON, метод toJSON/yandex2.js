function taxFunc(cities) {
    console.log("Calculating taxes for cities:", cities);
    // Здесь может быть ваша настоящая логика налоговых расчетов
    // В данном случае просто выводим список городов
}

function onionWrapper(stringOrFunction) {
    const cities = [];

    function superOnion(...args) {
        if (typeof args[0] === "function") {
            const taxFunc = args[0];
            return () => {
                taxFunc(cities);
                cities.length = 0; // Очищаем список городов после вызова налоговой функции
            };
        } else if (args.length > 0) {
            args.forEach((city) => {
                const index = cities.indexOf(city);
                if (index !== -1) {
                    cities.splice(index, 1); // Удаляем город из списка
                }
            });
        }
        return superOnion; // Всегда возвращаем саму себя как функцию
    }

    if (typeof stringOrFunction === "string") {
        cities.push(stringOrFunction);
        return superOnion; // Возвращаем superOnion как функцию
    } else if (typeof stringOrFunction === "function") {
        // Если передана функция налоговой сразу
        stringOrFunction(cities);
        cities.length = 0; // Очищаем список городов после вызова налоговой функции
        return superOnion; // Возвращаем superOnion как функцию
    }
}

module.exports = onionWrapper;

const superOnion = onionWrapper("city1")("city2")("city3")(taxFunc);

// Вызываем с параметрами
superOnion("city1")(); // Вычеркнет 'city1' и вызовет taxFunc с ['city2', 'city3']
//superOnion("city2")("city3")(); // Вычеркнет 'city2' и 'city3' и вызовет taxFunc с пустым массивом
