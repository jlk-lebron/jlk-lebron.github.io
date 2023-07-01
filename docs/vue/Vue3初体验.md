## 1. 创建 vue3 脚手架两种方式

1. webpack

- vue create xxx

2. vite

- npm create vite@latest

结论：

- vue2 用 webpack 脚手架
- vue3 用 vite 脚手架

## 2. 安装 VSCode 扩展程序

搜索关键字 `volar`, 安装前两个扩展程序即可

注意：在 Vue3 开发中要禁用 `Vetur` 这个 Vue2 的扩展程序

## 3. Vue3 初体验

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

/*
  全局方法和全局配置都在app对象上：
    app.component()
    app.directive()
*/
// const app = createApp(App);
// app.mount("#app");

createApp(App).mount('#app')
```

```vue
<!-- app.vue -->
<template>
  <!-- Vue3组件不在需要根标签 -->
  <p class="title">{{ count }}</p>
  <button @click="handleClick">按钮</button>
</template>

<script lang="ts">
  export default {
    name: 'App',
    data() {
      return {
        count: 0
      }
    },
    methods: {
      handleClick() {
        this.count++
      }
    }
  }
</script>

<style scoped>
  .title {
    color: yellowgreen;
  }
</style>
```

## 4. data

1. Vue2 中 data

- 写法：

  - 对象形式
  - 函数形式
  - 注意：组件中只能写函数形式

- 特点：

  - 新增数据不是响应式的
  - 解决：使用 `$set` 方法可以将数据变成响应式

- 原理：

  - Vue2 中响应式原理主要通过 `Object.defineProperty` 实现的

2. Vue3 中 data

- 写法：

  - 只能写函数形式

- 特点：

  - 原有数据和新增数据都是响应式的

- 原理：

  - Vue3 中响应式原理主要通过 `Proxy` 实现的

## 5. watch 和 computed

Vue2 和 Vue3 用法差别不大

1. 面试问题：监视属性和计算属性有什么区别？

- 计算属性有缓存，监视属性没有
- 计算属性一定有返回值，监视属性没有
- 监视属性可以进行异步操作，计算属性不行

2. 开发问题：什么时候用监视属性？什么时候用计算属性？

- 模板页面有一些变化的值，需要定义数据。
- 首先考虑定义 data 数据
- data 数据不能直接展示，需要对 data 数据进行加工处理（累加、求和、过滤等）可以使用计算属性
- data 数据发生变化要进行异步（其他）操作，考虑使用监视属性

## 6. 指令语法

### 6.1. 重要指令

1. v-bind

- 作用：单向数据绑定，动态绑定数据（给标签属性绑定一个动态的值）
- 语法：v-bind:属性名="属性值"
- 简写：:属性名="属性值"
- 修饰符：
  - .sync （只有 Vue2 有，Vue3 删除了）

2. v-model

- 作用：双向数据绑定（收集表单数据）
- 语法：v-model="JS 表达式"
- 修饰符：

  - .lazy 将绑定 input 事件改成了 change 事件（失去焦点触发）
  - .trim
  - .number

- 原理（双向数据绑定原理）：

  - 如果是 DOM 元素

    - 如果是普通输入框或文本域，绑定 value 属性和 input 事件
    - 如果是单选框或多选框，绑定 checked 属性和 change 事件
    - 如果是下拉列表，绑定 value 属性和 change 事件

  - 如果是组件

    - Vue2 中绑定 value 属性和 input 事件
    - Vue3 中绑定 modelValue 属性和 update:modelValue 事件

3. v-on

- 作用：绑定事件
- 语法：v-on:事件名称="事件回调函数"
- 简写：@事件名称="事件回调函数"
- 修饰符：

  - .native 绑定原生 DOM 事件（只有 Vue2 有，Vue3 删除了）
  - .once
  - .prevent 阻止事件默认行为

4. v-for

- 作用：列表渲染
- 语法：v-for="(item, index) in xxx" :key="item.id"
- key 有什么用？

  - 在 diff 算法中尽可能复用相同 key 的元素

- key 尽量用 id，用 index 在往数组前面添加/删除时性能不好

5. v-if / v-else-if / v-else

- 作用：条件渲染（让元素显示隐藏）
- 语法：v-if="JS 表达式"

6. v-show

- 作用：条件渲染（让元素显示隐藏）
- 语法：v-show="JS 表达式"
- v-if 和 v-show 区别： -

  - 隐藏时对元素操作不一样
    - v-if 直接删除（卸载）元素
    - v-show 通过样式 display: none 来隐藏元素
  - 频繁切换 v-show 更好，不频繁切换 v-if 更好

- v-for 和 v-if 一起使用：

  - Vue2 中 v-for 优先级高
    - 解决：使用计算属性，对数据先进行过滤处理，在遍历展示
  - Vue3 中 v-if 优先级高

7. v-slot

- 作用：插槽，给子组件传递标签数据
- 分类：

  - 默认插槽
  - 具名插槽
  - 作用域插槽

8. v-memo

- 作用：用来缓存部分 DOM 元素
- 语法：v-memo="[依赖项]"

### 6.2. 次要指令（了解）

1. v-once

- 只解析渲染一次，后面不会更新了

2. v-pre

- 跳过解析，只渲染原始内容

3. v-text

- 设置元素 textContent 内容（相当于 innerText）

4. v-html

- 设置元素 innerHTML 内容

5. v-cloak

- 用于隐藏尚未完成编译的 DOM 模板
- 配合样式一起使用：

```css
[v-cloak] {
  display: none;
}
```

## 7. 样式处理

1. 静态样式

- class
- style

2. css 预处理器

- less
  - 下载依赖：npm i less -D
  - 使用：`<style lang="less"></style>`
- sass
  - 下载依赖：npm i sass -D
  - 使用：`<style lang="sass"></style>`
  - 或：`<style lang="scss"></style>`
- stylus
  - 下载依赖：npm i stylus -D
  - 使用：`<style lang="stylus"></style>`

3. 动态样式

- 动态 class

  - 字符串形式：`:class="xxx"`
  - 对象形式：`:class="{ xxx: true, yyy: false, }"`
  - 数组形式：`:class="[xxx, yyy]"`

- 动态 style

  - `:style="{ }"`

- v-bind 绑定动态的值

  - `.xxx{ color: v-bind(xxx) }`

4. 样式作用域 scoped：

- 作用：让样式只对当前组件生效(也会影响子组件根标签，如果子组件没有根标签就不会影响了)
- 原理：
  - 给当前组件所有元素添加一个自定义属性 data-v-7a7a37b1
  - 给当前组件所有样式添加一个属性选择器 [data-v-7a7a37b1]

5. 问题：父组件如何修改子组件样式？

- 深度样式选择器 :deep() 。（最佳方案）
- 写一个新的 style 标签，不加 scoped。（问题：会影响所有组件）

## 8. 生命周期函数

1. 创建（初始化）阶段

- beforeCreate
- created

2. 挂载阶段

- beforeMount
- mounted
  - 发送请求、设置定时器、绑定 DOM 事件、绑定自定义事件等异步任务

3. 更新阶段

- beforeUpdate
- updated

4. 卸载阶段

- Vue2 中

  - beforeDestroy
  - destroy

- Vue3 中

  - beforeUnmount
    - 清除定时器、解绑事件等收尾工作, 防止内存泄漏
  - unmounted

5. 被 keep-alive 组件缓存的组件，多两个生命周期

- activated 激活
- deactivated 失效

6. errorCaptured 用来捕获后代组件产生的错误

## 9. 组件间通信

### 9.1. Vue2 组件间通信：

1. 重要

- `props` 父 -> 子
- `自定义事件` 子 -> 父
- `v-model` 父 <-> 子
- `v-bind:xxx.sync` 父 <-> 子
- `插槽` 父 <-> 子 （通信的是标签数据）
- `vuex` 任意组件（兄弟、祖孙）

2. 次要

- `全局事件总线/pubsub` 任意组件（兄弟、祖孙）
- `provide/inject` 祖孙
- `$parent/$children/$refs` 父 <-> 子
- `$attrs/$listeners` 父 -> 子
- `localStorage`
- `路由参数 query/params/meta`

### 9.2. Vue3 组件间通信：

1. 重要

- `props` 父 -> 子
- `自定义事件` 子 -> 父
- `v-model` 父 <-> 子
- `插槽` 父 <-> 子 （通信的是标签数据）
- `vuex/pinia` 任意组件（兄弟、祖孙）

2. 次要

- Vue3 移除了全局事件总线，提供 mitt 库
- `provide/inject` 祖孙
- `$parent/$refs` 父 <-> 子
- `$attrs`
- `localStorage`
- `路由参数 query/params/meta`
