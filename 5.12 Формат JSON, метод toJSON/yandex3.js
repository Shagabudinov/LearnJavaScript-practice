async function* parse(fetcher, src, chunkSize) {
    async function* fetchAndProcessData(item) {
        if (item.type === "data") {
            yield item.value;
        } else if (item.type === "provider") {
            const dataFromProvider = await fetcher(item.src);
            for (const subItem of dataFromProvider) {
                yield* fetchAndProcessData(subItem);
            }
        }
    }

    const data = await fetcher(src);
    let currentChunk = [];
    let currentChunkSize = 0;

    for (const item of data) {
        const itemGenerator = fetchAndProcessData(item);

        for await (const value of itemGenerator) {
            currentChunk.push(value);
            currentChunkSize++;

            if (currentChunkSize === chunkSize) {
                yield currentChunk;
                currentChunk = [];
                currentChunkSize = 0;
            }
        }
    }

    if (currentChunkSize > 0) {
        yield currentChunk;
    }
}

// Пример использования
const src1 = [
    {
        type: "data",
        value: 1,
    },
    {
        type: "data",
        value: 2,
        children: [
            {
                type: "data",
                value: 1,
            },
            {
                type: "provider",
                src: "src2",
            },
        ],
    },
    {
        type: "data",
        value: 3,
    },
];

const src2 = [
    {
        type: "data",
        value: 1,
    },
    {
        type: "data",
        value: 2,
    },
    {
        type: "data",
        value: 3,
    },
    {
        type: "data",
        value: 4,
    },
];

async function fetcher(src) {
    // Простой fetcher для имитации запросов к ресурсам
    if (src === "src1") {
        return src1;
    } else if (src === "src2") {
        return src2;
    }
}

(async () => {
    for await (const chunk of parse(fetcher, "src1", 3)) {
        console.log(chunk);
    }
})();
