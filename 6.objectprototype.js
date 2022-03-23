let animal = {
  move: true,
};
let cat = {};

cat.__proto__ = animal;
console.log(cat.move);
console.log(animal.move);
console.log();
