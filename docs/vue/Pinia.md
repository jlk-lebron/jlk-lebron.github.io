
# Pinia

https://pinia.vuejs.org/zh/

### 1. pinia 和 vuex 区别

- pinia 没有 mutations
- pinia TypeScript 支持更加友好
- pinia 定义的模块不需要汇总
- pinia 的 state 数据可以直接修改，操作方便

### 2. pinia 基本使用

1. 下载依赖

```
npm i pinia
```

2. 定义 pinia 主模块

```ts
// store/index.ts
import { createPinia } from "pinia";

export default createPinia();
```

3. 应用 pinia

```ts
// main.ts
import { createApp } from "vue";

import App from "./App.vue";

import store from "./store";

createApp(App).use(store).mount("#app");
```

4. 定义 pinia 分模块

```ts
// store/modules/counter.ts
import { defineStore } from "pinia";

interface CounterStore {
  count: number;
  todoList: { id: number; name: string; isDone: boolean }[];
}

export const useCounterStore = defineStore(
  "counter", // 开发者调试工具显示pinia模块名称
  {
    // state必须是函数形式
    // 这个函数必须返回一个对象
    state: (): CounterStore => {
      return {
        count: 0,
        todoList: [],
      };
    },
    getters: {
      oddOrEven(state) {
        return (state.count & 1) === 1 ? "奇数" : "偶数";
      },
    },
    // pinia删除了mutations，只有actions
    // 发送请求和更新数据都需要在actions中完成
    actions: {
      // 每个action函数接受n个参数
      increment() {
        this.count++;
      },
    },
  }
);
```

5. 组件使用

- 引入模块的 store 对象

```ts
import { useCounterStore } from "./store/modules/counter";
const counterStore = useCounterStore();
```

- 读取数据

  - 读取 state 数据

  ```ts
  counterStore.count;
  ```

  - 读取 getters 数据

  ```ts
  counterStore.oddOrEven;
  ```
- 更新数据

  - 如果更新需要发送请求，就定义 action 函数
  - 如果更新不需要发送请求
    - 更新一个数据，直接更新即可
    - 更新多个数据，使用 $patch

## Vue-Router

1. 作用：用来开发单页面应用（SPA）
2. 单页面应用特点：

- 整个应用只有一个完整页面，所有更新都在这个页面中更新的
- 点击链接不会刷新和跳转，只会局部更新

3. 两种模式：

- hash

  - 路径带#
  - 兼容性更好
  - 实现原理不一样
    - 通过 window.location.hash 改变路由路径
    - 通过 window.onhashchange 事件，监听路由路径的变化，做局部更新
- history

  - 路径没有#
  - 兼容性稍差
  - 实现原理不一样
    - 通过 window.history.pushState/replaceState 改变路由路径
    - 通过 window.onpopstate 事件，监听路由路径的变化，做局部更新

因为 history 没有#，路径更美观，所以开发主要用 history 模式

history 模式存在一个问题：刷新 404

4. 提供两个组件

- router-link 路由跳转（声明式导航）
- router-view 加载显示（渲染）路由组件

5. 提供两个属性

- $router 路由跳转（编程式导航）
  - 选项式
    - this.$router.push/replace/go/back()
  - 组合式
    - const router = useRouter();
    - router.push/replace/go/back();
- $route 获取路由信息（路由路径、路由参数）
  - 选项式
    - $route.path 路由路径
    - $route.params 路由 params 参数
    - $route.query 路由 query 参数
    - $route.meta 路由 meta 参数
  - 组合式
    - const route = useRoute();
    - route.path/params/query/meta;

6. 缓存路由组件

```vue
<router-view v-slot="{ Component }">
  <transition name="fade">
    <keep-alive :max="10">
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
```

```css
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
```

## 新增组件

1. teleport

功能：将默认插槽渲染到指定 DOM 容器中（将组件内容渲染到组件外）

```vue
<teleport to="#xxx">
  <p>xxx</p>
</teleport>
```

2. Suspense

实验性组件，慎用

- 用于协调对组件树中嵌套的异步依赖的处理。
