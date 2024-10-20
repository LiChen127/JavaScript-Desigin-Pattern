/**
 * 岛屿架构
 * 
 */

/**
 * 写在前面
 * 岛屿架构鼓励在服务器呈现的网页中进行小而集中的交互。岛屿的输出是逐步增强的HTML,并且更加具体地说明了增强是如何发送地。
 * 与SEO控制整个页面地交互不同，有多个入口点。
 * 这些交互island的script可以独立交付和补充，使得页面的其余部分只是静态的HTML
 */


// SSR
// 核心原理:
// HTML在服务器上呈现，并附带必要的JavaScript以在客户端对其进行重新水化（rehydrate）
// rehydrate是在服务器呈现UI组件后，在客户端重新生成其状态的过程。
// 由于重新水化需要付出代价，因此 SSR 的每个变体都试图优化重新水化过程。
// 关键组件的部分rehydrate或在渲染组件时对其进行流式传输来实现的。
// 最终交付的净JavaScript保持不变

// island-architecture描述一种范式，旨在减少通过交互island传输的JavaScript量
// 这些island可以独立交付到静态的HTML之上。
// island-architecture是一种基于组件的架构，它建议使用静态和动态island对页面进行分区view
// page-static-area是纯非交互性HTML
// dynamic-area是HTML + JavaScript，能够在render后自动补水



// 动态组件island
// 大多数页面都是静态和动态内容的组合。
// 静态内容是无状态的，不会触发事件，渲染后不需要重新水化。渲染后，动态内容（按钮、过滤器、搜索栏）必须重新连接到其事件。必须在客户端重新生成 DOM（虚拟 DOM）。此重新生成、重新水化和事件处理函数有助于发送到客户端的 JavaScript。
// Islands 架构有助于在服务器端呈现包含所有静态内容的页面。但是，在这种情况下，呈现的 HTML 将包含动态内容的占位符。动态内容占位符包含独立的组件小部件。每个小部件都类似于一个应用程序，并结合了服务器呈现的输出和用于在客户端上填充应用程序的 JavaScript。

// 在渐进式数据融合中，页面的数据融合架构是自上而下的，页面控制各个组件的调度和数据融合。
// 每个组件在island架构中都有自己的数据融合脚本，这些脚本异步执行，独立于页面上的任何script。

