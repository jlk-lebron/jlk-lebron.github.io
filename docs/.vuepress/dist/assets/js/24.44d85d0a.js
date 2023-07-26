(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{335:function(v,_,l){"use strict";l.r(_);var i=l(7),o=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"小程序路由跳转"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序路由跳转"}},[v._v("#")]),v._v(" 小程序路由跳转")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("对VueRouter了解")]),v._v(" "),_("ol",[_("li",[v._v("他是一个Vue的扩展插件库(Vue.use)")]),v._v(" "),_("li",[v._v("作用:他可以实现单页面应用(SPA应用)")]),v._v(" "),_("li",[v._v("问题:请问什么是单页面应用?\n"),_("ol",[_("li",[v._v("当前项目只有一个html文件,通过DOM的CRUD方法,将页面上局部的内容替换成全新的内容进行展示")]),v._v(" "),_("li",[v._v("反过来说,如果一个项目具有多个html文件,他就是多页面应用")])])])])]),v._v(" "),_("li",[_("p",[v._v("VueRouter中一共具有几种路由跳转方式")]),v._v(" "),_("ol",[_("li",[v._v("一共两种")]),v._v(" "),_("li",[v._v("声明式导航\n"),_("ol",[_("li",[v._v("组件:router-link")]),v._v(" "),_("li",[v._v("router-link组件会在页面上显示一个a标签,点击即可实现跳转操作")]),v._v(" "),_("li",[_("strong",[v._v("定义:通过标签的形式来引导用户进行跳转,这类操作称为声明式导航")])])])]),v._v(" "),_("li",[v._v("编程式导航\n"),_("ol",[_("li",[v._v("API:push,replace,go,back等")]),v._v(" "),_("li",[_("strong",[v._v("定义:通过js的API来控制用户的跳转,这类操作称为编程式导航")])])])])])]),v._v(" "),_("li",[_("p",[v._v("VueRouter中传参方式有几种?")]),v._v(" "),_("ol",[_("li",[v._v("query\n"),_("ol",[_("li",[v._v('语法:"/home?key=value&key2=value2"')]),v._v(" "),_("li",[v._v("这种传参方式属于URL传参")])])]),v._v(" "),_("li",[v._v("params\n"),_("ol",[_("li",[v._v('语法:"/home/数据"')]),v._v(" "),_("li",[v._v("这种传参方式属于URL传参")])])]),v._v(" "),_("li",[v._v("meta\n"),_("ol",[_("li",[v._v("这种传参方式不属于URL传参")])])]),v._v(" "),_("li",[v._v("最终,所有路由传参的数据,都可以在this.$route对象身上找到")])])]),v._v(" "),_("li",[_("p",[v._v("小程序路由跳转方式")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("一共两种")])]),v._v(" "),_("li",[_("p",[v._v("声明式导航")]),v._v(" "),_("ol",[_("li",[v._v("组件:navigator")])])]),v._v(" "),_("li",[_("p",[v._v("编程式导航")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("wx.navigateTo")]),v._v(" "),_("ol",[_("li",[v._v("作用:"),_("strong",[v._v("保留当前页面(保留当前页面的实例对象)")]),v._v("，跳转到应用内的某个页面")]),v._v(" "),_("li",[v._v("url可以书写相对路径,该路径参考于当前文件的所在路径")]),v._v(" "),_("li",[v._v("url可以书写绝对路径,该路径参考于当前项目的根路径(也就是app.json所在的文件夹)")]),v._v(" "),_("li",[v._v("类似于VueRouter中的push方法+keep-alive组件,当前页面的实例对象被缓存起来,不会销毁,同时在跳转到下个页面之后,还能成功返回当前页面(历史记录栈没被替换)")]),v._v(" "),_("li",[_("strong",[v._v("注意:")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("小程序中页面栈最多十层(相当于是max为10),早期最多五层")])]),v._v(" "),_("li",[_("strong",[v._v("小程序页面栈如果已经达到10层,将无法开启第11层,也就是说后续跳转全部失效")])])])])])]),v._v(" "),_("li",[_("p",[v._v("wx.redirectTo")]),v._v(" "),_("ol",[_("li",[v._v("作用:"),_("strong",[v._v("关闭当前页面(销毁当前页面的实例对象)")]),v._v("，跳转到应用内的某个页面")]),v._v(" "),_("li",[v._v("使用方法与navigateTo相同,只是API名称不同")]),v._v(" "),_("li",[v._v("类似于VueRouter中的replace方法,跳转到下个页面的同时,当前页面的历史记录会被覆盖(无法回到当前页面了)")])])]),v._v(" "),_("li",[_("p",[v._v("以上两个API的区别:")]),v._v(" "),_("ol",[_("li",[v._v("wx.navigateTo会保留上个页面的状态数据,而wx.redirectTo会丢失上个页面的数据")])])])])])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("keep-alive组件")])]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("被keep-alive包裹的组件,生死不由己,只能挂载和隐藏,正常情况下无法死亡")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("被keep-alive包裹的组件,他的组件实例对象不会被销毁,会被缓存起来,留作后续使用")])]),v._v(" "),_("li",[_("strong",[v._v("被缓存的组件,将会失去他的卸载阶段的生命周期,同时会获得两个全新的生命周期")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("activated(激活)")])]),v._v(" "),_("li",[_("strong",[v._v("deactivated(失活)")])])])]),v._v(" "),_("li",[_("strong",[v._v("简单来说,就是让本该死去的组件不死,被隐藏起来")])])])]),v._v(" "),_("li",[_("strong",[v._v("标签属性")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("include属性")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("属性值是需要缓存的组件名称(组件的name属性)")])]),v._v(" "),_("li",[_("strong",[v._v("语法:"),_("keep-alive",{attrs:{include:"login"}},[v._v("(代表只缓存login组件)")])],1)])])]),v._v(" "),_("li",[_("strong",[v._v("exclude属性")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("属性值是不需要缓存的组件名称")])]),v._v(" "),_("li",[_("strong",[v._v("语法:"),_("keep-alive",{attrs:{exclude:"login"}},[v._v("(代表除了login组件都缓存)")])],1)])])]),v._v(" "),_("li",[_("strong",[v._v("max属性")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("属性值是能够缓存的组件实例对象的最大个数(没有默认值)")])]),v._v(" "),_("li",[_("strong",[v._v("语法:"),_("keep-alive",{attrs:{max:"10"}},[v._v("(代表最多缓存10个组件实例对象)")])],1)]),v._v(" "),_("li",[_("strong",[v._v("如果超过了最大的数量限制,那么最久没被使用的组件实例对象会被出栈销毁")])]),v._v(" "),_("li",[_("strong",[v._v("该属性的存在,就是为了防止组件实例对象缓存过多,导致内存不足的效果,影响页面性能")])])])])])])]),v._v(" "),_("p",[v._v("​")])])])])}),[],!1,null,null,null);_.default=o.exports}}]);