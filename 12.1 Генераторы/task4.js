// Напишите генератор, который принимает на вход строку и генерирует все подстроки этой строки

function* generateSubstrings(inputString) {
    for (let start = 0; start < inputString.length; start++) {
        for (let end = start + 1; end <= inputString.length; end++) {
            yield inputString.slice(start, end);
        }
    }
}

const input = "hello";
const substringGenerator = generateSubstrings(input);

for (const substring of substringGenerator) {
    console.log(substring);
}

// 5 из 5
