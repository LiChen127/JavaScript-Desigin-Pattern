// 使用代理对象，我们可以更好地控制与某些对象的交互，代理对象可以确定我们与对象交互的行为。
// 这就意味着我们不是与目标对象直接交互，而是与代理对象交互

{
  // eg
  const person = {
    name: 'narci',
    age: 22,
    address: 'bejing',
  };
  // Proxy
  const personProxy = new Proxy(person, {
    get: (obj, prop) => {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
    }
  });
  personProxy.age = 18;
  console.log(person.age);
}

// Reflect
// JavaScript提供了一个内置对象Reflect，使得我们可以在使用代理的时候轻松操作目标对象
{
  // eg
  const person = {
    name: 'narci',
    age: 22,
    address: 'bejing',
  };
  // Proxy
  const personProxy = new Proxy(person, {
    get: (obj, prop) => {
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    },
    set: (obj, prop, value) => {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      // obj[prop] = value;
      Reflect.set(obj, prop, value);
    }
  });
  personProxy.age = 18;
  console.log(person.age);
}