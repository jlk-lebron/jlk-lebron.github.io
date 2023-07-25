module.exports = {
  title: "小王的博客",
  description: "小王的博客",
  base: "/jlk-wk/",
  theme: "vdoing",
  themeConfig: {
    nav: [
      { text: "首页", link: "/docs/README.md" },
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
    sidebar: 'structuring' ,
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
        children: [{ title: "性能优化", path: "/前端性能优化/优化.md" }],
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
