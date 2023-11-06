
let user = {
    name: "John",
    toString() {
        return this.name;
    },
};
Object.defineProperty(user, "toString", {
    enumerable: true,
});

// По умолчанию оба свойства выведутся:
console.log(Object.getOwnPropertyDescriptors(user)); // name, toString
