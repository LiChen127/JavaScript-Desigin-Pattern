// 单例模式
// 一个类只有一个实例，并提供一个访问它的全局访问点

class LoginForm {
  constructor() {
    this.state = 'hide'
  }
  show() {
    if (this.state === 'show') {
      alert('已经显示');
      return;
    }
    this.state = 'show';
    console.log('显示成功');
  }
  hide() {
    if (this.state === 'hide') {
      alert('已经隐藏');
      return;
    }
    this.state = 'hide';
    console.log('隐藏成功');
  }
}

LoginForm.getInstance = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance;
  }
})();

/**
 * 优点: 
 * 1.划分命名空间，减少变量;
 * 2.增强模块性，把自己的代码组织在一个全局变量名下，放在单一位置，便于维护;
 * 3.只会实例化一次;
 */

/**
 * 缺点:
 * 单例模式会引起强耦合，不利于测试和重构;
 */

/**
 * 适用场景:
 * 定义命名空间;
 * vuex和redux中的store
 */