// 选项式API
// 在 Vue 中引入 Composition API 之前，开发人员依赖Options API来组织组件逻辑，其中包括响应式数据、生命周期方法、计算属性等。

// 着组件变得越来越大、越来越复杂，管理和维护起来会变得具有挑战性。在特定选项中定义组件逻辑会使代码更难阅读和理解，尤其是在处理大量组件时。在这种设置下，提取和重用组件之间的通用逻辑也会很困难。

// 随着组件的增长，组织和定位组件内的相关逻辑将变得更具挑战性。

// 为了应对这些问题，Vue3中引入了组合式API

// composition API可以看作是提供代表Vue核心功能的独立函数的API，这些函数主要用于单个setup()选项中。该选项是使用CompositionAPI的入口

/**
<script>
  export default {
    name: "MyComponent",
    setup() {
      // the setup function
    },
  };
</script>
 */

// setup()函数在组件创建之前以及组件的props可用时执行。
// 借助 Composition API，我们可以导入独立函数来帮助我们在组件中访问 Vue 的核心功能。


// setup为什么好
// 采用组合式API的一大好处时能够提取和重用组件之间的共享逻辑。这是因为我们可以简单地声明使用 Vue 全局可用组合函数的函数，并且可以轻松地在多个组件中使用我们的函数来实现相同的结果。

// 使用 Vue 中的可组合函数可以更轻松地将组件的逻辑分成几个较小的部分。重用相同的状态逻辑现在变得容易了，因为我们不再局限于在 Options API 中的特定选项内组织代码。
// 借助setup，我们可以灵活地提取和重复使用跨组件的共享逻辑。这种关注点分离使我们能够专注于每个可组合函数中的特定功能，从而使我们的代码更加模块化和易于维护。