module.exports = {
  title: "小王的博客",
  description: "小王的博客",
  base: "/jlk-wk/",
  theme: "vdoing",
  head: [["link", { rel: "icon", href: "./static/icon-小米归属.svg" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/docs/index.md" },
      { text: "关于", link: "/" },
      {
        text: "博客",
        items: [
          { text: "Github", link: "https://github.com/jlk-lebron/" },
          { text: "掘金", link: "https://juejin.cn/user/1849806240878344" },
        ],
      },
    ],
    subSidebar: "auto",
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
    sidebar: "structuring",
    sidebar: [
      {
        title: "Vue",
        link: "/",
        collapsable: true, // 不折叠
        children: [
          { title: "初体验", path: "/vue/Vue3初体验.md" },
          { title: "Vue3通信方式", path: "/vue/Vue3通信方式.md" },
          { title: "Vue常见指令", path: "/vue/Vue常见指令.md" },
          { title: "Vue3 组合式API", path: "/vue/Vue3 组合式API.md" },
          { title: "Pinia", path: "/vue/Pinia.md" },
          { title: "跨域问题", path: "/vue/跨域相关.md" },
        ],
      },
      {
        title: "Important",
        link: "/",
        collapsable: true, // 不折叠
        children: [
          { title: "网络", path: "/Important/掘金-网络.md" },
          { title: "Html", path: "/Important/掘金-Html.md" },
          { title: "Css", path: "/Important/掘金-Css.md" },
          { title: "JavaScript", path: "/Important/掘金-JavaScript.md" },
          { title: "React", path: "/Important/掘金-React.md" },
          { title: "Vue", path: "/Important/掘金-Vue.md" },
        ],
      },
      {
        title: "前端性能优化",
        link: "/",
        collapsable: true, // 不折叠
        children: [{ title: "前端性能优化", path: "/前端性能优化/优化.md" }],
      },
      {
        title: "小程序",
        link: "/",
        collapsable: true, // 不折叠
        children: [
          {
            title: "小程序数据绑定",
            path: "/小程序/01.小程序数据绑定.md",
          },
          {
            title: "小程序事件绑定",
            path: "/小程序/02.小程序事件绑定.md",
          },
          {
            title: "小程序路由跳转",
            path: "/小程序/03.小程序路由跳转.md",
          },
          {
            title: "小程序生命周期",
            path: "/小程序/04.小程序生命周期.md",
          },
          {
            title: "小程序数据请求",
            path: "/小程序/05.小程序数据请求.md",
          },
          {
            title: "小程序列表渲染",
            path: "/小程序/06.小程序列表渲染.md",
          },
          {
            title: "小程序本地缓存",
            path: "/小程序/07.小程序本地缓存.md",
          },
        ],
      },
    ],
  },
};

// const baiduCode = require("./config/baiduCode.js"); // 百度统计hm码
// const htmlModules = require("./config/htmlModules.js");

// module.exports = {
//   theme: "vdoing", // 使用npm包主题
//   // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

//   title: "Wang's blog",
//   description:
//     "web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。",
//   base: "/jlk-wk/", // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

//   // 主题配置
//   themeConfig: {
//     // 导航配置
//     nav: [
//       { text: "首页", link: "/docs/index.md" },
//       {
//         text: "前端",
//         link: "/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
//         items: [
//           // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
//         ],
//       },
//     ],
//     sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
//     logo: "/img/logo.png", // 导航栏logo
//     repo: "xugaoyi/vuepress-theme-vdoing", // 导航栏右侧生成Github链接
//     searchMaxSuggestions: 10, // 搜索结果显示最大数
//     lastUpdated: "上次更新", // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
//     docsDir: "docs", // 编辑的文件夹
//     editLinks: true, // 启用编辑
//     editLinkText: "编辑",

//     //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

//     // category: false, // 是否打开分类功能，默认true
//     // tag: false, // 是否打开标签功能，默认true
//     // archive: false, // 是否打开归档功能，默认true
//     // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

//     // bodyBgImg: [
//     //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
//     //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
//     //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
//     // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
//     // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

//     // titleBadge: false, // 文章标题前的图标是否显示，默认true
//     // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
//     //   '图标地址1',
//     //   '图标地址2'
//     // ],
//     // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

//     // updateBar: { // 最近更新栏
//     //   showToArticle: false, // 显示到文章页底部，默认true
//     //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
//     // },
//     // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
//     // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
//     // pageButton: false, // 是否显示快捷翻页按钮，默认true

//     // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
//     sidebar: "structuring",

//     // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
//     author: {
//       name: "xugaoyi", // 必需
//       link: "https://github.com/xugaoyi", // 可选的
//     },

//     // 博主信息，显示在首页侧边栏
//     blogger: {
//       avatar:
//         "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg",
//       name: "Evan Xu",
//       slogan: "前端界的小学生",
//     },

//     // 社交图标，显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social
//     social: {
//       // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加
//       icons: [
//         {
//           iconClass: "icon-youjian",
//           title: "发邮件",
//           link: "mailto:894072666@qq.com",
//         },
//         {
//           iconClass: "icon-github",
//           title: "GitHub",
//           link: "https://github.com/xugaoyi",
//         },
//         {
//           iconClass: "icon-erji",
//           title: "听音乐",
//           link: "https://music.163.com/#/playlist?id=755597173",
//         },
//       ],
//     },

//     // 页脚信息
//     footer: {
//       createYear: 2019, // 博客创建年份
//       copyrightInfo:
//         'Evan Xu | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
//     },

//     // 插入hmtl(广告)模块
//     // htmlModules,
//   },

//   // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
//   head: [
//     ["link", { rel: "icon", href: "/img/favicon.ico" }], //favicons，资源放在public文件夹
//     [
//       "meta",
//       {
//         name: "keywords",
//         content:
//           "前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown",
//       },
//     ],
//     ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }], // 百度统计的站长验证（你可以去掉）
//     ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
//     [
//       "script",
//       {
//         "data-ad-client": "ca-pub-7828333725993554",
//         async: "async",
//         src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
//       },
//     ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
//   ],

//   // 插件配置
//   plugins: [
//     // 本地插件（供学习）
//     // [require('./plugins/love-me'), { // 鼠标点击爱心特效
//     //   color: '#11a8cd', // 爱心颜色，默认随机色
//     //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
//     // }],

//     "vuepress-plugin-baidu-autopush", // 百度自动推送

//     // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
//     [
//       "thirdparty-search",
//       {
//         thirdparty: [
//           // 可选，默认 []
//           {
//             title: "在MDN中搜索",
//             frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
//             behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
//           },
//           {
//             title: "在Runoob中搜索",
//             frontUrl: "https://www.runoob.com/?s=",
//           },
//           {
//             title: "在Vue API中搜索",
//             frontUrl: "https://cn.vuejs.org/v2/api/#",
//           },
//           {
//             title: "在Bing中搜索",
//             frontUrl: "https://cn.bing.com/search?q=",
//           },
//           {
//             title: "通过百度搜索本站的",
//             frontUrl: "https://www.baidu.com/s?wd=site%3Axugaoyi.com%20",
//           },
//         ],
//       },
//     ],

//     [
//       "one-click-copy", // 代码块复制按钮
//       {
//         copySelector: [
//           'div[class*="language-"] pre',
//           'div[class*="aside-code"] aside',
//         ], // String or Array
//         copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
//         duration: 1000, // prompt message display time.
//         showInMobile: false, // whether to display on the mobile side, default: false.
//       },
//     ],

//     [
//       "demo-block", // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
//       {
//         settings: {
//           // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
//           // cssLib: ['http://xxx'], // 在线示例中的css依赖
//           // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
//           jsfiddle: false, // 是否显示 jsfiddle 链接
//           codepen: true, // 是否显示 codepen 链接
//           horizontal: false, // 是否展示为横向样式
//         },
//       },
//     ],
//     [
//       "vuepress-plugin-zooming", // 放大图片
//       {
//         selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
//         options: {
//           bgColor: "rgba(0,0,0,0.6)",
//         },
//       },
//     ],
//     [
//       "vuepress-plugin-baidu-tongji", // 百度统计 （你可以去掉）
//       {
//         // hm: baiduCode || "503f098e7e5b3a5b5d8c5fc2938af002",
//       },
//     ],
//     [
//       "vuepress-plugin-comment", // 评论
//       {
//         choosen: "gitalk",
//         options: {
//           clientID: "a6e1355287947096b88b",
//           clientSecret: "f0e77d070fabfcd5af95bebb82b2d574d7248d71",
//           repo: "blog-gitalk-comment", // GitHub 仓库
//           owner: "xugaoyi", // GitHub仓库所有者
//           admin: ["xugaoyi"], // 对仓库有写权限的人
//           // distractionFreeMode: true,
//           pagerDirection: "last", // 'first'正序 | 'last'倒序
//           id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
//           title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
//           labels: ["Gitalk", "Comment"], // GitHub issue 的标签
//           body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>", // GitHub issue 的内容
//         },
//       },
//     ],
//     [
//       "@vuepress/last-updated", // "上次更新"时间格式
//       {
//         transformer: (timestamp, lang) => {
//           const dayjs = require("dayjs"); // https://day.js.org/
//           return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
//         },
//       },
//     ],
//   ],
// };
