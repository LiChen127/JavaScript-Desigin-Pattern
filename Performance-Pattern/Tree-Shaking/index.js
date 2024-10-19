// Tree Shaking
// 有时候我们会将应用程序中未使用的代码添加到包中。可以删除这部分死代码以减小包的大小，并防止不必要地加载更多数据！

// 将死代码添加到包之前删除死代码的过程称之为Tree-shaking

// 概念:
// Tree-shaking只在从最终的JavaScript包中删除永远不会使用的代码。如果操作正确可以减少JavaScript包的大小，并缩短下载解析和执行时间。对于webpack,rollup，它们会自动删除死代码

// 将application和dependencies看做AST。我们希望摇动这颗语法树来优化。树中的每个节点都是为您的应用程序提供功能的依赖项。在 Tree shake 中，输入文件被视为一个图。图中的每个节点都是一个顶级语句，在代码中称为“部分”。Tree shake 是一种图遍历，它从入口点开始并标记任何遍历的路径以供包含。⁣⁣ ⁣⁣

// 每个组件都可以声明符号、引用符号并依赖其他文件。甚至“部分”也被标记为有副作用或没有副作用。例如，该语句let firstName = 'Jane'没有副作用，因为如果没有任何东西需要 firstName，则可以删除该语句而不会观察到任何差异。但是该语句let firstName = getName()有副作用，因为如果不改变代码的含义，即使没有任何东西需要 firstName，也无法删除对的调用getName()。⁣⁣


// 导入:
// 只有使用 ES2015 模块语法（import和export）定义的模块才可以进行 tree-shaking。导入模块的方式决定了模块是否可以进行 tree-shaking。

// Tree shake 首先访问入口点文件的所有部分，并产生副作用，然后继续遍历图的边缘，直到到达新的部分。 遍历完成后，JavaScript 包仅包含遍历期间到达的部分。 其他部分被忽略。

// Side Effects
// 当我们导入 ES6 模块时，该模块会立即执行。尽管我们没有在代码中的任何地方引用模块的导出，但模块本身在执行时会影响全局范围（例如 polyfill 或全局样式表）。这称为副作用。尽管我们没有引用模块本身的导出，但如果模块本身已导出值，则由于导入时的特殊行为，模块无法进行 tree-shaking！