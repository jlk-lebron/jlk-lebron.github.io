# 1. 组合式 API

### 1.1. setup

setup 函数是组合式 API 的入口，所有内容都需要写在这个函数中

在 setup 函数中 this 是 undefined

### 1.2. 响应式数据重要方法

1. ref

- 通常用来定义基本类型数据
- 当用 ref 定义引用类型数据时实际是通过 reactive 定义的
- 用 ref 定义的数据需要通过 .value 来读取或设置值

2. reactive

- 通常用来定义引用类型数据
- 如果使用 reactive 定义基本类型数据会报错，并且也不是响应式的

3. 结论

- 基本数据类型用 ref 定义，引用数据类型用 reactive 定义
- 表单数据用 reactive 定义，其他数据用 ref 定义

### 1.3. 响应式数据其他方法

1. readonly

- 用来定义只读的数据：只能读取，不能修改

2. shallowRef

- 定义浅层的响应式数据
- 只有通过 .value 访问才是响应式，其他不是

3. shallowReactive

- 定义浅层的响应式数据
- 只有第一层属性才是响应式，其他不是

4. shallowReadonly

- 定义浅层的只读数据
- 只有第一层属性才是只读的，其他不是

5. 工具方法

- isRef() 检查某个值是否为 ref。
- isReactive() 检查某个值是否为 reactive。
- isReadonly() 检查某个值是否为 readonly。
- toRaw() 返回原始对象。

6. 结论

- 一般如果有大规模数据需要渲染，但是又不会修改其细节，可以通过 shallowRef 定义，可以节省大量内存

### 1.4. watch 和 computed

1. computed

```ts
// 只读计算属性
const oddOrEven = computed(() => {
  return count.value % 2 === 1 ? "奇数" : "偶数";
});

// 可读可写计算属性
const number = computed({
  get() {
    return count.value;
  },
  set(newVal) {
    count.value = newVal;
  },
});
```

2. watch

- 普通监视

```ts
// 监视 ref 数据
const count = ref(0);

watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

// 监视 reactive 数据
const person = reactive({
  age: 18,
});

// 监视reactive整体直接写
watch(person, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

// 监视reactive数据中某个属性，必须写成函数形式
watch(
  () => person.age,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);

// 监视多个数据
watch([count, person], (newVal, oldVal) => {
  console.log(newVal, oldVal);
});
```

- 立即监视&深度监视

```ts
watch(
  count,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    immediate: true, // 立即监视
    deep: true, // 深度监视
  }
);
```

- watchEffect

```ts
// 相当于 watch 的语法糖，可以自动收集依赖进行监视
// 函数初始化渲染就会执行一次
// 一旦内部引用的响应式数据发生变化，也会重新执行函数
watchEffect(
  () => {
    console.log("watchEffect", count.value, person.age);
  },
  {
    flush: "pre", // DOM更新之前触发（默认值）
    // flush: 'post', // DOM更新之后触发
    // flush: "sync", // DOM更新之前触发, 数据更新后立即执行（谨慎使用）
  }
);
```

### 1.5 生命周期函数

- setup

取缔了 beforeCreate 和 created

- onBeforeMount
- onMounted
- onBeforeUpdate
- onUpdated
- onBeforeUnmount
- onUnmounted
- onActivated
- onDeactivated
- onErrorCaptured

所有生命周期均可使用多次

### 1.6 其他内容

setup(props, context) {}

- props: props 数据
- context 是一个对象，包含下面属性
  - attrs 未接受的 props 数据和自定义事件回调函数
  - emit 触发自定义事件的方法

### 1.7 setup 语法糖

1. 使用

```vue
<script lang="ts" setup></script>
```

2. 作用

- 整个 script 内部的代码，相当于在 setup 函数中
- 定义数据会自动暴露，引入组件会自动注册

3. 其他特殊语法

像 ref、reactive、watch、computed、生命周期函数用法与之前一样

- 声明接受 props

```ts
// 声明接受props之后，模板页面可以直接使用数据
// 如果需要在setup函数中使用props数据，则需要得到返回值

// 如果只有必选参数：
const props = defineProps<{
  count: number; // 必选
}>();

// 如果有可选参数，并且需要默认值
const props = withDefaults(
  defineProps<{
    count: number; // 必选的
    number?: number; // 可选的
  }>(),
  {
    number: 20, // 可选参数默认值
  }
);
```

- 声明接受自定义事件

```ts
// 声明接受emits之后，模板页面可以通过$emit方法触发自定义事件
// 如果需要在setup函数中触发自定义事件，则需要得到返回值emit方法
const emit = defineEmits(["setCount"]);
```

- 使用 attrs 属性

```ts
import { useAttrs } from "vue";
const attrs = useAttrs();
console.log(attrs);
```

## 2. todoList 练习

### 2.1. 服务器

1. 初始化 package.json

```
npm init -y
```

> 注意：需要加上 "type": "module" 才能使用 ES Module

2. 下载依赖

```
npm i express
```

3. 完成代码

```ts
import express from "express";

const app = express();

let todoList = [
  {
    id: 1,
    name: "静哥喜欢洗脚",
    isDone: true,
  },
  {
    id: 2,
    name: "陶哥喜欢看静哥洗脚",
    isDone: false,
  },
  {
    id: 3,
    name: "伟哥喜欢唱跳rap篮球",
    isDone: true,
  },
];

let uid = 4;

// 解析form表单格式请求参数
// app.use(express.urlencoded({ extended: false }));

// 解析json格式数据请求体参数
app.use(express.json());

/*
  增 POST 
  删 DELETE
  改 PUT / PATCH
  查 GET
*/

// 1. 查询todoList
app.get("/todos", (req, res) => {
  res.json({
    code: 200,
    message: "",
    success: true,
    data: todoList,
  });
});

// 2. 单个修改todo是否完成
app.put("/todo/:id", (req, res) => {
  const id = +req.params.id; // 将数据转number类型
  const todo = todoList.find((todo) => todo.id === id);
  todo.isDone = !todo.isDone;
  res.json({
    code: 200,
    message: "",
    success: true,
    data: null,
  });
});

// 3. 单个删除todo
app.delete("/todo/:id", (req, res) => {
  const id = +req.params.id;
  todoList = todoList.filter((todo) => todo.id !== id);
  res.json({
    code: 200,
    message: "",
    success: true,
    data: null,
  });
});

// 4. 新增todo
app.post("/todo", (req, res) => {
  const { name } = req.body;
  todoList.push({
    id: uid++,
    name,
    isDone: false,
  });
  res.json({
    code: 200,
    message: "",
    success: true,
    data: null,
  });
});

// 5. 全选&全不选
app.put("/todos", (req, res) => {
  const { isDone } = req.body;
  todoList.forEach((todo) => (todo.isDone = isDone));
  res.json({
    code: 200,
    message: "",
    success: true,
    data: null,
  });
});

// 6. 批量删除
app.delete("/todos", (req, res) => {
  const { idList } = req.query;
  todoList = todoList.filter((todo) => {
    return !idList.includes(+todo.id);
  });
  res.json({
    code: 200,
    message: "",
    success: true,
    data: null,
  });
});

app.listen(3000, "localhost", (err) => {
  if (err) console.log("服务器启动失败", err);
  else console.log("服务器启动成功");
});
```

4. 启动服务器

```
node index.js
```
