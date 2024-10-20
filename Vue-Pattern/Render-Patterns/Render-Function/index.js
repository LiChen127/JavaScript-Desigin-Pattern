// Vue 建议我们使用模板（即<template></template>语法）来构建 Vue 组件的标记。但是，我们也有机会直接使用所谓的渲染函数来构建组件的标记。

// Vue在构建时会获取我们为组件创建的模板，并将其编译为渲染函数。在这些编译后的渲染函数中，Vue会构建构成虚拟DOM的节点的虚拟模式

/**
 * 为什么除了Template之外我们还需要渲染函数?
 * 当我们需要更高级别的自定义和灵活性时，渲染函数就会发挥作用，而这在标准模板语法中很难实现。
 * 什么情况?
 * 当您需要根据复杂的逻辑动态渲染组件时，在模板中表达会麻烦
 * 希望直接对虚拟DOM进行操作
 * 希望使用JSX来构建组件模板
 */


// 渲染函数
/**
<template>
  <div class="render-card">
    <header class="card-header card-header-title">{{ message }}</header>
  </div>
</template>

<script setup>
  const { message } = defineProps(["message"]);
</script>
 */
<template>
  <render />
</template>
import { h } from 'vue';
const { message } = defineProps(["message"]);
const render = () => {
  return h("div",
    {
      class: "render-card",
    },
    [h(
      "header",
      {
      class: "card-header card-header-title"
      },
      message
    ),
    ]
  );
}
/**
 * h时hyperScript的缩写。表示生成HTML的JavaScript语法
 * 简单来说h()就是渲染函数，它允许我们创建Vue用于跟踪并随后在页面上渲染的DOM节点的 "虚拟"表示
 * h()三个参数:
 * 1.HTML标签
 * 2.要传递给元素的道具/属性
 * 3.父节点的子节点
 */


// 渲染函数和jsx
// 我们上面的实现可能看起来有些痛苦，很大程度上是因为我们使用原始的原生 JavaScript 编写了渲染函数。为了使编写渲染函数变得更加容易，Vue 允许我们在适当的Babel 插件的帮助下使用 JSX 编写渲染函数！


// JSX 可以帮助我们以更易于阅读的方式重新创建渲染实现，因为我们可以在渲染函数中安全地编写 HTML：
/**
<template>
  <render />
</template>

<script setup lang="jsx">
  const { message } = defineProps(["message"]);

  const render = (
    <div class="render-card">
      <header class="card-header card-header-title">{message}</header>
    </div>
  );
</script>
 */
// 有了 JSX，我们的渲染函数看起来就不那么难了！重要的是要记住，JSX 是一种开发工具，始终需要借助 Babel 包（如babel-plugin-jsx）转换为标准 JavaScript。create -vue和Vue CLI都提供了使用预配置的 JSX 支持的脚手架项目选项。


// 功能组件
// 函数式组件是一种渲染函数，它提供了一种使用普通函数定义组件的方法。
// 函数式组件是一种独特的组件类型，它缺乏内部状态。它们类似于纯函数，接受props作为输入并生成虚拟节点并输出。

// 渲染函数提供了一种使用JavaScript来构建vue组件的强大方式。它允许我们创建vue用于跟踪和在页面上渲染的DOM节点的虚拟表示
