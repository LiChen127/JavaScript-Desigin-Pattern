// 无渲染组件是Vue中的一种模式，它将组件的逻辑与其表示分离。该模式提供了一种封装功能的方法，而无需规定组件的视图。
// 无渲染组件仅仅关注逻辑和行为，而将渲染留给父组件。

// 当我们需要创建可应用于不同 UI 实现的可重用逻辑时，无渲染组件特别有用。通过将逻辑抽象为无渲染组件，我们可以轻松地在各种上下文中重用它，而无需重复代码。


// mind
// 无渲染组件背后的思想是创建一个组件，该组件本身不渲染任何HTML或UI元素，但是将其内部状态和方法公开给父组件，然后父组件根据无渲染组件公开的数据和行为渲染适当UI


// 插槽可以让父组件决定应该渲染什么内容

// 插槽允许父组件将模板内容注入到子组件中，并且可以被视为类似于道具，但不是传递 JavaScript 值，而是允许将模板片段传递给子组件。

/**
<template>
  <slot :checkbox="checkbox" :toggleCheckbox="toggleCheckbox"></slot>
</template>

<script setup>
  import { ref } from "vue";

  const checkbox = ref(false);

  const toggleCheckbox = () => {
    checkbox.value = !checkbox.value;
  };
</script>
 */


/**
<template>
  <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
    <div class="comp">
      <label class="switch">
        <input type="checkbox" :value="checkbox" @click="toggleCheckbox" />
        <div class="slider rounded" :class="checkbox ? 'active' : ''"></div>
      </label>
    </div>
  </ToggleComponent>
</template>

<script setup>
  import ToggleComponent from "./components/ToggleComponent";
</script>
 */
