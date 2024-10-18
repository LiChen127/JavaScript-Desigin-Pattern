// 多态源于希腊文polymorphism,拆开来看是poly（复数）+ morph（形态）+ ism，从字面上我们可以理解为复数形态。
// 多态的实际含义是什么?
// 同一操作用于不同的对象上，可以产生不同的解释和不同的结果。

// 多态的js代码
const makeSound = function(animal) {
  if (animal instanceof Duck) {
    console.log("gagaga");
  }
  if (animal instanceof Chicken) {
    console.log('gegege');
  }
}
const Duck = function () { };
const Chicken = function () { };
// makeSound(new Duck());
const duck = new Duck();
makeSound(duck);
const chicken = new Chicken();
makeSound(chicken);