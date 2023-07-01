## 1. 组件间通信 - props

1. 父组件给子组件绑定数据

```vue
<Child :xxx="xxx" />
```

2. 子组件声明接受数据

```js
// 一共有三种做法:
props: ["xxx"]

props: {
  xxx: Number
}

props: {
  xxx: {
    type: Number,
    required: true
  }
}
```

3. 子组件使用数据

```js
// 所有props数据都会进行数据代理，可以通过this直接访问
this.xxx;
```

```html
<!-- 如果在模板页面中，直接访问即可 -->
{{ xxx }}
```

## 2. 组件间通信 - 自定义事件

### 2.1. Vue2

1. 结论

- 给组件绑定事件默认都是自定义事件
- 如果绑定事件加上 .native 就是原生 DOM 事件

2. 使用

- 父组件给子组件绑定事件

```vue
<Child @xxx="xxx" />
```

- 子组件触发事件

```js
this.$emit("xxx");
```

### 2.2. Vue3

1. 结论

- 给组件绑定事件默认都是原生 DOM 事件
  - 有两个前提：1. 子组件必须有根标签 2. 事件名必须是 DOM 事件名称。否则还是自定义事件
- 如果子组件内部声明接受了事件，那么该事件就变成自定义事件
  - 自定义事件都需要声明接受，否则会报 ts 类型错误

2. 使用

- 父组件给子组件绑定事件

```vue
<Child @xxx="xxx" />
```

- 子组件声明接受事件

```js
emits: ["xxx"];
```

- 子组件触发事件

```js
this.$emit("xxx");
```

## 3. 组件间通信 - .sync

> 只有 Vue2 能用，Vue3 删除了

1. 父组件给子组件绑定数据

```vue
<!-- 
  此时做了两件事：
    1. 绑定 xxx 属性
    2. 绑定 update:xxx 自定义事件
 -->
<Child :xxx.sync="xxx" />
```

2. 子组件声明接受 props 数据

```js
props: {
  xxx: Number;
}
```

3. 子组件使用数据

```js
this.xxx;
```

4. 子组件更新数据

```js
this.$emit("update:xxx", yyy);
```

## 4. 组件间通信 - v-model

### 4.1. Vue2

1. 结论

- 绑定 value 属性
- 绑定 input 自定义事件

2. 使用

- 父组件给子组件绑定数据

```vue
<Child v-model="xxx" />
```

- 子组件声明接受数据

```js
props: {
  value: Number;
}
```

- 子组件使用数据

```js
this.value;
```

- 子组件更新数据

```js
this.$emit("input", yyy);
```

### 4.2. Vue3

1. 结论

- v-model="xxx"

  - 绑定 modelValue 属性
  - 绑定 update:modelValue 自定义事件

- v-model:xxx="xxx"

  - 绑定 xxx 属性
  - 绑定 update:xxx 自定义事件

- 如果只有一个数据需要双向绑定，用 v-model="xxx"
- 如果有多个数据需要双向绑定，用 v-model:xxx="xxx"

2. 使用

- 父组件给子组件绑定数据

```vue
<Child v-model="xxx" />
```

- 子组件声明接受数据

```js
props: {
  modelValue: Number;
}
```

- 子组件使用数据

```js
this.modelValue;
```

- 子组件更新数据

```js
this.$emit("update:modelValue", yyy);
```

## 5. 组件间通信 - 插槽

1. 默认插槽

- 父组件给子组件传递标签数据

```vue
<Child>
  <div>111</div>
  <div>222</div>
  <div>333</div>
</Child>

<!-- 或 -->
<Child>
  <template #default>
    <div>111</div>
    <div>222</div>
    <div>333</div>
  </template>
</Child>
```

- 子组件使用默认插槽数据

```vue
<slot />
```

2. 具名插槽

- 父组件给子组件传递标签数据

```vue
<Child>
  <template v-slot:xxx>
    <div>111</div>
    <div>222</div>
    <div>333</div>
  </template>
</Child>

<!-- 或 -->
<Child>
  <template #xxx>
    <div>111</div>
    <div>222</div>
    <div>333</div>
  </template>
</Child>
```

- 子组件使用具名插槽数据

```vue
<slot name="xxx" />
```

3. 作用域插槽

- 子组件给插槽标签传递数据

```vue
<!-- 给默认插槽传递数据 -->
<slot :xxx="xxx" />
<!-- 给具名插槽传递数据 -->
<slot name="xxx" :xxx="xxx" />
```

- 父组件接受作用域插槽数据并使用

```vue
<Child>
  <!-- 默认插槽接受作用域插槽数据数据 -->
  <template #default="{ xxx }">
    <div>111 {{ xxx }}</div>
  </template>

  <!-- 具名插槽接受作用域插槽数据数据 -->
  <template #xxx="{ xxx }">
    <div>222 {{ xxx }}</div>
  </template>
</Child>
```

4. 结论

- 一定会将最重要的内容使用默认插槽
- 如果有结构要渲染不同位置，在考虑具名插槽
- 如果需要使用子组件数据进行渲染，就考虑作用域插槽

## 6. 组件间通信 - vuex

1. 下载 vuex

```
npm i vuex
```

2. 定义主模块

```js
// store/index.ts
import { createStore } from "vuex";

// 主模块汇总其他所有模块
export default createStore({
  // state: {},
  // getters: {},
  // actions: {},
  // mutations: {},
  modules: {},
});
```

3. 主模块暴露 store，在 main.ts 中应用

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";

createApp(App).use(store).mount("#app");
```

4. 定义分模块

```ts
// store/modules/counter.ts
export default {
  // 开启命名空间
  namespaced: true,
  // 定义数据
  state: {
    count: 0,
  },
  // 定义只读计算属性数据
  getters: {
    oddOrEven(state) {
      return state.count % 2 === 1 ? "奇数" : "偶数";
    },
  },
  // 定义包含异步操作方法
  actions: {
    increment({ commit }, val) {
      setTimeout(() => {
        commit("INCREMENT", val);
      }, 1000);
    },
  },
  // 定义对state数据进行直接更新的方法
  mutations: {
    INCREMENT(state, val) {
      state.count += val;
    },
    DECREMENT(state, val) {
      state.count -= val;
    },
  },
};
```

5. 分模块在主模块汇总

```ts
import { createStore } from "vuex";

import counter from "./modules/counter";

// 主模块汇总其他所有模块
export default createStore({
  // state: {},
  // getters: {},
  // actions: {},
  // mutations: {},
  modules: {
    counter,
  },
});
```

6. 组件通过 $store 使用

```vue
<p>
  count: {{ $store.state.counter.count }}, count is
  {{ $store.getters["counter/oddOrEven"] }}
</p>
<button @click="$store.dispatch('counter/increment', 1)">+</button>
<button @click="$store.commit('counter/DECREMENT', 1)">-</button>
```

7. 组件通过 mapXxx 函数使用

- 首先将数据和方法映射到组件内

```js
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState("counter", ["count"]),
    ...mapGetters("counter", ["oddOrEven"]),
  },
  methods: {
    ...mapActions("counter", ["increment"]),
    ...mapMutations("counter", ["DECREMENT"]),
  },
};
```

- 组件在使用

```vue
<p>
  count: {{ count }}, count is
  {{ oddOrEven }}
</p>
<button @click="increment(1)">+</button>
<button @click="DECREMENT(1)">-</button>
```

8. 给 Vuex 添加类型

- 解决引入 vuex 库报错

```ts
// vuex.d.ts
// https://github.com/vuejs/vuex/issues/2213#issuecomment-1592267216
declare module "vuex" {
  export * from "vuex/types/index.d.ts";
  export * from "vuex/types/helpers.d.ts";
  export * from "vuex/types/logger.d.ts";
  export * from "vuex/types/vue.d.ts";
}
```

- 解决组件使用 $store 报错

```ts
// store/types.ts
export interface Counter {
  count: number;
}

export interface RootState {
  counter: Counter;
}
```

```ts
// vue.d.ts
import type { Store } from "vuex";
import type { RootState } from "./store/types";

declare module "@vue/runtime-core" {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    // State 是整个Vuex管理的所有state类型
    /*
      {
        counter: {
          count: number
        },
        // user: {
        //   token: "",
        //   username: ''
        // }
      }
    */
    $store: Store<RootState>;
  }
}
```

- 解决 Vuex 分模块报错

```ts
import type { ActionContext } from "vuex";
import type { Counter, RootState } from "../types";

export default {
  // 开启命名空间
  namespaced: true,
  // 定义数据
  state: {
    count: 0,
  },
  // 定义只读计算属性数据
  getters: {
    oddOrEven(state: Counter) {
      return state.count % 2 === 1 ? "奇数" : "偶数";
    },
  },
  // 定义包含异步操作方法
  actions: {
    increment({ commit }: ActionContext<Counter, RootState>, val: number) {
      setTimeout(() => {
        commit("INCREMENT", val);
      }, 1000);
    },
  },
  // 定义对state数据进行直接更新的方法
  mutations: {
    INCREMENT(state: Counter, val: number) {
      state.count += val;
    },
    DECREMENT(state: Counter, val: number) {
      state.count -= val;
    },
  },
};
```
