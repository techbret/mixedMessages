const list = ["a", "b", "c", "d"];

for (let i = 0; i < 4; i++) {
  list.push(i);
}

for (let j of list) {
    if (j) {
        list.pop()
    }
}
console.log(list);



