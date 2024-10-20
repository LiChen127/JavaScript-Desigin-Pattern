// 渲染模式选择

// 静态渲染
// 使用静态渲染时，整个页面的 HTML 会在构建时生成，直到下一次构建时才会更改。HTML 内容是静态的，并且可以轻松缓存在 CDN 或 Edge 网络上。当客户端请求特定页面时，CDN 可以快速向客户端提供预渲染的缓存 HTML。这大大减少了在典型的服务器端渲染设置中处理请求、渲染 HTML 内容和响应请求所需的时间。

// 最适合那些不经常更改且无论谁请求都会显示相同数据的页面。由于我们如今在网络上使用大量动态、自定义数据，因此我们提供了各种静态渲染来满足不同的用例。


// 基本/普通静态渲染

// 纯静态渲染对性能非常有利，因为它可以实现极快的 TTFB，因为 HTML 已经在服务器上可用。浏览器收到更快的响应并可以快速渲染，从而实现快速的 FCP 和 LCP。由于内容是静态的，因此在渲染时不会发生布局偏移。
// 因此，纯静态渲染，尤其是使用 CDN 进行缓存，有助于实现出色的核心 Web 指标。但是，大多数网站至少有一些动态内容或用户交互。



// 客户端静态渲染fetch
// 当用户请求页面时，预生成的 HTML 文件会发送到客户端。用户最初看到的是没有任何数据的框架 UI。客户端从 API 路由获取数据，接收响应并显示列表。


// 缺点
// 1.只有从 API 路由获取列表数据后才能显示“最大内容”。
// 2.我们每个页面请求只调用一次 API 路由，因此这种方法可能会导致更高的服务器成本。

// 静态getStaticProps
// 此方法允许您在构建时在服务器上访问数据提供程序并获取数据。如果您知道静态页面上的动态数据在构建时始终可用，那么这可能是一个好的解决方案。

// 当我们构建项目时，数据提供程序会被调用，并且返回的数据会被传输到生成的 HTML。
// 当用户请求页面时，该过程类似于普通的静态渲染。响应被缓存并渲染到屏幕上，浏览器获取填充页面所需的 JavaScript 包。

// 从客户端的角度来看，网络和主线程的工作与普通静态渲染相同，因此我们获得了同样卓越的性能。
// 该方法也仅适用于我们能够在构建时不频繁更新数据的情况。频繁更新数据意味着经常需要重建和重新部署网站。



// 增量静态再生 Incremental Static Regeneration

// ISR 是混合型的，因为它允许我们仅预渲染某些静态页面，并在用户请求时按需渲染动态页面。这样可以缩短构建时间，并允许在特定间隔后自动使缓存失效并重新生成页面。

// 预渲染和按需生成的页面的交付方式类似。如果用户请求尚未生成的页面，则该页面将按需生成并由 Edge 缓存。因此，只有第一个用户可能会对未预渲染的页面体验较差。其他所有人都将受益于快速的缓存响应。

// 通过增量静态再生，我们可以通过每隔几秒自动重新验证页面来显示动态内容。

// 虽然这比我们之前的做法已经有了很大的改进，但仍存在一些缺点。我们的内容可能不会像我们定义的间隔那样频繁更新。这将导致不必要的页面重新生成和缓存失效。每次发生这种情况时，我们都会调用无服务器函数，这可能会导致更高的服务器成本。


// 按需静态增量再生 On-demand Increnmental Static Rengeneration

// 使用常规 ISR，更新后的页面仅缓存在处理过用户页面请求的边缘节点上。按需 ISR 会在边缘网络上重新生成并重新分发页面，以便全球用户自动从边缘缓存中看到页面的最新版本，而不会看到过时的内容。我们还避免了不必要的重新生成和无服务器函数调用，与常规 ISR 相比，降低了运营成本。


// 服务器端渲染
// 使用服务器端渲染，我们会为每个请求生成 HTML。这种方法最适合包含高度个性化数据的页面


// 生成的 HTML 内容对于每个请求都是唯一的，不应被 CDN 缓存。
// 客户端的网络和主线程对于静态渲染和服务器端渲染非常相似。FCP 几乎等于 LCP，并且我们可以轻松避免布局偏移，因为初始页面加载后没有动态内容加载。


// 但是，服务器渲染页面的 TTFB 明显比静态渲染长，因为每次请求时都会从头开始生成页面。


// 边缘SSR + HTTP Stream

// 使用无服务器功能，我们在服务器端生成整个页面，并等待整个包在客户端加载和解析后才能开始水化。
// 借助 Edge SSR，我们可以在文档的各个部分准备就绪后立即将其流式传输，并对这些组件进行精细化处理。这样可以减少用户的等待时间，因为他们可以逐个查看流式传输的组件。


// 现在，我们不必对整个页面进行服务器渲染，而是可以选择仅在服务器端渲染列表组件，其余部分则在客户端渲染。虽然我们最初必须对整个页面进行服务器渲染才能实现此行为，但现在我们可以获得静态渲染的出色性能以及服务器端渲染的动态优势。