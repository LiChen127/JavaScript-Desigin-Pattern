// 适配器模式
// 将一个类的接口转化为另外一个接口，以满足用户需求，使类之间接口不兼容问题通过适配器解决

class Plug {
  getName() {
    return 'iphone';
  }
}

class Target {
  constructor() {
    this.plug = new Plug();
  }
  getName() {
    return this.plug.getName() + 'Type-c';
  }
}

let target = new Target();
console.log(target.getName());

/**
 * 优点:
 * 1.可以让任何两个没有关联的类一起运行;
 * 2.提高了类的复用;
 * 3.适配对象，适配库，适配数据;
 */

/**
 * 缺点:
 * 1.额外对象的创建，有一定开销;
 * 2.如果没有必要的话，要重构，代码可读性较差
 */

/**
 * 使用场景:
 * 1.整合第三方SDK;
 * 2.封装旧接口
 */

/**
 * 适配器与代理模式的比较
 * 适配器模式: 提供不同的接口
 * 代理模式: 提供一模一样的接口
 */