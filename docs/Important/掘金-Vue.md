# Vue

### Vue3.0 为什么要用 proxy？

在 Vue2 中， 0bject.defineProperty 会改变原始数据，而 Proxy 是创建对象的虚拟表示，并提供 set 、get 和 deleteProperty 等处理器，这些处理器可在访问或修改原始对象上的属性时进行拦截，有以下特点 ∶

- 不需用使用 `Vue.$set` 或 `Vue.$delete` 触发响应式。
- 全方位的数组变化检测，消除了 Vue2 无效的边界情况。
- 支持 Map，Set，WeakMap 和 WeakSet。

Proxy 实现的响应式原理与 Vue2 的实现原理相同，实现方式大同小异 ∶

- get 收集依赖
- Set、delete 等触发依赖
- 对于集合类型，就是对集合对象的方法做一层包装：原方法执行后执行依赖相关的收集或触发逻辑。

### 说说你对 slot 的理解？slot 使用场景有哪些

#### 一、slot 是什么

在 HTML 中 `slot` 元素 ，作为 `Web Components` 技术套件的一部分，是 Web 组件内的一个占位符

该占位符可以在后期使用自己的标记语言填充

举个栗子

```html
html复制代码<template id="element-details-template">
  <slot name="element-name">Slot template</slot>
</template>
<element-details>
  <span slot="element-name">1</span>
</element-details>
<element-details>
  <span slot="element-name">2</span>
</element-details>
```

`template`不会展示到页面中，需要用先获取它的引用，然后添加到 `DOM`中，

```javascript
javascript复制代码customElements.define(
  'element-details',
  class extends HTMLElement {
    constructor() {
      super()
      const template = document.getElementById('element-details-template').content
      const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
        template.cloneNode(true)
      )
    }
  }
)
```

在 `Vue`中的概念也是如此

`Slot` 艺名插槽，花名“占坑”，我们可以理解为 `solt`在组件模板中占好了位置，当使用该组件标签时候，组件标签里面的内容就会自动填坑（替换组件模板中 `slot`位置），作为承载分发内容的出口

#### 二、使用场景

通过插槽可以让用户可以拓展组件，去更好地复用组件和对其做定制化处理

如果父组件在使用到一个复用组件的时候，获取这个组件在不同的地方有少量的更改，如果去重写组件是一件不明智的事情

通过 `slot`插槽向组件内部指定位置传递内容，完成这个复用组件在不同场景的应用

比如布局组件、表格列、下拉选、弹框显示内容等

### 使用 vue 渲染大量数据时应该怎么优化？说下你的思路！

**分析**

企业级项目中渲染大量数据的情况比较常见，因此这是一道非常好的综合实践题目。

**回答**

1. 在大型企业级项目中经常需要渲染大量数据，此时很容易出现卡顿的情况。比如大数据量的表格、树
2. 处理时要根据情况做不同处理：

- 可以采取分页的方式获取，避免渲染大量数据
- [vue-virtual-scroller **(opens new window)**](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FAkryum%2Fvue-virtual-scroller)等虚拟滚动方案，只渲染视口范围内的数据
- 如果不需要更新，可以使用 v-once 方式只渲染一次
- 通过[v-memo **(opens new window)**](https://link.juejin.cn?target=https%3A%2F%2Fvuejs.org%2Fapi%2Fbuilt-in-directives.html%23v-memo)可以缓存结果，结合 `v-for`使用，避免数据变化时不必要的 `VNode`创建
- 可以采用懒加载方式，在用户需要的时候再加载数据，比如 `tree`组件子树的懒加载

1. 还是要看具体需求，首先从设计上避免大数据获取和渲染；实在需要这样做可以采用虚表的方式优化渲染；最后优化更新，如果不需要更新可以 `v-once`处理，需要更新可以 `v-memo`进一步优化大数据更新性能。其他可以采用的是交互方式优化，无线滚动、懒加载等方案

### scoped 样式穿透

> `scoped`虽然避免了组件间样式污染，但是很多时候我们需要修改组件中的某个样式，但是又不想去除 `scoped`属性

1. 使用 `/deep/`

```html
html复制代码<!-- Parent -->
<template>
  <div class="wrap">
    <Child />
  </div>
</template>

<style lang="scss" scoped>
  .wrap /deep/ .box {
    background: red;
  }
</style>

<!-- Child -->
<template>
  <div class="box"></div>
</template>
```

1. 使用两个 `style`标签

```html
html复制代码<!-- Parent -->
<template>
  <div class="wrap">
    <Child />
  </div>
</template>

<style lang="scss" scoped>
  /* 其他样式 */
</style>
<style lang="scss">
  .wrap .box {
    background: red;
  }
</style>

<!-- Child -->
<template>
  <div class="box"></div>
</template>
```

### Vue 中 v-html 会导致哪些问题

- 可能会导致 `xss` 攻击
- `v-html` 会替换掉标签内部的子元素

```javascript
javascript复制代码let template = require('vue-template-compiler');
let r = template.compile(`<div v-html="'<span>hello</span>'"></div>`)

// with(this){return _c('div',{domProps: {"innerHTML":_s('<span>hello</span>')}})}
console.log(r.render);

// _c 定义在core/instance/render.js
// _s 定义在core/instance/render-helpers/index,js
if (key === 'textContent' || key === 'innerHTML') {
    if (vnode.children) vnode.children.length = 0
    if (cur === oldProps[key]) continue // #6601 work around Chrome version <= 55 bug where single textNode // replaced by innerHTML/textContent retains its parentNode property
    if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0])
    }
}
```

### 如果让你从零开始写一个 vuex，说说你的思路

**思路分析**

这个题目很有难度，首先思考 `vuex`解决的问题：存储用户全局状态并提供管理状态 API。

- `vuex`需求分析
- 如何实现这些需求

**回答范例**

1. 官方说 `vuex`是一个状态管理模式和库，并确保这些状态以可预期的方式变更。可见要实现一个 `vuex`

- 要实现一个 `Store`存储全局状态
- 要提供修改状态所需 API：`commit(type, payload), dispatch(type, payload)`

1. 实现 `Store`时，可以定义 `Store`类，构造函数接收选项 `options`，设置属性 `state`对外暴露状态，提供 `commit`和 `dispatch`修改属性 `state`。这里需要设置 `state`为响应式对象，同时将 `Store`定义为一个 `Vue`插件
2. `commit(type, payload)`方法中可以获取用户传入 `mutations`并执行它，这样可以按用户提供的方法修改状态。 `dispatch(type, payload)`类似，但需要注意它可能是异步的，需要返回一个 `Promise`给用户以处理异步结果

**实践**

`Store`的实现：

```javascript
javascript复制代码class Store {
    constructor(options) {
        this.state = reactive(options.state)
        this.options = options
    }
    commit(type, payload) {
        this.options.mutations[type].call(this, this.state, payload)
    }
}
```

**vuex 简易版**

```javascript
javascript复制代码
/**
 * 1 实现插件，挂载$store
 * 2 实现store
 */

let Vue

class Store {
  constructor(options) {
    // state响应式处理
    // 外部访问： this.$store.state.***
    // 第一种写法
    // this.state = new Vue({
    //   data: options.state
    // })

    // 第二种写法：防止外界直接接触内部vue实例，防止外部强行变更
    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    })

    this._mutations = options.mutations
    this._actions = options.actions
    this.getters = {}
    options.getters && this.handleGetters(options.getters)

    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state() {
    return this._vm._data.$$state
  }

  set state(val) {
    return new Error('Please use replaceState to reset state')
  }

  handleGetters(getters) {
    Object.keys(getters).map((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](this.state)
      })
    })
  }

  commit(type, payload) {
    let entry = this._mutations[type]
    if (!entry) {
      return new Error(`${type} is not defined`)
    }

    entry(this.state, payload)
  }

  dispatch(type, payload) {
    let entry = this._actions[type]
    if (!entry) {
      return new Error(`${type} is not defined`)
    }

    entry(this, payload)
  }
}

const install = (_Vue) => {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default { Store, install }
```

验证方式

```javascript
javascript复制代码import Vue from 'vue'
import Vuex from './vuex'
// this.$store
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    // state从哪里来的
    add (state) {
      state.counter++
    }
  },
  getters: {
    doubleCounter (state) {
      return state.counter * 2
    }
  },
  actions: {
    add ({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  },
  modules: {
  }
})
```

参考 [前端进阶面试题详细解答](https://link.juejin.cn?target=https%3A%2F%2Fthoughts.teambition.com%2Fshare%2F638dd9f64d2d2a0042e50fb4)

### Vue 与 Angular 以及 React 的区别？

#### Vue 与 AngularJS 的区别

- `Angular`采用 `TypeScript`开发, 而 `Vue`可以使用 `javascript`也可以使用 `TypeScript`
- `AngularJS`依赖对数据做脏检查，所以 `Watcher`越多越慢；`Vue.js`使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。
- `AngularJS`社区完善, `Vue`的学习成本较小

#### Vue 与 React 的区别

**相同点：**

1. `Virtual DOM`。其中最大的一个相似之处就是都使用了 `Virtual DOM`。(当然 `Vue`是在 `Vue2.x`才引用的)也就是能让我们通过操作数据的方式来改变真实的 `DOM`状态。因为其实 `Virtual DOM`的本质就是一个 `JS`对象，它保存了对真实 `DOM`的所有描述，是真实 `DOM`的一个映射，所以当我们在进行频繁更新元素的时候，改变这个 `JS`对象的开销远比直接改变真实 `DOM`要小得多。
2. 组件化的开发思想。第二点来说就是它们都提倡这种组件化的开发思想，也就是建议将应用分拆成一个个功能明确的模块，再将这些模块整合在一起以满足我们的业务需求。
3. `Props`。`Vue`和 `React`中都有 `props`的概念，允许父组件向子组件传递数据。
4. 构建工具、Chrome 插件、配套框架。还有就是它们的构建工具以及 Chrome 插件、配套框架都很完善。比如构建工具，`React`中可以使用 `CRA`，`Vue`中可以使用对应的脚手架 `vue-cli`。对于配套框架 `Vue`中有 `vuex、vue-router`，`React`中有 `react-router、redux`。

**不同点**

1. 模版的编写。最大的不同就是模版的编写，`Vue`鼓励你去写近似常规 `HTML`的模板，`React`推荐你使用 `JSX`去书写。
2. 状态管理与对象属性。在 `React`中，应用的状态是比较关键的概念，也就是 `state`对象，它允许你使用 `setState`去更新状态。但是在 `Vue`中，`state`对象并不是必须的，数据是由 `data`属性在 `Vue`对象中进行管理。
3. 虚拟 `DOM`的处理方式不同。`Vue`中的虚拟 `DOM`控制了颗粒度，组件层面走 `watcher`通知，而组件内部走 `vdom`做 `diff`，这样，既不会有太多 `watcher`，也不会让 `vdom`的规模过大。而 `React`走了类似于 `CPU`调度的逻辑，把 `vdom`这棵树，微观上变成了链表，然后利用浏览器的空闲时间来做 `diff`

### Vue 项目中你是如何解决跨域的呢

#### 一、跨域是什么

跨域本质是浏览器基于**同源策略**的一种安全手段

同源策略（Sameoriginpolicy），是一种约定，它是浏览器最核心也最基本的安全功能

所谓同源（即指在同一个域）具有以下三个相同点

- 协议相同（protocol）
- 主机相同（host）
- 端口相同（port）

反之非同源请求，也就是协议、端口、主机其中一项不相同的时候，这时候就会产生跨域

> 一定要注意跨域是浏览器的限制，你用抓包工具抓取接口数据，是可以看到接口已经把数据返回回来了，只是浏览器的限制，你获取不到数据。用 postman 请求接口能够请求到数据。这些再次印证了跨域是浏览器的限制。

### Class 与 Style 如何动态绑定

`Class` 可以通过对象语法和数组语法进行动态绑定

对象语法：

```javascript
javascript复制代码<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>

data: {
  isActive: true,
  hasError: false
}
```

数组语法：

```javascript
javascript复制代码<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

`Style` 也可以通过对象语法和数组语法进行动态绑定

对象语法：

```javascript
javascript复制代码<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}
```

数组语法：

```javascript
javascript复制代码<div v-bind:style="[styleColor, styleSize]"></div>

data: {
  styleColor: {
     color: 'red'
   },
  styleSize:{
     fontSize:'23px'
  }
}
```

### 了解 history 有哪些方法吗？说下它们的区别

> `history` 这个对象在 `html5`的时候新加入两个 `api` `history.pushState()` 和 `history.repalceState()` 这两个 `API`可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录。

从参数上来说：

```javascript
javascript复制代码window.history.pushState(state, title, url)
//state：需要保存的数据，这个数据在触发popstate事件时，可以在event.state里获取
//title：标题，基本没用，一般传null
//url：设定新的历史纪录的url。新的url与当前url的origin必须是一样的，否则会抛出错误。url可以时绝对路径，也可以是相对路径。
//如 当前url是 https://www.baidu.com/a/,执行history.pushState(null, null, './qq/')，则变成 https://www.baidu.com/a/qq/，
//执行history.pushState(null, null, '/qq/')，则变成 https://www.baidu.com/qq/

window.history.replaceState(state, title, url)
//与pushState 基本相同，但她是修改当前历史纪录，而 pushState 是创建新的历史纪录
```

另外还有：

- `window.history.back()` 后退
- `window.history.forward()`前进
- `window.history.go(1)` 前进或者后退几步

从触发事件的监听上来说：

- `pushState()`和 `replaceState()`不能被 `popstate`事件所监听
- 而后面三者可以，且用户点击浏览器前进后退键时也可以

### 在 Vue 中使用插件的步骤

- 采用 `ES6`的 `import ... from ...`语法或 `CommonJS`的 `require()`方法引入插件
- 使用全局方法 `Vue.use( plugin )`使用插件,可以传入一个选项对象 `Vue.use(MyPlugin, { someOption: true })`

### `$route`和 `$router`的区别

- `$route`是“路由信息对象”，包括 `path`，`params`，`hash`，`query`，`fullPath`，`matched`，`name`等路由信息参数。
- 而 `$router`是“路由实例”对象包括了路由的跳转方法，钩子函数等

### 为什么要使用异步组件

1. 节省打包出的结果，异步组件分开打包，采用 `jsonp`的方式进行加载，有效解决文件过大的问题。
2. 核心就是包组件定义变成一个函数，依赖 `import()` 语法，可以实现文件的分割加载。

```javascript
javascript复制代码components: {
  AddCustomerSchedule: (resolve) => import('../components/AddCustomer') // require([])
}
```

原理

```javascript
javascript复制代码export function ( Ctor: Class<Component> | Function | Object | void, data: ?VNodeData, context: Component, children: ?Array<VNode>, tag?: string ): VNode | Array<VNode> | void {
    // async component
    let asyncFactory
    if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor) // 默认调用此函数时返回 undefiend
        // 第二次渲染时Ctor不为undefined
        if (Ctor === undefined) {
            return createAsyncPlaceholder( // 渲染占位符 空虚拟节点
                asyncFactory,
                data,
                context,
                children,
                tag
            )
        }
    }
}
function resolveAsyncComponent ( factory: Function, baseCtor: Class<Component> ): Class<Component> | void {
    if (isDef(factory.resolved)) {
        // 3.在次渲染时可以拿到获取的最新组件
        return factory.resolved
    }
    const resolve = once((res: Object | Class<Component>) => {
        factory.resolved = ensureCtor(res, baseCtor)
        if (!sync) {
            forceRender(true) //2. 强制更新视图重新渲染
        } else {
            owners.length = 0
        }
    })
    const reject = once(reason => {
        if (isDef(factory.errorComp)) {
            factory.error = true forceRender(true)
        }
    })
    const res = factory(resolve, reject)// 1.将resolve方法和reject方法传入，用户调用 resolve方法后
    sync = false
    return factory.resolved
}
```

### 函数式组件优势和原理

**函数组件的特点**

1. 函数式组件需要在声明组件是指定 `functional:true`
2. 不需要实例化，所以没有 `this`,`this`通过 `render`函数的第二个参数 `context`来代替
3. 没有生命周期钩子函数，不能使用计算属性，`watch`
4. 不能通过 `$emit` 对外暴露事件，调用事件只能通过 `context.listeners.click`的方式调用外部传入的事件
5. 因为函数式组件是没有实例化的，所以在外部通过 `ref`去引用组件时，实际引用的是 `HTMLElement`
6. 函数式组件的 `props`可以不用显示声明，所以没有在 `props`里面声明的属性都会被自动隐式解析为 `prop`,而普通组件所有未声明的属性都解析到 `$attrs`里面，并自动挂载到组件根元素上面(可以通过 `inheritAttrs`属性禁止)

**优点**

1. 由于函数式组件不需要实例化，无状态，没有生命周期，所以渲染性能要好于普通组件
2. 函数式组件结构比较简单，代码结构更清晰

**使用场景：**

- 一个简单的展示组件，作为容器组件使用 比如 `router-view` 就是一个函数式组件
- “高阶组件”——用于接收一个组件作为参数，返回一个被包装过的组件

例子

```javascript
javascript复制代码Vue.component('functional', {
  // 构造函数产生虚拟节点的
  functional: true, // 函数式组件 // data={attrs:{}}
  render(h) {
    return h('div', 'test')
  }
})
const vm = new Vue({
  el: '#app'
})
```

源码相关

```javascript
javascript复制代码 // functional component
if (isTrue(Ctor.options.functional)) {
  // 带有functional的属性的就是函数式组件
  return createFunctionalComponent(Ctor, propsData, data, context, children)
}

// extract listeners, since these needs to be treated as
// child component listeners instead of DOM listeners
const listeners = data.on // 处理事件
// replace with listeners with .native modifier
// so it gets processed during parent component patch.
data.on = data.nativeOn // 处理原生事件

// install component management hooks onto the placeholder node
installComponentHooks(data) // 安装组件相关钩子 （函数式组件没有调用此方法，从而性能高于普通组件）
```

## Vue.set 的实现原理

- 给对应和数组本身都增加了 `dep`属性
- 当给对象新增不存在的属性则触发对象依赖的 `watcher`去更新
- 当修改数组索引时，我们调用数组本身的 `splice`去更新数组（数组的响应式原理就是重新了 `splice`等方法，调用 `splice`就会触发视图更新）

**基本使用**

> 以下方法调用会改变原始数组：`push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()`,`Vue.set( target, key, value )`

- 调用方法：

  ```
  Vue.set(target, key, value )
  ```

  - `target`：要更改的数据源(可以是对象或者数组)
  - `key`：要更改的具体数据
  - `value` ：重新赋的值

```html
html复制代码
<div id="app">{{user.name}} {{user.age}}</div>
<div id="app"></div>
<script>
  // 1. 依赖收集的特点：给每个属性都增加一个dep属性，dep属性会进行收集，收集的是watcher
  // 2. vue会给每个对象也增加一个dep属性
  const vm = new Vue({
    el: '#app',
    data: {
      // vm._data
      user: { name: 'poetry' }
    }
  })
  // 对象的话：调用defineReactive在user对象上定义一个age属性，增加到响应式数据中，触发对象本身的watcher，ob.dep.notify()更新
  // 如果是数组 通过调用 splice方法，触发视图更新
  vm.$set(vm.user, 'age', 20) // 不能给根属性添加，因为给根添加属性 性能消耗太大，需要做很多处理

  // 修改肯定是同步的 -> 更新都是一步的  queuewatcher
</script>
```

**相关源码**

```javascript
javascript复制代码 // src/core/observer/index.js 44
export class Observer {
  // new Observer(value)
  value: any
  dep: Dep
  vmCount: number // number of vms that have this object as root $data

  constructor(value: any) {
    this.value = value
    this.dep = new Dep() // 给所有对象类型增加dep属性
  }
}
javascript复制代码 // src/core/observer/index.js 201
export function set(target: Array<any> | Object, key: any, val: any): any {
  // 1.是开发环境 target 没定义或者是基础类型则报错
  if (process.env.NODE_ENV !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn(
      `Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`
    )
  }
  // 2.如果是数组 Vue.set(array,1,100); 调用我们重写的splice方法 (这样可以更新视图)
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key)
    // 利用数组的splice变异方法触发响应式
    target.splice(key, 1, val)
    return val
  }
  // 3.如果是对象本身的属性，则直接添加即可
  if (key in target && !(key in Object.prototype)) {
    target[key] = val // 直接修改属性值
    return val
  }
  // 4.如果是Vue实例 或 根数据data时 报错,（更新_data 无意义）
  const ob = (target: any).__ob__
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' &&
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
          'at runtime - declare it upfront in the data option.'
      )
    return val
  }
  // 5.如果不是响应式的也不需要将其定义成响应式属性
  if (!ob) {
    target[key] = val
    return val
  }
  // 6.将属性定义成响应式的
  defineReactive(ob.value, key, val)
  // 通知视图更新
  ob.dep.notify()
  return val
}
```

**我们阅读以上源码可知，vm.$set 的实现原理是：**

- **如果目标是数组** ，直接使用数组的 `splice` 方法触发相应式；
- **如果目标是对象** ，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 `defineReactive` 方法进行响应式处理（ `defineReactive` 方法就是 `Vue` 在初始化对象时，给对象属性采用 `Object.defineProperty` 动态添加 `getter` 和 `setter` 的功能所调用的方法）

### Vue 为什么没有类似于 React 中 shouldComponentUpdate 的生命周期

- 考点: `Vue`的变化侦测原理
- 前置知识: 依赖收集、虚拟 `DOM`、响应式系统

> 根本原因是 `Vue`与 `React`的变化侦测方式有所不同

- 当 React 知道发生变化后，会使用 `Virtual Dom Diff`进行差异检测，但是很多组件实际上是肯定不会发生变化的，这个时候需要 `shouldComponentUpdate` 进行手动操作来减少 `diff`，从而提高程序整体的性能
- `Vue`在一开始就知道那个组件发生了变化，不需要手动控制 `diff`，而组件内部采用的 `diff`方式实际上是可以引入类似于 `shouldComponentUpdate`相关生命周期的，但是通常合理大小的组件不会有过量的 diff，手动优化的价值有限，因此目前 `Vue`并没有考虑引入 `shouldComponentUpdate`这种手动优化的生命周期

### vue-router 中如何保护路由

**分析**

路由保护在应用开发过程中非常重要，几乎每个应用都要做各种路由权限管理，因此相当考察使用者基本功。

**体验**

全局守卫：

```javascript
javascript复制代码const router = createRouter({ ... })

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  return false
})
```

路由独享守卫：

```javascript
javascript复制代码const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  },
]
```

组件内的守卫：

```javascript
javascript复制代码const UserDetails = {
  template: `...`,
  beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
  },
  beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
  },
}
```

**回答**

- `vue-router`中保护路由的方法叫做路由守卫，主要用来通过跳转或取消的方式守卫导航。
- 路由守卫有三个级别：`全局`、`路由独享`、`组件级`。影响范围由大到小，例如全局的 `router.beforeEach()`，可以注册一个全局前置守卫，每次路由导航都会经过这个守卫，因此在其内部可以加入控制逻辑决定用户是否可以导航到目标路由；在路由注册的时候可以加入单路由独享的守卫，例如 `beforeEnter`，守卫只在进入路由时触发，因此只会影响这个路由，控制更精确；我们还可以为路由组件添加守卫配置，例如 `beforeRouteEnter`，会在渲染该组件的对应路由被验证前调用，控制的范围更精确了。
- 用户的任何导航行为都会走 `navigate`方法，内部有个 `guards`队列按顺序执行用户注册的守卫钩子函数，如果没有通过验证逻辑则会取消原有的导航。

**原理**

`runGuardQueue(guards)`链式的执行用户在各级别注册的守卫钩子函数，通过则继续下一个级别的守卫，不通过进入 `catch`流程取消原本导航

```javascript
javascript复制代码 // 源码
runGuardQueue(guards)
  .then(() => {
    // check global guards beforeEach
    guards = []
    for (const guard of beforeGuards.list()) {
      guards.push(guardToPromiseFn(guard, to, from))
    }
    guards.push(canceledNavigationCheck)

    return runGuardQueue(guards)
  })
  .then(() => {
    // check in components beforeRouteUpdate
    guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from)

    for (const record of updatingRecords) {
      record.updateGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from))
      })
    }
    guards.push(canceledNavigationCheck)

    // run the queue of per route beforeEnter guards
    return runGuardQueue(guards)
  })
  .then(() => {
    // check the route beforeEnter
    guards = []
    for (const record of to.matched) {
      // do not trigger beforeEnter on reused views
      if (record.beforeEnter && !from.matched.includes(record)) {
        if (isArray(record.beforeEnter)) {
          for (const beforeEnter of record.beforeEnter)
            guards.push(guardToPromiseFn(beforeEnter, to, from))
        } else {
          guards.push(guardToPromiseFn(record.beforeEnter, to, from))
        }
      }
    }
    guards.push(canceledNavigationCheck)

    // run the queue of per route beforeEnter guards
    return runGuardQueue(guards)
  })
  .then(() => {
    // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>

    // clear existing enterCallbacks, these are added by extractComponentsGuards
    to.matched.forEach((record) => (record.enterCallbacks = {}))

    // check in-component beforeRouteEnter
    guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from)
    guards.push(canceledNavigationCheck)

    // run the queue of per route beforeEnter guards
    return runGuardQueue(guards)
  })
  .then(() => {
    // check global guards beforeResolve
    guards = []
    for (const guard of beforeResolveGuards.list()) {
      guards.push(guardToPromiseFn(guard, to, from))
    }
    guards.push(canceledNavigationCheck)

    return runGuardQueue(guards)
  })
  // catch any navigation canceled
  .catch((err) =>
    isNavigationFailure(err, ErrorTypes.NAVIGATION_CANCELLED) ? err : Promise.reject(err)
  )
```

[源码位置(opens new window)](https://link.juejin.cn?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Frouter%2Fblob%2FHEAD%2Fpackages%2Frouter%2Fsrc%2Frouter.ts%23L808-L809)

### Vue-router 路由钩子在生命周期的体现

一、Vue-Router 导航守卫

有的时候，需要通过路由来进行一些操作，比如最常见的登录权限验证，当用户满足条件时，才让其进入导航，否则就取消跳转，并跳到登录页面让其登录。 为此有很多种方法可以植入路由的导航过程：全局的，单个路由独享的，或者组件级的

1. 全局路由钩子

vue-router 全局有三个路由钩子;

- router.beforeEach 全局前置守卫 进入路由之前
- router.beforeResolve 全局解析守卫（2.5.0+）在 beforeRouteEnter 调用之后调用
- router.afterEach 全局后置钩子 进入路由之后

具体使用 ∶

- beforeEach（判断是否登录了，没登录就跳转到登录页）

```javascript
javascript复制代码router.beforeEach((to, from, next) => {
  let ifInfo = Vue.prototype.$common.getSession('userData') // 判断是否登录的存储信息
  if (!ifInfo) {
    // sessionStorage里没有储存user信息
    if (to.path == '/') {
      //如果是登录页面路径，就直接next()
      next()
    } else {
      //不然就跳转到登录
      Message.warning('请重新登录！')
      window.location.href = Vue.prototype.$loginUrl
    }
  } else {
    return next()
  }
})
```

- afterEach （跳转之后滚动条回到顶部）

```javascript
javascript复制代码router.afterEach((to, from) => {
  // 跳转之后滚动条回到顶部
  window.scrollTo(0, 0)
})
```

1. 单个路由独享钩子

**beforeEnter** 如果不想全局配置守卫的话，可以为某些路由单独配置守卫，有三个参数 ∶ to、from、next

```javascript
javascript复制代码export default [
    {
        path: '/',
        name: 'login',
        component: login,
        beforeEnter: (to, from, next) => {
            console.log('即将进入登录页面')
            next()
        }
    }
]
```

1. 组件内钩子

beforeRouteUpdate、beforeRouteEnter、beforeRouteLeave

这三个钩子都有三个参数 ∶to、from、next

- beforeRouteEnter∶ 进入组件前触发
- beforeRouteUpdate∶ 当前地址改变并且改组件被复用时触发，举例来说，带有动态参数的路径 foo/∶id，在 /foo/1 和 /foo/2 之间跳转的时候，由于会渲染同样的 foa 组件，这个钩子在这种情况下就会被调用
- beforeRouteLeave∶ 离开组件被调用

注意点，beforeRouteEnter 组件内还访问不到 this，因为该守卫执行前组件实例还没有被创建，需要传一个回调给 next 来访问，例如：

```javascript
javascript复制代码beforeRouteEnter(to, from, next) {
    next(target => {
        if (from.path == '/classProcess') {
            target.isFromProcess = true
        }
    })
}
```

二、Vue 路由钩子在生命周期函数的体现

1. 完整的路由导航解析流程（不包括其他生命周期）

- 触发进入其他路由。
- 调用要离开路由的组件守卫 beforeRouteLeave
- 调用局前置守卫 ∶ beforeEach
- 在重用的组件里调用 beforeRouteUpdate
- 调用路由独享守卫 beforeEnter。
- 解析异步路由组件。
- 在将要进入的路由组件中调用 beforeRouteEnter
- 调用全局解析守卫 beforeResolve
- 导航被确认。
- 调用全局后置钩子的 afterEach 钩子。
- 触发 DOM 更新（mounted）。
- 执行 beforeRouteEnter 守卫中传给 next 的回调函数

1. 触发钩子的完整顺序

路由导航、keep-alive、和组件生命周期钩子结合起来的，触发顺序，假设是从 a 组件离开，第一次进入 b 组件 ∶

- beforeRouteLeave：路由组件的组件离开路由前钩子，可取消路由离开。
- beforeEach：路由全局前置守卫，可用于登录验证、全局路由 loading 等。
- beforeEnter：路由独享守卫
- beforeRouteEnter：路由组件的组件进入路由前钩子。
- beforeResolve：路由全局解析守卫
- afterEach：路由全局后置钩子
- beforeCreate：组件生命周期，不能访问 tAis。
- created;组件生命周期，可以访问 tAis，不能访问 dom。
- beforeMount：组件生命周期
- deactivated：离开缓存组件 a，或者触发 a 的 beforeDestroy 和 destroyed 组件销毁钩子。
- mounted：访问/操作 dom。
- activated：进入缓存组件，进入 a 的嵌套子组件（如果有的话）。
- 执行 beforeRouteEnter 回调函数 next。

1. 导航行为被触发到导航完成的整个过程

- 导航行为被触发，此时导航未被确认。
- 在失活的组件里调用离开守卫 beforeRouteLeave。
- 调用全局的 beforeEach 守卫。
- 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
- 在路由配置里调用 beforeEnteY。
- 解析异步路由组件（如果有）。
- 在被激活的组件里调用 beforeRouteEnter。
- 调用全局的 beforeResolve 守卫（2.5+），标示解析阶段完成。
- 导航被确认。
- 调用全局的 afterEach 钩子。
- 非重用组件，开始组件实例的生命周期：beforeCreate&created、beforeMount&mounted
- 触发 DOM 更新。
- 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
- 导航完成

### Vue-router 导航守卫有哪些

- 全局前置/钩子：beforeEach、beforeResolve、afterEach
- 路由独享的守卫：beforeEnter
- 组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

### Vue 的 diff 算法详细分析

**1. 是什么**

`diff` 算法是一种通过同层的树节点进行比较的高效算法

其有两个特点：

- 比较只会在同层级进行, 不会跨层级比较
- 在 diff 比较的过程中，循环从两边向中间比较

`diff` 算法在很多场景下都有应用，在 `vue` 中，作用于虚拟 `dom` 渲染成真实 `dom` 的新旧 `VNode` 节点比较

**2. 比较方式**

`diff`整体策略为：深度优先，同层比较

1. 比较只会在同层级进行, 不会跨层级比较

![img](%E6%8E%98%E9%87%91-Vue/6db40e34e3ca442d9a5dd0917b0e61c3tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

1. 比较的过程中，循环从两边向中间收拢

![img](%E6%8E%98%E9%87%91-Vue/f2f36643d8b84b97a25fcf49ec42956btplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

下面举个 `vue`通过 `diff`算法更新的例子：

新旧 `VNode`节点如下图所示：

![img](%E6%8E%98%E9%87%91-Vue/1787bafd86d24586bc05a2607bd7cd8ftplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

第一次循环后，发现旧节点 D 与新节点 D 相同，直接复用旧节点 D 作为 `diff`后的第一个真实节点，同时旧节点 `endIndex`移动到 C，新节点的 `startIndex` 移动到了 C

![img](%E6%8E%98%E9%87%91-Vue/136cfa792cd64daebc60b7586dd2c815tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

第二次循环后，同样是旧节点的末尾和新节点的开头(都是 C)相同，同理，`diff` 后创建了 C 的真实节点插入到第一次创建的 D 节点后面。同时旧节点的 `endIndex` 移动到了 B，新节点的 `startIndex` 移动到了 E

![img](%E6%8E%98%E9%87%91-Vue/1336625195f1472ca7360f6f54a82c28tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

第三次循环中，发现 E 没有找到，这时候只能直接创建新的真实节点 E，插入到第二次创建的 C 节点之后。同时新节点的 `startIndex` 移动到了 A。旧节点的 `startIndex` 和 `endIndex` 都保持不动

![img](%E6%8E%98%E9%87%91-Vue/d80e4cd2bad14af2801713ddb9e98094tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

第四次循环中，发现了新旧节点的开头(都是 A)相同，于是 `diff` 后创建了 A 的真实节点，插入到前一次创建的 E 节点后面。同时旧节点的 `startIndex` 移动到了 B，新节点的 `startIndex` 移动到了 B

![img](%E6%8E%98%E9%87%91-Vue/1c1b78ece7b64c44812d7e0362389928tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

第五次循环中，情形同第四次循环一样，因此 `diff` 后创建了 B 真实节点 插入到前一次创建的 A 节点后面。同时旧节点的 `startIndex`移动到了 C，新节点的 startIndex 移动到了 F

![img](%E6%8E%98%E9%87%91-Vue/b882b3d85eb24d85b7570faa587373d3tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

新节点的 `startIndex` 已经大于 `endIndex` 了，需要创建 `newStartIdx` 和 `newEndIdx` 之间的所有节点，也就是节点 F，直接创建 F 节点对应的真实节点放到 B 节点后面

![img](%E6%8E%98%E9%87%91-Vue/f7987b4d0f7a47d5b46ac3ba59160a79tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

**3. 原理分析**

当数据发生改变时，`set`方法会调用 `Dep.notify`通知所有订阅者 `Watcher`，订阅者就会调用 `patch`给真实的 `DOM`打补丁，更新相应的视图

源码位置：`src/core/vdom/patch.js`

```javascript
javascript复制代码function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) { // 没有新节点，直接执行destory钩子函数
        if (isDef(oldVnode)) invokeDestroyHook(oldVnode)
        return
    }

    let isInitialPatch = false
    const insertedVnodeQueue = []

    if (isUndef(oldVnode)) {
        isInitialPatch = true
        createElm(vnode, insertedVnodeQueue) // 没有旧节点，直接用新节点生成dom元素
    } else {
        const isRealElement = isDef(oldVnode.nodeType)
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
            // 判断旧节点和新节点自身一样，一致执行patchVnode
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)
        } else {
            // 否则直接销毁及旧节点，根据新节点生成dom元素
            if (isRealElement) {

                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                    oldVnode.removeAttribute(SSR_ATTR)
                    hydrating = true
                }
                if (isTrue(hydrating)) {
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                        invokeInsertHook(vnode, insertedVnodeQueue, true)
                        return oldVnode
                    }
                }
                oldVnode = emptyNodeAt(oldVnode)
            }
            return vnode.elm
        }
    }
}
```

`patch`函数前两个参数位为 `oldVnode` 和 `Vnode` ，分别代表新的节点和之前的旧节点，主要做了四个判断：

- 没有新节点，直接触发旧节点的 `destory`钩子
- 没有旧节点，说明是页面刚开始初始化的时候，此时，根本不需要比较了，直接全是新建，所以只调用 `createElm`
- 旧节点和新节点自身一样，通过 `sameVnode` 判断节点是否一样，一样时，直接调用 `patchVnode`去处理这两个节点
- 旧节点和新节点自身不一样，当两个节点不一样的时候，直接创建新节点，删除旧节点

下面主要讲的是 `patchVnode`部分

```javascript
javascript复制代码function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    // 如果新旧节点一致，什么都不做
    if (oldVnode === vnode) {
      return
    }

    // 让vnode.el引用到现在的真实dom，当el修改时，vnode.el会同步变化
    const elm = vnode.elm = oldVnode.elm

    // 异步占位符
    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
      } else {
        vnode.isAsyncPlaceholder = true
      }
      return
    }
    // 如果新旧都是静态节点，并且具有相同的key
    // 当vnode是克隆节点或是v-once指令控制的节点时，只需要把oldVnode.elm和oldVnode.child都复制到vnode上
    // 也不用再有其他操作
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance
      return
    }

    let i
    const data = vnode.data
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode)
    }

    const oldCh = oldVnode.children
    const ch = vnode.children
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
      if (isDef(i = data.hook) && isDef(i = i.update)) i(oldVnode, vnode)
    }
    // 如果vnode不是文本节点或者注释节点
    if (isUndef(vnode.text)) {
      // 并且都有子节点
      if (isDef(oldCh) && isDef(ch)) {
        // 并且子节点不完全一致，则调用updateChildren
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)

        // 如果只有新的vnode有子节点
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
        // elm已经引用了老的dom节点，在老的dom节点上添加子节点
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)

        // 如果新vnode没有子节点，而vnode有子节点，直接删除老的oldCh
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1)

        // 如果老节点是文本节点
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '')
      }

      // 如果新vnode和老vnode是文本节点或注释节点
      // 但是vnode.text != oldVnode.text时，只需要更新vnode.elm的文本内容就可以
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text)
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) i(oldVnode, vnode)
    }
  }
```

**`patchVnode`主要做了几个判断：**

- 新节点是否是文本节点，如果是，则直接更新 `dom`的文本内容为新节点的文本内容
- 新节点和旧节点如果都有子节点，则处理比较更新子节点
- 只有新节点有子节点，旧节点没有，那么不用比较了，所有节点都是全新的，所以直接全部新建就好了，新建是指创建出所有新 `DOM`，并且添加进父节点
- 只有旧节点有子节点而新节点没有，说明更新后的页面，旧节点全部都不见了，那么要做的，就是把所有的旧节点删除，也就是直接把 `DOM` 删除

子节点不完全一致，则调用 `updateChildren`

```javascript
javascript复制代码function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0 // 旧头索引
    let newStartIdx = 0 // 新头索引
    let oldEndIdx = oldCh.length - 1 // 旧尾索引
    let newEndIdx = newCh.length - 1 // 新尾索引
    let oldStartVnode = oldCh[0] // oldVnode的第一个child
    let oldEndVnode = oldCh[oldEndIdx] // oldVnode的最后一个child
    let newStartVnode = newCh[0] // newVnode的第一个child
    let newEndVnode = newCh[newEndIdx] // newVnode的最后一个child
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    const canMove = !removeOnly

    // 如果oldStartVnode和oldEndVnode重合，并且新的也都重合了，证明diff完了，循环结束
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      // 如果oldVnode的第一个child不存在
      if (isUndef(oldStartVnode)) {
        // oldStart索引右移
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left

      // 如果oldVnode的最后一个child不存在
      } else if (isUndef(oldEndVnode)) {
        // oldEnd索引左移
        oldEndVnode = oldCh[--oldEndIdx]

      // oldStartVnode和newStartVnode是同一个节点
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        // patch oldStartVnode和newStartVnode， 索引左移，继续循环
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]

      // oldEndVnode和newEndVnode是同一个节点
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        // patch oldEndVnode和newEndVnode，索引右移，继续循环
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]

      // oldStartVnode和newEndVnode是同一个节点
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        // patch oldStartVnode和newEndVnode
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
        // 如果removeOnly是false，则将oldStartVnode.eml移动到oldEndVnode.elm之后
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        // oldStart索引右移，newEnd索引左移
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]

      // 如果oldEndVnode和newStartVnode是同一个节点
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        // patch oldEndVnode和newStartVnode
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
        // 如果removeOnly是false，则将oldEndVnode.elm移动到oldStartVnode.elm之前
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        // oldEnd索引左移，newStart索引右移
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]

      // 如果都不匹配
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)

        // 尝试在oldChildren中寻找和newStartVnode的具有相同的key的Vnode
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)

        // 如果未找到，说明newStartVnode是一个新的节点
        if (isUndef(idxInOld)) { // New element
          // 创建一个新Vnode
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)

        // 如果找到了和newStartVnodej具有相同的key的Vnode，叫vnodeToMove
        } else {
          vnodeToMove = oldCh[idxInOld]
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !vnodeToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            )
          }

          // 比较两个具有相同的key的新节点是否是同一个节点
          //不设key，newCh和oldCh只会进行头尾两端的相互比较，设key后，除了头尾两端的比较外，还会从用key生成的对象oldKeyToIdx中查找匹配的节点，所以为节点设置key可以更高效的利用dom。
          if (sameVnode(vnodeToMove, newStartVnode)) {
            // patch vnodeToMove和newStartVnode
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue)
            // 清除
            oldCh[idxInOld] = undefined
            // 如果removeOnly是false，则将找到的和newStartVnodej具有相同的key的Vnode，叫vnodeToMove.elm
            // 移动到oldStartVnode.elm之前
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)

          // 如果key相同，但是节点不相同，则创建一个新的节点
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
          }
        }

        // 右移
        newStartVnode = newCh[++newStartIdx]
      }
    }
```

**`while`循环主要处理了以下五种情景：**

- 当新老 `VNode` 节点的 `start` 相同时，直接 `patchVnode` ，同时新老 `VNode` 节点的开始索引都加 1
- 当新老 `VNode` 节点的 `end`相同时，同样直接 `patchVnode` ，同时新老 `VNode` 节点的结束索引都减 1
- 当老 `VNode` 节点的 `start` 和新 `VNode` 节点的 `end` 相同时，这时候在 `patchVnode` 后，还需要将当前真实 `dom` 节点移动到 `oldEndVnode` 的后面，同时老 `VNode` 节点开始索引加 1，新 `VNode` 节点的结束索引减 1
- 当老 `VNode` 节点的 `end` 和新 `VNode` 节点的 `start` 相同时，这时候在 `patchVnode` 后，还需要将当前真实 `dom` 节点移动到 `oldStartVnode` 的前面，同时老 `VNode` 节点结束索引减 1，新 `VNode` 节点的开始索引加 1
- 如果都不满足以上四种情形，那说明没有相同的节点可以复用，则会分为以下两种情况：
  - 从旧的 `VNode` 为 `key` 值，对应 `index` 序列为 `value` 值的哈希表中找到与 `newStartVnode` 一致 `key` 的旧的 `VNode` 节点，再进行 `patchVnode`，同时将这个真实 `dom`移动到 `oldStartVnode` 对应的真实 `dom` 的前面
  - 调用 `createElm` 创建一个新的 `dom` 节点放到当前 `newStartIdx` 的位置

**小结**

- 当数据发生改变时，订阅者 `watcher`就会调用 `patch`给真实的 `DOM`打补丁
- 通过 `isSameVnode`进行判断，相同则调用 `patchVnode`方法
- ```
  patchVnode
  ```
  做了以下操作：

  - 找到对应的真实 `dom`，称为 `el`
  - 如果都有都有文本节点且不相等，将 `el`文本节点设置为 `Vnode`的文本节点
  - 如果 `oldVnode`有子节点而 `VNode`没有，则删除 `el`子节点
  - 如果 `oldVnode`没有子节点而 `VNode`有，则将 `VNode`的子节点真实化后添加到 `el`
  - 如果两者都有子节点，则执行 `updateChildren`函数比较子节点
- ```
  updateChildren
  ```
  主要做了以下操作：

  - 设置新旧 `VNode`的头尾指针
  - 新旧头尾指针进行比较，循环向中间靠拢，根据情况调用 `patchVnode`进行 `patch`重复流程、调用 `createElem`创建一个新节点，从哈希表寻找 `key`一致的 `VNode` 节点再分情况操作
