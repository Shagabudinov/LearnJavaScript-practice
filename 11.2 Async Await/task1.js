//Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

async function loadJson(url) {
    const json = await fetch(url);
    if (json.status == 200) {
        return json.json();
    } else {
        throw new Error(response.status);
    }
}

loadJson("no-such-user.json") // (3)
    .catch(console.log()); // Error: 404
