// 组件分为两类:
// 1.展示组件: 关注的是事物的外观。不指定如何加载或改变数据，而是通过props专门接受数据和callback

// 2.容器组件: 这些组件与事物的运作方式有关。它们向展示组件传入props或提供数据/fn

// 但是，随着React的Hooks和Vue3中setup的出现，这两种组件的界限开始模糊
// 钩子和 Composition API 开始允许开发人员封装和重用状态和逻辑，而不必局限于基于类的容器组件或 Options API。因此，容器/展示模式不再像以前那样严格遵守。


// Composables替换容器/展示组件模式

// 可组合项的引入使开发人员可以轻松添加状态，而无需容器组件来提供该状态。


/**
import { ref, onMounted } from 'vue';
export default function useDogImgs() {
  const dogs = ref([]);
  onMounted(async () => {
    const res = await fetch('url');
    const { msg } = await res.json();
    dogs.value = msg;
  })
  return dogs;
}
 */
// 通过这个hooks，不再需要包装一个容器组件来获取数据，可以直接在展示组件中使用这个hooks

/**
<template>
  <img v-for="(dog, index) in dogs" :src="dog" :key="index" alt="Dog" />
</template>

<script setup>
  import useDogImages from "../composables/useDogImages";
  const { dogs } = useDogImages();
</script>
 */
// 通过这个hook，我们还是能将app逻辑与view分开，我们只是用return的data，并不在组件内部修改数据


