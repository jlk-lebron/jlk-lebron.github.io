module.exports = {
  title: "小王的博客",
  description: "小王的博客",
  base: "/jlk-wk/",
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
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
    sidebar: [
      {
        title: "Vue",
        link: "/",
        collapsable: false, // 不折叠
        children: [
          { title: "Vue3初体验", path: "/vue/Vue3初体验.md" },
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
        collapsable: false, // 不折叠
        children: [{ title: "yahoo性能优化", path: "/前端性能优化/优化.md" }],
      },
    ],
  },
};
