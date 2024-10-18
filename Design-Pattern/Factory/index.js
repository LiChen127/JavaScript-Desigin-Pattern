// 使用工厂模式，我们可以使用工厂函数来创建新对象。如果函数不使用关键字，则返回新对象，该函数就是工厂函数

const createUser = ({ firstName, lastName, email } => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}))

// 如果我们要创建相对复杂且可配置的对象，工厂模式会很有用。键和值的值可能取决于特定的环境或配置。使用工厂模式，我们可以轻松创建包含自定义键和值的新对象！

const createObjFromArr = ([key, value]) => ({
  [key]: value
});
// advantage
// 当我们必须创建多个具有相同属性的较小对象时，工厂模式非常有用。工厂函数可以根据当前环境或用户特定的配置轻松返回自定义对象。

// disadvantage
// 在 JavaScript 中，工厂模式不过是一个不使用new关键字即可返回对象的函数。ES6箭头函数允许我们创建每次隐式返回对象的小型工厂函数。

// 然而，在许多情况下，每次创建新实例而不是创建新对象可能更节省内存。