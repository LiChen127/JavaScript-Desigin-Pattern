// 单例是可以实例化并可全局访问的类。
// 这个单例可以在整个应用程序中共享，使得单例适合于管理应用程序中的全局状态

let counter = 0;
class Counter {
  getInstance() {
    return this;
  }
  getCount() {
    return counter;
  }
  increment() {
    return ++counter;
  }
  decrement() {
    return --counter;
  }
}
// 但是，此类不符合单例的标准！单例只能实例化一次。目前，我们可以创建该类的多个实例Counter。
const couter1 = new Counter();
const counter2 = new Counter();
console.log(couter1.getInstance() === counter2.getInstance()); // false
// 通过调用该new方法两次，我们只是将counter1和设置为不同的实例。该方法counter2返回的值和实际上返回了对不同实例的引用：它们并不严格相等！

/**
 * 我们如何确保只能创建该类的一个实例呢?
 * 一种方法: 确保只能创建一个实例的一种方法是创建一个名为的变量instance。在的构造函数中Counter，instance当创建新实例时，我们可以将 equal 设置为对实例的引用。我们可以通过检查变量是否instance已经有值来防止新的实例化。如果是这种情况，则实例已经存在。这不应该发生：应该抛出错误让用户知道
 */


{
  let instance;
  let counter = 0;

  class Counter {
    constructor() {
      if (instance) {
        throw new Error("You can only create one instance!");
      }
      instance = this;
    }

    getInstance() {
      return this;
    }

    getCount() {
      return counter;
    }

    increment() {
      return ++counter;
    }

    decrement() {
      return --counter;
    }
  }

  const counter1 = new Counter();
  // const counter2 = new Counter(); // Error: You can only create one instance!
}

// 单例的常见用例是在整个应用程序中拥有某种全局状态。代码库的多个部分依赖于同一个可变对象可能会导致意外行为。

// 通常，代码库的某些部分会修改全局状态中的值，而其他部分则会使用该数据。这里的执行顺序很重要：当没有数据可供使用时，我们不想意外地首先使用数据！随着应用程序的增长，理解使用全局状态时的数据流会变得非常棘手，并且数十个组件相互依赖。

// Vuex, Redux, Pinia