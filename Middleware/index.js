// 中间件模式
// 将这种模式与空中交通管制员和飞行员之间的关系进行比较。飞行员之间不会直接交谈，因为这可能会造成混乱，而是飞行员与空中交通管制员交谈。空中交通管制员确保所有飞机都收到所需的信息，以便安全飞行，而不会撞到其他飞机。

// 我们经常需要处理对象之间的多向数据。如果组件数量很多，组件之间的通信就会变得相当混乱。


// 对象的请求由中介者处理，而不是让每个对象直接与其他对象对话，从而形成多对多关系。中介者处理此请求，并将其转发到需要它的地方。

// 中介模式的一个很好的用例是聊天室！聊天室内的用户不会直接互相交谈。相反，聊天室充当用户之间的中介。

class ChatRoom {
  logMessage(user, msg) {
    const time = new Date();
    const sender = user.getName();
    console.log(`${time} [${sender}: ${msg}]`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }
  getName() {
    return this.name;
  }
  send(msg) {
    this.chatroom.logMessage(this, msg);
  }
}