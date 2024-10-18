// Mixin
// mixin是一个对象，我们可以使用它来向另一个对象或类添加可复用的功能，而无需使用继承
// mixin的唯一目的是向对象或类添加功能，而无需继承

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// 狗还有很多的特性
// 我们利用一个mixin对象来提供这些特性
const dogFunctionality = {
  bark: () => console.log('WANGWANG'),
  wagTail: () => console.log('Wagging my tail'),
  play: () => console.log('playing'),
};

// 如何混入呢?
// 只需要利用原型
Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog('Daisy');

console.log(pet1.name);
pet1.bark();
pet1.play();
// Daisy
// WANGWANG
// playing

// Mixins 允许我们通过将功能注入对象的原型，轻松地向对象添加功能，而无需继承。修改对象的原型被视为不好的做法，因为它会导致原型污染，并导致函数来源的不确定性。

