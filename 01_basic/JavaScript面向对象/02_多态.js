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

// 多态在面向对象程序设计中的作用
/**
 * 多态的根本好处就是: 不必向对象询问你是什么类型而后根据答案去调用对象的行为
 * 只需要调用即可，其他的一切多态机制都会为你安排妥当
 * 
 * 多态的根本作用就是通过把过程化的条件分支语句转换为对象的多态性，从而消除分支语句
 * 
 * 将行为分布在各个对象中，并让这些对象各自负责自己的行为， 这才是面向对象设计的优点。
 */