// 原型模式是一种在多个相同类型的对象之间共享属性的有效方法。
class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return 'wangwang';
  }
}
const dog1 = new Dog('cc');
const dog2 = new Dog('dd');
const dog3 = new Dog('ee');
console.log(Dog.prototype); // constructor: ƒ Dog(name, breed) bark: ƒ bark()
console.log(dog1.__proto__); // constructor: ƒ Dog(name, breed) bark: ƒ bark()
// 由于所有实例都可以访问原型，因此即使在创建实例之后也可以轻松地向原型添加属性。

// 现在创建一个会飞的狗但是它也要会bark
class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }
  fly() {
    return "Flyiing...";
  }
}