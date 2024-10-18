// 原型模式并不仅仅是一种设计模式，也是一种编程范式

// 1.使用克隆的原型模式
/**
 * 从设计模式讲，原型模式是用于创建对象的一种模式
 * 我们对比类模式和原型模式
 * 类模式: 要创建一个对象，先指定它的类型，然后通过类来创建这个对象
 * 原型模式: 不再关心对象的具体类型，找到一个对象，通过克隆来创建一个一模一样的对象。
 */

// Key of Prototype Design: 是否提供clone模式
// ES5: Object.create()
const Plane = function () {
  this.blood = 100;
  this.attackLevel = 1;
  this.defensLevel = 1;
}
var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defensLevel = 5;

var clonePlane = Object.create(plane);

// 2.克隆只是创建对象的手段，克隆的真正目的是为了更便捷的去创建某个类型的对象，而不需要考虑它是什么类型

// 3.JavaScript原型继承
/**
 * 首先介绍原型编程的基本原则:
 * 1.所有的数据都是对象
 * 2.要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
 * 3.对象会记住它的原型
 * 4.如果对象无法响应某个请求，它会把这个请求委托给自己的原型
 */


// 3.1 所有的数据都是对象
/**
 * JavaScript设计者的本意，除了undefined之外，一切都应是对象。为了实现这一目标，number、boolean、string这几种基本类型数据也可以通过“包装类”的方式变成对象类型数据来处理。
 * 事实上，JavaScript的根对象是Object.prototype对象。Object.prototye === null
 * 我们js中遇到的对象都是从Object.prototype clone而来
 */

// 3.2 要得到一个对象，并不是实例化类，而是找到一个对象作为原型并克隆它
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
}
var a = new Person('cc');
console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);