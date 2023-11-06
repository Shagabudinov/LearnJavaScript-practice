const changeLang = (currentLayout) => {
    return currentLayout === "english" ? "russian" : "english";
};

function abs(text, changeLang) {
    const collection = {
        q: "й",
        w: "ц",
        e: "у",
        r: "к",
        t: "е",
        y: "н",
        u: "г",
        i: "ш",
        o: "щ",
        p: "з",
        a: "ф",
        s: "ы",
        d: "в",
        f: "а",
        g: "п",
        h: "р",
        j: "о",
        k: "л",
        l: "д",
        z: "я",
        x: "ч",
        c: "с",
        v: "м",
        b: "и",
        n: "т",
        m: "ь",
    };
    let result = ""; // Результирующий текст
    let currentLayout = "english"; // Текущая раскладка (по умолчанию)
    let layoutChanged = false; // Флаг, указывающий, что раскладка была изменена

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char === "[") {
            // Обработка команды
            const commandEndIndex = text.indexOf("]", i + 1);
            if (commandEndIndex !== -1) {
                const command = text.slice(i + 1, commandEndIndex);
                i = commandEndIndex; // Переходим за команду

                if (command === "l" && !layoutChanged) {
                    // Смена раскладки, если еще не было смены
                    currentLayout = changeLang(currentLayout);
                    layoutChanged = true; // Устанавливаем флаг смены раскладки
                } else if (command === "v") {
                    // Вставка текста из буфера обмена (просто пропускаем)
                } else if (command === "b") {
                    // Удаление последнего символа, если результат не пустой
                    if (result.length > 0) {
                        result = result.slice(0, -3);
                    }
                } else {
                    // Неизвестная команда, добавляем ее как текст
                    result += `[${command}]`;
                }
            }
        } else {
            // Обработка символа в текущей раскладке
            if (currentLayout === "english") {
                result += char;
            } else if (currentLayout === "russian") {
                result += collection[char];
            }
        }

        if (char === "]" && layoutChanged) {
            // Сбрасываем флаг смены раскладки после встречи команды [l] и закрывающей команды [/_]
            layoutChanged = false;
        }
        console.log(result);
    }

    return result
        .split("[_]")
        .map((item) => item[0])
        .join("")
        .split("[")
        .join("");
}

console.log(
    abs(
        `T[_]o[_]d[_]o[_]:[_]
        [_][v][v]погладь котапогладь кота`,
        changeLang
    )
);
