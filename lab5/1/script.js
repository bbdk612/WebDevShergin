function stuffData(users) {
  let arr = [];
  users.forEach((user) => {
    let str = `Имя: ${user.name}, возраст: ${user.age}`;
    arr.push(str);
  });

  return arr;
}

let user = [
  { name: "Иван", age: 30 },
  { name: "Петр", age: 14 },
  { name: "Гена", age: 56 },
  { name: "Алена", age: 18 },
];

console.log(stuffData(user))
