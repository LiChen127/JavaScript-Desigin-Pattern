// 通过命令模式，我们可以将执行某项任务的对象与调用该方法的对象解耦。
class OrderManage{
  constructor() {
    this.orders = [];
  }
  placeOrder(order, id) {
    this.orders.push(id);
    return `下单成功，单号为${id}`;
  }
  trackOrder(id) {
    return `你的订单${id}会在20分钟后到达`;
  }
  cancelOrder(id) {
    this.orders = this.orders.filter(order => order.id === id);
    return `你的订单${id}被取消`;
  }
}
// 但是，直接在实例上调用方法也有缺点manager。我们可能会决定稍后重命名某些方法，或者方法的功能会发生变化。

// 假设placeOrder我们现在将它重命名为 ，而不是addOrder！这意味着我们必须确保placeOrder在代码库的任何地方都不调用该方法，这在较大的应用程序中可能非常棘手。相反，我们希望将方法与manager对象分离，并为每个命令创建单独的命令函数！

// 让我们重构这个OrderManager类：它不再具有placeOrder、cancelOrder和trackOrder方法，而只有一个方法：execute。此方法将执行给定的任何命令。

// 每个命令都应该能够访问orders管理器，我们将其作为其第一个参数传递。
class OrderManageBe {
  constructor() {
    this.orders = [];
  }
  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}
class Command {
  constructor(execute) {
    this.execute = execute;
  }
}
function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
        return `下单成功，单号为${id}`;
  })
}
function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id !== id);
    return `你的订单${id}被取消`;
  })
}
function TrackOrderCommand(id) {
  return new Command(() => {
    return `你的订单${id}被取消`;
  })
}