// 使用观察者模式，我们可以将某些对象(观察者)订阅到另一个对象(可观察对象)。每当发生事件时，可观察者对象都会通知其所有的观察者。

/**
 * 一个可观察者对象通常包含的重要部分:
 * observers: 一组观察者，每当发生特定事件时都会收到通知。
 * subscribe: 将观察者添加到观察者列表的方法
 * unsubscribe: 从观察者列表中删除
 * notify: 当特定事件发生时通知所有观察者的方法
 */
class Observer {
  constructor() {
    this.observers = [];
  }
  subscribe(obj) {
    this.observers.push(obj);
  }
  unsubscribe(obj) {
    this.observers = this.observers.filter((observer) => observer !== obj);
  }
  notify(msg) {
    this.observers.forEach((observer) => observer(data));
  }
}