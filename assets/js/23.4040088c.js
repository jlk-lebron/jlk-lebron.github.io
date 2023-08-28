(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{335:function(a,t,s){"use strict";s.r(t);var e=s(7),v=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"git代码版本控制软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git代码版本控制软件"}},[a._v("#")]),a._v(" git代码版本控制软件")]),a._v(" "),t("h2",{attrs:{id:"为什么要使用代码版本控制软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用代码版本控制软件"}},[a._v("#")]),a._v(" 为什么要使用代码版本控制软件")]),a._v(" "),t("p",[a._v("作用：")]),a._v(" "),t("ol",[t("li",[a._v("团队协作开发：多个人员开发不同的功能模块，最终要合并代码。")]),a._v(" "),t("li",[a._v("版本回退（可追溯）：可让项目回到指定的版本，即后悔药。")]),a._v(" "),t("li",[a._v("代码备份：怕电脑系统奔溃，没事，只要代码提交到了仓库中，可重新拉取下来。")])]),a._v(" "),t("p",[a._v("常见的代码版本控制软件有svn(集中式)、git （功能非常强大）")]),a._v(" "),t("h2",{attrs:{id:"git工具介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git工具介绍"}},[a._v("#")]),a._v(" git工具介绍")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("git是一个开源的代码版本控制系统，可以有效、高速地处理项目版本管理。")])]),a._v(" "),t("li",[t("p",[a._v("git特点：分布式。即git客户端和服务器可以同时保存多个代码版本.")]),a._v(" "),t("blockquote",[t("p",[a._v("svn:是一个集中式。即所有的代码版本全都是存在服务端。")])])]),a._v(" "),t("li",[t("p",[a._v("git发明者：是Linux创始人"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E6%9E%97%E7%BA%B3%E6%96%AF%C2%B7%E6%9C%AC%E7%BA%B3%E7%AC%AC%E5%85%8B%E7%89%B9%C2%B7%E6%89%98%E7%93%A6%E5%85%B9/1034429",target:"_blank",rel:"noopener noreferrer"}},[a._v("林纳斯"),t("OutboundLink")],1),a._v(" ，最开始是用于管理Linux内核源码的。")])])]),a._v(" "),t("p",[a._v("git是C/S架构的软件")]),a._v(" "),t("ul",[t("li",[a._v("C: client客户端，自己需要安装")]),a._v(" "),t("li",[a._v("S: server服务端，可以自己搭建git服务器，或使用第三方的如github或码云仓库。有些企业也会搭建自己私有的代码托管服务器。")])]),a._v(" "),t("p",[a._v("其中github、码云是属于第三方的代码托管平台。")]),a._v(" "),t("h1",{attrs:{id:"安装git客户端工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装git客户端工具"}},[a._v("#")]),a._v(" 安装git客户端工具")]),a._v(" "),t("p",[a._v("安装时候，注意自己系统的位数。64还是32位")]),a._v(" "),t("p",[a._v("下载地址："),t("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://git-scm.com/download/win"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("安装的时候选择安装路径即可，然后一路next即可。安装好后创建文件夹，进去鼠标右键会多出以下两个选项，代表git工具安装完成。")]),a._v(" "),t("p",[a._v("cmd命令窗口中查看安装的版本号")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("C:\\Users\\汪玮>git -v\ngit version 2.37.1\n")])])]),t("h1",{attrs:{id:"全局设置提交的用户名和邮箱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局设置提交的用户名和邮箱"}},[a._v("#")]),a._v(" 全局设置提交的用户名和邮箱")]),a._v(" "),t("p",[a._v("全局设置：必须先要设置提交的用户名和邮箱，否则无法提交代码。")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git config --global user.name 名字     #叫啥名字\ngit config --global user.email 邮箱\t#怎么联系你\n")])])]),t("p",[a._v("查看配置信息")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git config --list \n")])])]),t("p",[a._v("若想在每个仓库设置的名字不一样，可以去掉 "),t("code",[a._v("--global")])]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git config user.name 名字     #叫啥名字\ngit config user.email 邮箱\t#怎么联系你\n")])])]),t("h1",{attrs:{id:"创建git仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建git仓库"}},[a._v("#")]),a._v(" 创建git仓库")]),a._v(" "),t("p",[a._v("从本地文件夹创建一个git仓库，步骤如下：")]),a._v(" "),t("ol",[t("li",[a._v("创建一个空文件夹：如 "),t("code",[a._v("shop")])]),a._v(" "),t("li",[a._v("进行 "),t("code",[a._v("shop")]),a._v("文件夹中，点击空白处，鼠标右键选择 "),t("code",[a._v("Git base here")]),a._v("， 输入 "),t("code",[a._v("git init")]),a._v(" 指令，此时目录会生成一个 "),t("code",[a._v(".git")]),a._v("的目录。那么git库就创建成功了。")])]),a._v(" "),t("p",[a._v("注意：")]),a._v(" "),t("ul",[t("li",[a._v("由于 "),t("code",[a._v(".git")]),a._v(",是隐藏目录，默认不显示出来，找到文件夹上方的 "),t("strong",[a._v("查看->显示->隐藏的项目")]),a._v("，将其选中")]),a._v(" "),t("li",[a._v("不要去改 "),t("code",[a._v(".git")]),a._v("目录中的任何文件，否则会破坏git仓库。")])]),a._v(" "),t("h1",{attrs:{id:"git工作流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git工作流"}},[a._v("#")]),a._v(" git工作流")]),a._v(" "),t("p",[a._v("工作区：我们的工作目录。")]),a._v(" "),t("p",[a._v("版本库：存储仓库代码的地方。存在于 "),t("code",[a._v(".git目录")]),a._v("中")]),a._v(" "),t("ul",[t("li",[a._v("暂存区：存在于 "),t("code",[a._v(".git")]),a._v("目录中的 "),t("code",[a._v("index")]),a._v("文件中")]),a._v(" "),t("li",[a._v("本地仓库：代码实际存储的地方。且默认会有个master 分支。")])]),a._v(" "),t("h1",{attrs:{id:"git常用指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git常用指令"}},[a._v("#")]),a._v(" git常用指令")]),a._v(" "),t("p",[a._v("查看命令如何使用，输入："),t("code",[a._v("git commit --help")]),a._v(" 或 "),t("code",[a._v("git commit -h")])]),a._v(" "),t("p",[a._v("git使用文档："),t("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://git-scm.com/book/zh/v2"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"git-add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-add"}},[a._v("#")]),a._v(" git add")]),a._v(" "),t("p",[a._v("默认在工作区创建的文件是属于未跟踪（"),t("code",[a._v("Untracked files")]),a._v(":）的，需要执行add指令将其添加到暂存区。")]),a._v(" "),t("p",[a._v("add指令作用：添加当前工作目录中的文件添到暂存区中:")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git add .   #添加当前工作目录中的所有文件到暂存区\ngit add filename    #添加当前工作目录中指定文件到暂存区:\n")])])]),t("h2",{attrs:{id:"git-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-status"}},[a._v("#")]),a._v(" git status")]),a._v(" "),t("p",[a._v("作用：查看暂存区状态文件的状态。是新增、删除、还是修改状态。")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git status\n")])])]),t("p",[a._v("清屏命令："),t("code",[a._v("git clear")]),a._v("或快捷键 "),t("code",[a._v("ctrl + L")])]),a._v(" "),t("h2",{attrs:{id:"git-commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[a._v("#")]),a._v(" git commit")]),a._v(" "),t("p",[a._v("作用：把暂存区中的文件提交到本地仓库中")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git commit -m '备注信息'\n")])])]),t("p",[a._v("对于之前已经提交过本地仓库中的文件(即已经被跟踪过的)，再次提交时，中间可以省略add指令")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git commit -am '备注信息' #add和commit连写\n")])])]),t("p",[t("code",[a._v("-m")]),a._v(" 选项指定了一条将会存储在标签中的信息。 如果没有指定一条信息，Git 会启动vim编辑器要求你输入信息 ,输入字母 "),t("code",[a._v("i")]),a._v("进行编辑， 保存并退出vim编辑器 "),t("code",[a._v(":wq")]),a._v(",强制退出 "),t("code",[a._v("!q")])]),a._v(" "),t("blockquote",[t("p",[a._v("注：git默认不能提交空文件夹，仅能跟踪文件的变化。若要提交空文件夹，则需要在里面创建一个.gitkeep文件方可提交")])]),a._v(" "),t("h2",{attrs:{id:"git-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-log"}},[a._v("#")]),a._v(" git log")]),a._v(" "),t("p",[a._v("作用：查看提交的日志信息")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git log \n或\ngit log --oneline\n更酷的图形化显示方式（含分支的信息）：\ngit log --oneline --graph\n")])])]),t("p",[a._v("操作如下：")]),a._v(" "),t("p",[a._v("HEAD是指向前当前分支中最后一次提交的引用。")]),a._v(" "),t("blockquote",[t("p",[a._v("注意：使用git log查看日志时，若日志信息过多，窗口显示不下时候，最后一行会有：号，我们只要输入:q即可退出日志的查看。")])]),a._v(" "),t("p",[a._v("如果不小心按住了其他键，则重新输入 "),t("code",[a._v(":q")]),a._v(" 退出即可。")]),a._v(" "),t("h2",{attrs:{id:"git-alias"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-alias"}},[a._v("#")]),a._v(" git alias")]),a._v(" "),t("p",[a._v("git alias： 设置命令的别名。若git带有较多参数的时候，可以使用alias设置别名的简化操作。")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v('git config --global alias.别名 "命令全称"\n')])])]),t("p",[a._v("如给log命令设置别名为lg:")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git config --global alias.lg \"log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative\"\n")])])]),t("p",[a._v("可查看提交的信息、日期时间、附注信息、作者")]),a._v(" "),t("p",[a._v("效果如下：")]),a._v(" "),t("p",[a._v("删除别名：")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git config --global --unset alias.别名\n")])])]),t("h2",{attrs:{id:"git-rm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-rm"}},[a._v("#")]),a._v(" git rm")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git rm filename # 删除某个文件（只能删除已经被跟踪的文件）\n")])])]),t("h2",{attrs:{id:"git-checkout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout"}},[a._v("#")]),a._v(" git checkout")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git checkout index.js  # 撤销index.js文件的修改操作\ngit checkout .  # 撤销所有文件的修改操作\n")])])]),t("h2",{attrs:{id:"git-log和git-reflog的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-log和git-reflog的区别"}},[a._v("#")]),a._v(" git log和git reflog的区别")]),a._v(" "),t("ul",[t("li",[a._v("git log：显示所有提交过的版本信息")]),a._v(" "),t("li",[a._v("git reflog：可以查看所有分支的所有操作记录，包含删除，回退都会被记录。 比 "),t("code",[a._v("git log")]),a._v("更详细。")])]),a._v(" "),t("h2",{attrs:{id:"git-reset-版本回退"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-reset-版本回退"}},[a._v("#")]),a._v(" git reset 版本回退")]),a._v(" "),t("p",[a._v("reset作用：实现提交后版本回退")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("git relog")]),a._v("或 "),t("code",[a._v("git log")]),a._v(" 获取版本日志的前7位,可以回滚到指定的版本")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git reset --hard af4542g\n")])])]),t("h2",{attrs:{id:"git提交空文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git提交空文件夹"}},[a._v("#")]),a._v(" git提交空文件夹")]),a._v(" "),t("blockquote",[t("p",[a._v("注：git默认不能提交空文件夹，仅能跟踪文件的变化。若要提交空文件夹，则需要在里面创建一个.gitkeep文件方可提交")])]),a._v(" "),t("h1",{attrs:{id:"github中远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github中远程仓库"}},[a._v("#")]),a._v(" github中远程仓库")]),a._v(" "),t("p",[a._v("点击加号+，选择New repository新建仓库")]),a._v(" "),t("p",[a._v("码云中创建仓库同理！")]),a._v(" "),t("h2",{attrs:{id:"git-push推送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-push推送"}},[a._v("#")]),a._v(" git push推送")]),a._v(" "),t("p",[a._v("git push作用：用于将本地仓库代码推送到远程仓库。")]),a._v(" "),t("p",[a._v("之前的commit提交都将代码提交到本地仓库，而需要把代码分享给另外一个协同者，需要推送到远程仓库。")]),a._v(" "),t("ul",[t("li",[a._v("步骤1：将本地仓库与远程仓库地址进行关联：")])]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git remote add origin 仓库地址 \t#设置本地的远程仓库地址，其中origin是远程服务器名称，\ngit remote rm origin\t\t#移除本地远程仓库地址origin\ngit remote  -v       \t\t#查看本地关联的远程仓库地址\n")])])]),t("ul",[t("li",[a._v("步骤2：推送代码：")])]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git push -u 远程名称 本地分支名:远程分支名\n")])])]),t("p",[a._v("如：将本地的master分支推送到origin主机的master分支，命令可以这么写：")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git push -u origin master:master\n# 当本地与远程分支一样，可简写\ngit push -u origin master\n")])])]),t("p",[a._v("如果当前分支与多个远程主机存在追踪关系,一般下情况下，第一次推送加 "),t("code",[a._v("-u")]),a._v("，可记住远程主机名，后面可直接通过 "),t("code",[a._v("git push")]),a._v("推送即可。")]),a._v(" "),t("blockquote",[t("p",[a._v("注意：git push 推送时候会要求你输入用户名和密码，你也可以选择记住密码，后面就无须输入")])]),a._v(" "),t("h2",{attrs:{id:"push代码到github遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push代码到github遇到的问题"}},[a._v("#")]),a._v(" push代码到github遇到的问题")]),a._v(" "),t("p",[a._v("推送到github遇到的问题及解决办法！")]),a._v(" "),t("p",[a._v("解决端口 OpenSSL SSL_read 或 443 等网络相关错误")]),a._v(" "),t("p",[a._v("如果遇到以下问题：")]),a._v(" "),t("blockquote",[t("p",[a._v("Failed to connect to github.com port 443:connection timed out")])]),a._v(" "),t("p",[a._v("或")]),a._v(" "),t("p",[a._v("OpenSSL SSL_read: Connection was reset, errno 10054")]),a._v(" "),t("p",[a._v("解决办法取消代理即可：")]),a._v(" "),t("p",[a._v("方式1：取消（ctrl +c）,多试几遍")]),a._v(" "),t("p",[a._v("方式2：取消代理，如下")]),a._v(" "),t("blockquote",[t("p",[a._v("git config --global --unset http.proxy\ngit config --global --unset https.proxy")])]),a._v(" "),t("h1",{attrs:{id:"clone克隆远程仓库代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone克隆远程仓库代码"}},[a._v("#")]),a._v(" clone克隆远程仓库代码")]),a._v(" "),t("p",[a._v("克隆远程的仓库代码到指定目录:")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git clone url  [本地目录]\n")])])]),t("blockquote",[t("p",[a._v("注意：不写本地目录名称默认会在当前目录创建一个与远程仓库同名的目录")])]),a._v(" "),t("p",[a._v("也可以仓库源码克隆到一个指定的目录如： myshop目录")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git clone url myshop\n")])])]),t("h2",{attrs:{id:"拉取远程仓库代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取远程仓库代码"}},[a._v("#")]),a._v(" 拉取远程仓库代码")]),a._v(" "),t("p",[a._v("git pull作用：拉取远程仓库中的代码到本地仓库中。")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git pull 远程主机名 远程分支:本地分支\n")])])]),t("blockquote",[t("p",[a._v("注意，分支push推送顺序的写法是 "),t("code",[a._v("<本地分支>:<远程分支>")]),a._v("，而pull拉取是 "),t("code",[a._v("<远程分支>:<本地分支>")]),a._v("，他们是相反的")])]),a._v(" "),t("h2",{attrs:{id:"拉取和获取的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取和获取的区别"}},[a._v("#")]),a._v(" 拉取和获取的区别")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git pull origin master # 拉取 远程仓库代码并合并到本地master分支\ngit fetch origin master # 获取 远程仓库代码不会合并，需要执行 git merge  进行合并\n")])])]),t("blockquote",[t("p",[a._v("git pull （拉取）= git fetch +git merge")])]),a._v(" "),t("h1",{attrs:{id:"设置ssh协议免密提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置ssh协议免密提交"}},[a._v("#")]),a._v(" 设置ssh协议免密提交")]),a._v(" "),t("p",[a._v("ssh是一种客户端和服务器之间的安全连接协议。")]),a._v(" "),t("p",[a._v("仓库地址有两种协议：https、ssh。")]),a._v(" "),t("p",[a._v("如果仓库地址使用https的协议，每次提交都会要求输入远程仓库github的用户名和密码，")]),a._v(" "),t("p",[a._v("配置ssh协议可以免去每次推送代码输入密码的烦恼。")]),a._v(" "),t("p",[a._v("配置步骤：")]),a._v(" "),t("ol",[t("li",[a._v("创建ssh公钥和私钥。")]),a._v(" "),t("li",[a._v("把仓库的地址协议改为ssh协议")])]),a._v(" "),t("p",[t("strong",[a._v("1. 创建ssh私钥和公钥：")])]),a._v(" "),t("p",[a._v("终端输入: ssh-keygen ，然后一路回车即可，成功之后会在当前用户的目录多出如下的两个文件。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("id.rsa:私钥文件")])]),a._v(" "),t("li",[t("p",[a._v("id_rsa.pub:公钥文件")]),a._v(" "),t("p",[a._v("公钥：理解为锁,上传到github中存放着。\n私钥：理解为锁的钥匙，在本地电脑存放着。")]),a._v(" "),t("p",[a._v("也就是说只有锁的对应钥匙才可以进行提交代码。")])])]),a._v(" "),t("p",[a._v("把id_rsa.pub的公钥文件内容复制到github指定位置，步骤如下：")]),a._v(" "),t("p",[a._v("找到右上角用户头像下面的设置settings,在找到SSH一项，点击New SSH Key，把公钥输入文本框中即可：")]),a._v(" "),t("p",[a._v("输入以下指令,测试ssh是否配置成功：")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("ssh -T  git@github.com #针对github\nssh -T  git@gitee.com #针对码云\n")])])]),t("p",[a._v("提示有 You've successfully authenticated字样ssh配置成功。")]),a._v(" "),t("p",[a._v("若是码云仓库也是同理：用户在个人settings->ssh公钥 中进行添加。")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("配置仓库地址为ssh地址协议")])])]),a._v(" "),t("p",[a._v("先删除原地址，在添加ssh协议地址")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git remote rm origin\ngit remote add origin ssh地址\n\n")])])]),t("p",[a._v("修改代码，再次push推送测试！")]),a._v(" "),t("h1",{attrs:{id:"解决开发中冲突问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决开发中冲突问题"}},[a._v("#")]),a._v(" 解决开发中冲突问题")]),a._v(" "),t("p",[a._v("如果多人开发同一个模块，难免会修改同一个文件相同行代码！后者推送代码时候，则会提示有文件冲突（"),t("code",[a._v("conflict")]),a._v("）！导致推送失败！")]),a._v(" "),t("p",[a._v("命令行终端会提示： "),t("code",[a._v("![rejected]")]),a._v("  ，意思是拒绝。")]),a._v(" "),t("p",[a._v("解决办法：先拉取(git pull)最新代码，和同事商量怎么解决，修复之后然后再次重新提交推送！")]),a._v(" "),t("blockquote",[t("p",[a._v("拉取下来的时候，千万不要直接删除别人的代码！！！一定要沟通！！")])]),a._v(" "),t("h1",{attrs:{id:"创建-gitignore忽略文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-gitignore忽略文件"}},[a._v("#")]),a._v(" 创建.gitignore忽略文件")]),a._v(" "),t("p",[a._v("有些文件或目录如果我们只是在项目本地用到，或者这些文件/目录是自动生成的，并不想上传到远程仓库，")]),a._v(" "),t("p",[a._v("我们可以在仓库目录中创建 "),t("code",[a._v(".gitignore")]),a._v("文件，进行忽略规则的编写。")]),a._v(" "),t("p",[a._v("作用：用于忽略某个文件或目录")]),a._v(" "),t("blockquote",[t("p",[a._v("必须.git隐藏文件夹在同一目录")])]),a._v(" "),t("p",[a._v("示例：创建.gitignore文件，忽略node_modules和dist目录，忽略.DS_Store文件，此文件是苹果mac电脑自动生成的。没啥用")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("node_modules/\ndist/\n.DS_Store\n")])])]),t("p",[a._v("查看各语言忽略文件的参考："),t("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/github/gitignore"),t("OutboundLink")],1)]),a._v(" "),t("h1",{attrs:{id:"项目说明文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目说明文档"}},[a._v("#")]),a._v(" 项目说明文档")]),a._v(" "),t("p",[a._v("仓库中创建一个名为readme.md文件")]),a._v(" "),t("p",[a._v("通过此文件，可以让别人快速的了解该项目，相当于项目的使用说明文档。")]),a._v(" "),t("blockquote",[t("p",[a._v("readme.md需要和.git放在同一级目录")])]),a._v(" "),t("h1",{attrs:{id:"commit提交日志规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit提交日志规范"}},[a._v("#")]),a._v(" commit提交日志规范")]),a._v(" "),t("p",[a._v("Commit message格式：")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("<type>: <subject>\ngit commit -m 'feat: 登录功能'\ngit commit -m 'fix: 修复上传文件相关漏洞'\n")])])]),t("p",[a._v("注意冒号后面有空格。")]),a._v(" "),t("p",[a._v("type：用于说明 commit 的类别，只允许使用下面7个标识。\nsubject：是 commit 目的的简短描述，不超过50个字符，且结尾不加句号（.）。\n提交类型type有如下常见的值：")]),a._v(" "),t("ul",[t("li",[a._v("feat：新功能（feature）")]),a._v(" "),t("li",[a._v("fix：修补bug")]),a._v(" "),t("li",[a._v("docs：文档（documentation）")]),a._v(" "),t("li",[a._v("style： 格式（不影响代码运行的变动）")]),a._v(" "),t("li",[a._v("refactor：重构（即不是新增功能，也不是修改bug的代码变动）")]),a._v(" "),t("li",[a._v("test：增加测试")]),a._v(" "),t("li",[a._v("chore / build：构建过程或辅助工具的变动")])]),a._v(" "),t("h1",{attrs:{id:"创建标签-版本号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建标签-版本号"}},[a._v("#")]),a._v(" 创建标签（版本号）")]),a._v(" "),t("p",[a._v("Git 可以给仓库历史中的某一个提交打上标签，以示重要。 一般我们会使用这个功能来标记发布的代码版本（ "),t("code",[a._v("v1.0.0")]),a._v(" 、 "),t("code",[a._v("v2.0.0")]),a._v(" 等等）")]),a._v(" "),t("p",[a._v("查看仓库已有的标签")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git tag\n")])])]),t("p",[a._v("创建标签")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git tag v1.0.0  -m '完成注册'   -m '完成订单'  \n")])])]),t("p",[a._v("默认情况下，"),t("code",[a._v("git push")]),a._v(" 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git push origin v1.0.0\n")])])]),t("p",[a._v("推送本地的所有标签到远程仓库")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git push origin --tags\n")])])]),t("p",[a._v("要删除掉你本地仓库上的标签")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v(" git tag -d v1.0.0\n")])])]),t("p",[a._v("删除远程标签")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git push origin --delete v1.0.0\n")])])]),t("h1",{attrs:{id:"git分支操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git分支操作"}},[a._v("#")]),a._v(" git分支操作")]),a._v(" "),t("p",[t("strong",[a._v("认识master（amin）主分支：")])]),a._v(" "),t("ul",[t("li",[a._v("master分支：这是每个仓库默认都有的分支，一般叫主分支。主要用来发布代码正式版本的,master一般是可以直接发布在生产环境中，master 分支要确保稳定性。")]),a._v(" "),t("li",[a._v("正常开发下，是不可以在master下直接写代码的")])]),a._v(" "),t("h2",{attrs:{id:"为什么需要分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要分支"}},[a._v("#")]),a._v(" 为什么需要分支")]),a._v(" "),t("p",[a._v("分支的优点：")]),a._v(" "),t("ul",[t("li",[a._v("意味着程序员能把自己的工作从开发主线上剥离出来，开发独立功能的时候不会影响主线分支(master)的运行,更加高效。")]),a._v(" "),t("li",[a._v("当发现线上运行的项目有bug时，只需要在开一个分支进行修复，最后再合并到主线分支即可，这样不会影响master主分支")]),a._v(" "),t("li",[a._v("....")])]),a._v(" "),t("h2",{attrs:{id:"gitflow-工作流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitflow-工作流"}},[a._v("#")]),a._v(" GitFlow 工作流")]),a._v(" "),t("p",[a._v("GitFlow是团队开发的一种最佳实践，将代码划分为以下几个常用分支")]),a._v(" "),t("p",[t("strong",[a._v("master（main）主分支：")])]),a._v(" "),t("ul",[t("li",[a._v("上面只保存正式发布的版本。一般是不建议在此分支中开发")])]),a._v(" "),t("p",[t("strong",[a._v("devlop开发分支：")])]),a._v(" "),t("ul",[t("li",[a._v("从master分支中分出来的，后续开发人员主要在此分支下进行开发。")]),a._v(" "),t("li",[a._v("开发完成后，最终都要dev分支代码合并到master主分支。")])]),a._v(" "),t("p",[t("strong",[a._v("feature功能分支：")])]),a._v(" "),t("ul",[t("li",[a._v("为了开发某种特定功能，从develop分支上面分出来的功能分支的名字")]),a._v(" "),t("li",[a._v("可以采用feature-* (分支功能/分支名)的形式命名。如支付功能分支： feature-pay")])]),a._v(" "),t("p",[t("strong",[a._v("修补bug分支 (fixbug)：")])]),a._v(" "),t("ul",[t("li",[a._v("软件正式发布以后，难免会出现bug。这时就需要创建一个分支，进行bug修补。修补bug分支是从master分支上面分出来的。修补结束以后，再合并进master和dev分支")]),a._v(" "),t("li",[a._v("它的命名，可以采用fixbug-*的形式。如修复支付功能：fixbug-pay")])]),a._v(" "),t("h2",{attrs:{id:"分支相关操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支相关操作"}},[a._v("#")]),a._v(" 分支相关操作")]),a._v(" "),t("ul",[t("li",[a._v("查看仓库所有的分支:")])]),a._v(" "),t("p",[a._v("git branch")]),a._v(" "),t("ul",[t("li",[a._v("创建dev分支，并切换到dev")])]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git branch dev \ngit checkout dev\n或简写\ngit checkout -b dev\n")])])]),t("ul",[t("li",[a._v("删除分支dev:")])]),a._v(" "),t("p",[a._v("git branch -d dev")]),a._v(" "),t("ul",[t("li",[a._v("强制删除:")])]),a._v(" "),t("p",[a._v("git branch -D dev")]),a._v(" "),t("ul",[t("li",[a._v("推送dev分支到远程仓库")])]),a._v(" "),t("p",[a._v("git push origin dev")]),a._v(" "),t("ul",[t("li",[a._v("删除远程的dev分支")])]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git push  origin --delete dev\n")])])]),t("ul",[t("li",[t("p",[a._v("合并分支代码。如将dev分支合并到master主分支。")]),a._v(" "),t("p",[a._v("步骤：1 先切换到要合并的分支，2. 再把dev分支合并到当前分支")])])]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git checkout  master  \ngit merge  --no-f  dev  -m  '合并的信息'\n")])])]),t("blockquote",[t("p",[a._v("注：合并分支建议添加选项--no-f，这样合并也算一次提交，这样可以让分支线图谱更加清晰。")])]),a._v(" "),t("p",[a._v("合并的时候也可能会发生冲突，需要先解决冲突在操作。")]),a._v(" "),t("p",[t("strong",[a._v("加不加--no-f的区别：")])]),a._v(" "),t("p",[a._v("如图：")]),a._v(" "),t("ul",[t("li",[a._v("添加 "),t("code",[a._v("--no-f")]),a._v("  选项可以保存你之前的分支历史。能够更好的查看 merge合并历史，以及branch 状态。")])]),a._v(" "),t("h2",{attrs:{id:"获取远程分支代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取远程分支代码"}},[a._v("#")]),a._v(" 获取远程分支代码")]),a._v(" "),t("p",[a._v("分两种情况：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("第一种情况：若远程仓库已存在本地，则直接pull拉取即可。")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git pull origin dev # 拉取远程dev分支合并到本地\ngit checkout dev # 可以切换到远程dev分支中继续开发工作\n")])])])]),a._v(" "),t("li",[t("p",[a._v("第二种情况，本地没有远程仓库，则先克隆clone，在pull拉取。 克隆的仓库默认仅有master分支")])])]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("git clone 仓库地址 \ngit pull origin dev # 拉取远程（origin）中的dev分支\ngit checkout dev\t# 可以切换到远程dev分支中继续开发工作\n")])])]),t("h1",{attrs:{id:"github相关功能说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github相关功能说明"}},[a._v("#")]),a._v(" github相关功能说明")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("fork克隆操作：可以把别人的项目fork（理解为复制）到自己的用户名下面")])]),a._v(" "),t("li",[t("p",[a._v("issue：给项目提问题建议，这样一个开源项目就会变得越来越完善健壮。")])]),a._v(" "),t("li",[t("p",[a._v("pull request: 。如果一个开源项目有bug，你可以帮他修复完善。就需要发一个pr请求。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("发一个pr请求步骤：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("fork下来 ，克隆到本地进行修改并提交。")])]),a._v(" "),t("li",[t("p",[a._v("点击pull request即可")])]),a._v(" "),t("li",[t("p",[a._v("项目原作者会收到pr请求，如果没问题，项目作者会把此请求合并merge合并到项目中。")]),a._v(" "),t("p",[a._v("合并成功之后，你就是这个开源项目的贡献者了！，面试时候是个亮点")])])])])])])]),a._v(" "),t("h1",{attrs:{id:"github使用技巧分享"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github使用技巧分享"}},[a._v("#")]),a._v(" github使用技巧分享")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("github代码搜索技巧")])])]),a._v(" "),t("p",[a._v("如：github输入框中，找出点赞数超过100，且名字含有vue字样仓库的。")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("vue stars:>100\n")])])]),t("p",[a._v("如：在后缀名为 "),t("code",[a._v(".js")]),a._v("的文件，找出getBoundClientRect的使用。这种特别是在查找api如何使用时特别有用。")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("getBoundClientRect filename:*.js\n")])])]),t("p",[a._v("找使用用js写的放大镜相关的项目,")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("zoom language:js\n")])])]),t("p",[a._v("找使用用js写的放大镜相关的项目,且仓库点赞数超过2000（2k）")]),a._v(" "),t("div",{staticClass:"language-Plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[a._v("zoom language:js stars:>2000\n")])])]),t("p",[a._v("参考："),t("a",{attrs:{href:"https://github.com/search/advanced",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/search/advanced"),t("OutboundLink")],1),a._v(" ： 表单可视化形式，可生成高级查询条件")]),a._v(" "),t("p",[t("strong",[a._v("2. 看仓库源代码技巧")])]),a._v(" "),t("p",[a._v("进入github某个仓库，直接输入字符 "),t("code",[a._v(".")]),a._v("即可打开在线版的vscode查看源码，非常方便。")]),a._v(" "),t("blockquote",[t("p",[a._v("前提要登录github")])])])}),[],!1,null,null,null);t.default=v.exports}}]);