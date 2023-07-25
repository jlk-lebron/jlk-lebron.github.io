---
title: Vue常见指令
date: 2023-06-25 20:12:59
permalink: /pages/aa6377/
categories:
  - vue
tags:
  - 
---
1. `v-model`：用于在表单元素及组件上创建双向数据绑定。

```HTML
<input v-model="message" type="text">
```

2. `v-bind`：用于动态绑定 HTML 属性。

```HTML
<a v-bind:href="url">Click me</a>
```

3. `v-if` 和 `v-else`：用于根据条件渲染元素。

```HTML
<div v-if="showMessage">{{ message }}</div><div v-else>
  No message to show.
</div>
```

4. `v-for`：用于循环渲染列表中的元素。

```HTML
<ul><li v-for="item in items">{{ item }}</li></ul>
```

5. `v-on` 或者简写 `@`：用于绑定事件监听器。

```HTML
<button v-on:click="myMethod">Click me</button>
```

6. `v-show`：用于根据条件显示或隐藏元素，与 `v-if` 不同的是，它不会删除元素，只是通过 CSS 控制其显示或隐藏状态。

```HTML
<div v-show="showMessage">{{ message }}</div>
```

7. `v-cloak`：用于防止页面闪烁的问题，它会在 Vue 实例准备完毕时自动移除。

```HTML
<div v-cloak>{{ message }}</div>
```

8. `v-bind:class` 和 `v-bind:style`：用于动态绑定元素的类名和样式。

```HTML
<div v-bind:class="{ active: isActive }"></div><div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

9. `v-pre`：用于跳过一个元素及其子元素的编译过程，可以用于显示原始 Mustache 标签。

```HTML
<span v-pre>{{ this will not be compiled }}</span>
```

10. `v-text`：与双花括号的文本插值类似，用于输出纯文本内容，但是它不会解析 HTML 实体。

```HTML
<div v-text="message"></div>
```

11. `v-html`：用于输出 HTML 内容，但是需要注意 XSS 攻击的问题。

```HTML
<div v-html="message"></div>
```

12. `v-once`：用于对元素进行一次性地渲染，之后不再响应数据变化。

```HTML
<span v-once>{{ message }}</span>
```
