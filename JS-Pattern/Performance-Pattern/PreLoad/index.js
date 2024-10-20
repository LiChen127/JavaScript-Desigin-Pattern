// 预加载( <link rel="preload">) 是一种浏览器优化，允许更早地请求关键资源


// 在优化交互时间或首次输入延迟等指标时，预加载可用于加载交互所需的 JavaScript 包（或块）。请记住，使用预加载时需要格外小心，因为您要避免以延迟首次内容绘制或最大内容绘制所需的资源为代价来提高交互性。

/**
 * 在SEO页面中预加载
 * 虽然prefetch是一种很好的缓存可能很快就会被请求的资源的方法，但我们可以preload需要立即使用的资源。
 * Webpack 4.6.0+ 允许通过添加 webpackPreload: true 到导入来预加载资源。为了使预加载在旧版本的 webpack 中工作，您需要将其添加preload-webpack-plugin到 webpack 配置中
 */

/**
 * 不同与prefetch，在preload中，浏览器仍然有权决定它是否认为其具有足够好的互联网连接和带宽来实际预取资源，而预加载的资源无论如何都会被预加载。
 */

// preload + async
// 如果您希望浏览器以高优先级下载脚本，但不阻止解析器等待脚本，您可以利用下面的预加载 + 异步 hack。
{/* <link rel="preload" href="index.js" as="script"> */}