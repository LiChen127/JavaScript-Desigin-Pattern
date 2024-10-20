// 如何检查第三方资源的影响
/**
 * 减少第三方代码对于阻塞主线程的脚本的影响。
 * 减少执行时间较长的脚本的JavaScript 执行时间
 * 避免大型脚本产生巨大的网络负载
 */


// 优化策略
/**
 * 1.替换或删除第三方
 * 2.优化加载顺序
 */

// 高效加载第三方脚本
// 使用异步或延迟来防止脚本阻止其他内容。 适用于：非关键脚本（标签管理器、分析）

// JavaScript 的下载和执行默认是同步的，并且会阻塞主线程上的 HTML 解析器和 DOM 构建。在元素中使用async或defer属性<script>会告诉浏览器异步下载脚本。您可以使用它们来下载任何对关键渲染路径（例如主 UI 组件）不必要的脚本

/**
 * defer: 脚本在解析器执行时并行获取，并且脚本执行会延迟到解析完成为止。延迟执行到 DOM 构建之后应该是默认选择。
 * async: 脚本在解析时并行获取，但是一旦脚本可用就会立即执行，否则阻塞解析器。 对于具有依赖项的模块脚本，脚本及其所有依赖项都会在延迟队列中执行。用于需要async在加载过程中更早运行的脚本。
 */

// 延迟加载
// 自托管第三方脚本以防止往返.在同一个源上自托管一份脚本副本，可以让你更好地控制脚本的加载和缓存过程。自托管减少了 DNS 查找所需的时间，并允许你使用HTTP 缓存改进脚本的缓存策略。你还可以使用HTTP/2 服务器推送来推送你知道用户会需要的脚本。
// 尽可能使用webworker 您可以使用服务工作线程来改进此类第三方脚本的缓存，同时还可以利用 CDN 边缘缓存。此技术可让您更好地控制通过网络重新获取的频率。此技术可以与预连接结合使用，以进一步降低获取操作的网络成本。您还可以加载资源，以便将非必要的第三方脚本的请求推迟到页面到达关键用户时刻。
// 遵循理想的装载顺序
// 按照脚本的理想类型划分。