//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";

//Ответ Да, теперь user.name = "Pete", так как мы изменили содержимое этого объекта, а не ссылку, которая хранится в user