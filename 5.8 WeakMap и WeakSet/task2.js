let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessagesTime = new WeakMap();

readMessagesTime.set(messages[0], new Date())
readMessagesTime.set(messages[1], new Date())

console.log(readMessagesTime.get(messages[0]))



