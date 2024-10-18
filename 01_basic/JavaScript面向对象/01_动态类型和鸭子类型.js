// 什么是鸭子类型(duck typing)
/***
 * 从前在JavaScript王国里，有一个国王，他觉得世界上最美妙的声音就是鸭子的叫声，于是国王召集大臣，要组建一个1000只鸭子组成的合唱团。大臣们找遍了全国，终于找到999只鸭子，但是始终还差一只，最后大臣发现有一只非常特别的鸡，它的叫声跟鸭子一模一样，于是这只鸡就成为了合唱团的最后一员。
 * 这个故事告诉我们，国王要听的只是鸭子的叫声，这个声音的主人到底是鸡还是鸭并不重要。鸭子类型指导我们只关注对象的行为，而不关注对象本身，也就是关注HAS-A，而不是IS-A。
 */

// 利用鸭子类型，我们可以轻松在动态类型语言中实现一个原则: "面向接口编程"
// 一个Object，我们需要它是栈，他就可以被实现为栈。如果需要它有length属性，就赋予它属性的意义。