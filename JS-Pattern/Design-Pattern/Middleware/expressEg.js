const app = require('express')();

app.use('/', (req, res, next) => {
  req.header["test-header"] = 123;
  next();
}, (req, res, next) => {
  console.log(`Request has test header ${!!req.header["test-header"]}`);
  next();
})
// 该next方法调用请求-响应周期中的下一个回调。我们实际上会创建一个位于请求和响应之间的中间件函数链

// Request -> middleware -> next -> middleware -> next -> response

// 中间件模式使所有通信都流经一个中心点，从而使我们能够轻松简化对象之间的多对多关系。