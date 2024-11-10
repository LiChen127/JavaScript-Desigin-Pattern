// 装饰者模式

/**
 * 动态给某个对象添加一些额外的职责，始终实现继承的替代方案;
 * 在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，而不会影响这个类中派生的其他对象
 */
class Cellphone {
  create() {
    console.log("创建一个手机");
  }
}

class Decorator {
  constructor(cellphone) {
    this.cellphone = cellphone;
  }
  create() {
    this.cellphone.create();
    this.createShell(this.cellphone);
  }
  createShell() {
    console.log("创建一个外壳");
  }
}

let cellphone = new Cellphone();
cellphone.create();

console.log('------------------------');
let dev = new Decorator(cellphone);
dev.create();

/**
 * 优点:
 * 1.装饰器类和被装饰器类只关心自身的业务，实现解耦
 * 2.方便动态的扩展功能，且提供了比继承更多的灵活性
 */