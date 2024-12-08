// 除了用户交互之外，我们经常有一些组件在初始页面上不可见。一个很好的例子是延迟加载图像，这些图像在视口中不直接可见，但只有在用户向下滚动时才会加载。

// 由于我们不会立即请求所有图像，因此我们可以减少初始加载时间。我们可以对组件做同样的事情！为了知道组件当前是否在我们的视口中，我们可以使用IntersectionObserverAPI，或使用诸如react-lazyload或 之类的库react-loadable-visibility来快速将可见性导入添加到我们的应用程序中。