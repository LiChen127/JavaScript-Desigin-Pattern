// is动态组件通过将属性绑定到保留元素来构成组件之间的动态变化能力

/**
<template>
  <div class="demo">
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Home from "./components/Home.vue";
  import Feed from "./components/Feed.vue";
  import History from "./components/History.vue";

  // eslint-disable-next-line no-unused-vars
  const currentTab = ref("Home");

  // eslint-disable-next-line no-unused-vars
  const tabs = {
    Home,
    Feed,
    History,
  };
</script>
 */
// 为了动态的渲染某个子组件，我们将一个is属性绑定到保留<component>元素。附加到属性的值is应该与我们要动态呈现的子组件相对应。


// Keep-alive
// 使用动态组件时，保存状态是需要牢记的重要事项。默认情况下，卸载组件时，其状态将丢失。但是，Vue 提供了一种使用组件保存动态组件状态的方法 <KeepAlive>。


/**
<template>
  <div class="demo">
    <KeepAlive>
      <component :is="tabs[currentTab]" class="tab"></component>
    </KeepAlive>
  </div>
</template>

<script setup>
  // ...
</script>
 */
// 使用<KeepAlive>组件包裹<component>元素，动态组件卸载时其状态将被保留。这意味着任何数据或组件状态都将保留，并且组件再次安装时将保留其先前的状态。
