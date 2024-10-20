// <script setup>是编译时语法糖，允许使用组合式API来更简洁高效地定义vue选项。

// 通过利用<script setup>块，我们可以将组件逻辑压缩为单个块，从而无需显式setup()函数。要使用<script setup>语法，我们只需将setup 属性引入<script />块即可。


// 无需return statement

// 有了这种<script setup>语法，我们不再需要return在块的末尾定义语句。在顶层声明的绑定（函数、变量、导入等）在模板中可轻松访问和使用。


// 组件导入会在块内自动识别和解析，<script setup>无需再components选项内明确声明组件

// defineProps()
// <script setup>可以使用函数在块内直接访问 Props defineProps()。
// defineProps()还允许我们用纯 TypeScript 声明我们的数据的类型

// defineEmits()
// <script setup>与 props 类似，可以使用defineEmits()组件中的函数直接在块内发出自定义事件。