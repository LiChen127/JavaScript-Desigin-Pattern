// 交互时导入
// 当用户需要UI交互时，延迟加载非关键资源

// 有些资源并不是需要一开始加载，可能需要点击或者其他操作，这些资源成本高昂，如果立即记载可能会阻塞主线程,这样很糟糕

// 我们要做的就是合适的时候去加载它们。
/**
 * 比如:
 * 用户第一次交互时
 * 将组件滚动到视图中
 * 推迟组件的加载
 */

/**
 * 分析加载资源的不同方式:
 * Eager: 立即加载
 * Lazy(Route-based): 当用户导航到某个路由或组件时
 * Lazy(On Interaction)： 当用户与UI交互时
 * Lazy(In viewPort): 当用户与组件交互时
 * Prefetch: 在需要之前加载，但在关键资源加载之后
 * Preload: 积极、紧迫地
 */

// 方式

// 使用假外观加载第三方UI
/**
 * 您可能正在导入第三方脚本，但对其呈现的内容或加载代码的时间控制较少。实现交互时加载的一个选项很简单：使用Facade。Facade是更昂贵组件的简单“预览”或“占位符”，您可以在其中模拟基本体验
 * 当用户点击“预览”（外观）时，资源的代码就会加载。这限制了用户在不打算使用某项功能时需要支付体验费用的情形。同样，外观可以在悬停时预先连接到必要的资源。
 */

// 如何在交互时导入?

// 原始JavaScript
// 在js中，动态import()可以启用延迟回调加载模块并return new Promise.
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  import('lodash.sortby').then((module) => module.default).then(sortInput());
})