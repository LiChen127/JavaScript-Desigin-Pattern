// <link rel="prefetch"> 是一种浏览器优化，它允许我们在需要之前获取后续路由或页面可能需要的资源

/**
 * 实现方式:
 * HTML声明完成 <link rel="prefetch" href="/pages/next-page.html" />
 * 通过HTTP标头(Link： <js/chat-widget.js>; rel=prefetch)
 * 服务工作者线程通过webpack或其他完成
 */

