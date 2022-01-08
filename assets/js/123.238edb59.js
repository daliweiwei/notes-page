(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1118:function(t,s,a){"use strict";a.r(s);var e=a(34),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端工程化篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端工程化篇"}},[t._v("#")]),t._v(" 前端工程化篇")]),t._v(" "),a("h2",{attrs:{id:"_1-webpack-常用的几个对象及解释-中级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack-常用的几个对象及解释-中级"}},[t._v("#")]),t._v(" 1. webpack 常用的几个对象及解释（中级）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("entry 入口文件")])]),t._v(" "),a("li",[a("p",[t._v("output 输出文件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一般配合node的path模块使用")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出文件名称")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bundle.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出的路径(绝对路径)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//利用node模块的path 绝对路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置模式")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),t._v("\n\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("mode 设计模式")])]),t._v(" "),a("li",[a("p",[t._v("module(loader)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("里面有一个rules数组对某种格式的文件进行转换处理(转换规则)")])]),t._v(" "),a("li",[a("p",[t._v("use数组解析顺序是从下到上逆序执行的")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对某种格式的文件进行转换处理(转换规则)")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用到正则表达式")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.css$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//后缀名为css格式的文件")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use数组解析顺序是从下到上逆序执行的")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先用css-loader 再用style-loader")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将js的样式内容插入到style标签里")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将css文件转换为js")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -----------------------------------------------------vue的")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.vue$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("plugin")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("插件配置")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" uglifyJsPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reqiure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uglifyjs-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uglifyJsPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//丑化")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("devServer")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("热更新")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目构建路径")]),t._v("\n    contentBase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path.resolve(__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),t._v(")"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动gzip亚索")]),t._v("\n    compress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置端口号")]),t._v("\n    port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动打开浏览器:否")]),t._v("\n    open"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//页面实时刷新(实时监听)")]),t._v("\n    inline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("resolve")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("配置路径规则")])]),t._v(" "),a("li",[a("p",[t._v("alias 别名")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果导入的时候不想写后缀名可以在resolve中定义extensions")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("extensions")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//alias:别名")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("alias")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//导入以vue结尾的文件时，会去寻找vue.esm.js文件")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'vue$'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue/dist/vue.esm.js"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])]),t._v(" "),a("ul",[a("li",[t._v("babel(ES6转ES5)\n"),a("ul",[a("li",[t._v("下载插件"),a("code",[t._v("babel-loader")]),t._v(",在module(loader)中配置")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-loader-和-plugin-的区别是什么-中级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-loader-和-plugin-的区别是什么-中级"}},[t._v("#")]),t._v(" 2. loader 和 plugin 的区别是什么？（中级）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("loader")]),t._v(" "),a("ul",[a("li",[t._v("loader 是用来解析非 js 文件的，因为 Webpack 原生只能解析 js 文件，如果想把那些文件一并打包的话，就需要用到 loader，loader 使 webpack 具有了解析非 js 文件的能力。")])])]),t._v(" "),a("li",[a("p",[t._v("plugin")]),t._v(" "),a("ul",[a("li",[t._v("用来给 webpack 扩展功能的，可以加载许多插件。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-webpack-与-grunt、gulp-的不同-中级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack-与-grunt、gulp-的不同-中级"}},[t._v("#")]),t._v(" "),a("strong",[t._v("3. webpack 与 grunt、gulp 的不同？")]),t._v("（中级）")]),t._v(" "),a("p",[t._v("三者都是前端构建工具，grunt 和 gulp 在早期比较流行，现在 webpack 相对来说比较主流，不过一些轻量化的任务还是会用 gulp 来处理，比如单独打包 CSS 文件等。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.gruntjs.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("grunt"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.gulpjs.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gulp"),a("OutboundLink")],1),t._v(" 是基于任务和流（Task、Stream）的。类似 jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个 web 的构建流程。")]),t._v(" "),a("p",[t._v("webpack 是基于入口的。webpack 会自动地递归解析入口所需要加载的所有资源文件，然后用不同的 Loade r来处理不同的文件，用 Plugin 来扩展 webpack 功能。")]),t._v(" "),a("p",[t._v("所以总结一下：")]),t._v(" "),a("ul",[a("li",[t._v("从构建思路来说")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("gulp和grunt需要开发者将整个前端构建过程拆分成多个"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Task")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("，并合理控制所有"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Task")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("的调用关系\nwebpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工\n")])])]),a("ul",[a("li",[t._v("对于知识背景来说\ngulp 更像后端开发者的思路，需要对于整个流程了如指掌 webpack 更倾向于前端开发者的思路。")])]),t._v(" "),a("h2",{attrs:{id:"_4-与-webpack-类似的工具还有哪些-谈谈你为什么最终选择-或放弃-使用webpack-中级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-与-webpack-类似的工具还有哪些-谈谈你为什么最终选择-或放弃-使用webpack-中级"}},[t._v("#")]),t._v(" 4. 与 webpack 类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack？（中级）")]),t._v(" "),a("p",[t._v("同样是基于入口的打包工具还有以下几个主流的：")]),t._v(" "),a("ul",[a("li",[t._v("webpack")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//rollupjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollup"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//parceljs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("parcel"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("从应用场景上来看：")])]),t._v(" "),a("ul",[a("li",[t._v("webpack适用于大型复杂的前端站点构建。")]),t._v(" "),a("li",[t._v("rollup适用于基础库的打包，如vue、react。")]),t._v(" "),a("li",[t._v("parcel适用于简单的实验性项目，他可以满足低门槛的快速看到效果。")])]),t._v(" "),a("blockquote",[a("p",[t._v("由于parcel在打包过程中给出的调试信息十分有限，所以一旦打包出错难以调试，所以不建议复杂的项目使用parcel")])]),t._v(" "),a("h2",{attrs:{id:"_5-有哪些常见的-loader-他们是解决什么问题的-中级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-有哪些常见的-loader-他们是解决什么问题的-中级"}},[t._v("#")]),t._v(" 5. 有哪些常见的 Loader？他们是解决什么问题的？（中级）")]),t._v(" "),a("ul",[a("li",[t._v("file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件。")]),t._v(" "),a("li",[t._v("url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去。")]),t._v(" "),a("li",[t._v("source-map-loader：加载额外的 Source Map 文件，以方便断点调试。")]),t._v(" "),a("li",[t._v("image-loader：加载并且压缩图片文件。")]),t._v(" "),a("li",[t._v("babel-loader：把 ES6 转换成 ES5。")]),t._v(" "),a("li",[t._v("css-loader：加载 CSS，支持模块化、压缩、文件导入等特性。")]),t._v(" "),a("li",[t._v("style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。")]),t._v(" "),a("li",[t._v("eslint-loader：通过 ESLint 检查 JavaScript 代码。")])]),t._v(" "),a("h2",{attrs:{id:"_6-有哪些常见的-plugin-他们是解决什么问题的-中级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-有哪些常见的-plugin-他们是解决什么问题的-中级"}},[t._v("#")]),t._v(" 6. 有哪些常见的 Plugin？他们是解决什么问题的？（中级）")]),t._v(" "),a("ul",[a("li",[t._v("define-plugin：定义环境变量。")]),t._v(" "),a("li",[t._v("commons-chunk-plugin：提取公共代码。")]),t._v(" "),a("li",[t._v("uglifyjs-webpack-plugin：通过"),a("code",[t._v("UglifyES")]),t._v("压缩"),a("code",[t._v("ES6")]),t._v("代码。")])]),t._v(" "),a("h2",{attrs:{id:"_7-如何利用-webpack-来优化前端性能-提高性能和体验-高级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-如何利用-webpack-来优化前端性能-提高性能和体验-高级"}},[t._v("#")]),t._v(" 7. 如何利用 webpack 来优化前端性能？（提高性能和体验）（高级）")]),t._v(" "),a("p",[t._v("用 webpack 优化前端性能是指优化 webpack 的输出结果，让打包的最终结果在浏览器运行快速高效。")]),t._v(" "),a("ul",[a("li",[t._v("压缩代码。删除多余的代码、注释、简化代码的写法等等方式。可以利用 webpack 的"),a("code",[t._v("UglifyJsPlugin")]),t._v("和"),a("code",[t._v("ParallelUglifyPlugin")]),t._v("来压缩 JS 文件， 利用"),a("code",[t._v("cssnano")]),t._v("（css-loader?minimize）来压缩 css。")]),t._v(" "),a("li",[t._v("利用 CDN 加速。在构建过程中，将引用的静态资源路径修改为 CDN 上对应的路径。可以利用 webpack 对于"),a("code",[t._v("output")]),t._v("参数和各loader的"),a("code",[t._v("publicPath")]),t._v("参数来修改资源路径。")]),t._v(" "),a("li",[t._v("删除死代码（Tree Shaking）。将代码中永远不会走到的片段删除掉。可以通过在启动 webpack 时追加参数"),a("code",[t._v("--optimize-minimize")]),t._v("来实现。")]),t._v(" "),a("li",[t._v("提取公共代码。")])]),t._v(" "),a("h2",{attrs:{id:"_8-怎么配置单页应用-怎么配置多页应用-高级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-怎么配置单页应用-怎么配置多页应用-高级"}},[t._v("#")]),t._v(" 8.怎么配置单页应用？怎么配置多页应用？（高级）")]),t._v(" "),a("p",[t._v("单页应用可以理解为 webpack 的标准模式，直接在"),a("code",[t._v("entry")]),t._v("中指定单页应用的入口即可，这里不再赘述。")]),t._v(" "),a("p",[t._v("多页应用的话，可以使用 webpack 的 "),a("code",[t._v("AutoWebPlugin")]),t._v("来完成简单自动化的构建，但是前提是项目的目录结构必须遵守他预设的规范。 多页应用中要注意的是：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("每个页面都有公共的代码，可以将这些代码抽离出来，避免重复的加载。比如，每个页面都引用了同一套 css   样式表。")])]),t._v(" "),a("li",[a("p",[t._v("随着业务的不断扩展，页面可能会不断的追加，所以一定要让入口的配置足够灵活，避免每次添加新页面还需要修改构建配置。")])])]),t._v(" "),a("h2",{attrs:{id:"_9-npm-打包时需要注意哪些-如何利用-webpack-来更好的构建-高级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-npm-打包时需要注意哪些-如何利用-webpack-来更好的构建-高级"}},[t._v("#")]),t._v(" 9.npm 打包时需要注意哪些？如何利用 webpack 来更好的构建？（高级）")]),t._v(" "),a("p",[a("code",[t._v("Npm")]),t._v("是目前最大的 JavaScript 模块仓库，里面有来自全世界开发者上传的可复用模块。你可能只是 JS 模块的使用者，但是有些情况你也会去选择上传自己开发的模块。 关于 NPM 模块上传的方法可以去"),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//docs.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("上进行学习，这里只讲解如何利用 webpack 来构建。")]),t._v(" "),a("p",[t._v("NPM 模块需要注意以下问题：")]),t._v(" "),a("ol",[a("li",[t._v("要支持 CommonJS 模块化规范，所以要求打包后的最后结果也遵守该规则。")]),t._v(" "),a("li",[t._v("Npm 模块使用者的环境是不确定的，很有可能并不支持 ES6，所以打包的最后结果应该是采用ES5编写的。并且如果 ES5 是经过转换的，请最好连同 SourceMap 一同上传。")]),t._v(" "),a("li",[t._v("Npm 包大小应该是尽量小（有些仓库会限制包大小）。")]),t._v(" "),a("li",[t._v("发布的模块不能将依赖的模块也一同打包，应该让用户选择性的去自行安装。这样可以避免模块应用者再次打包时出现底层模块被重复打包的情况。")]),t._v(" "),a("li",[t._v("UI 组件类的模块应该将依赖的其它资源文件，例如"),a("code",[t._v(".css")]),t._v("文件也需要包含在发布的模块里。")])]),t._v(" "),a("p",[t._v("基于以上需要注意的问题，我们可以对于 webpack 配置做以下扩展和优化：")]),t._v(" "),a("ol",[a("li",[t._v("CommonJS 模块化规范的解决方案： 设置"),a("code",[t._v("output.libraryTarget='commonjs2'")]),t._v("使输出的代码符合CommonJS2 模块化规范，以供给其它模块导入使用。")]),t._v(" "),a("li",[t._v("输出ES5 代码的解决方案：使用"),a("code",[t._v("babel-loader")]),t._v("把 ES6 代码转换成 ES5 的代码。再通过开启"),a("code",[t._v("devtool: 'source-map'")]),t._v("输出 SourceMap 以发布调试。")]),t._v(" "),a("li",[t._v("Npm 包大小尽量小的解决方案：Babel 在把 ES6 代码转换成 ES5 代码时会注入一些辅助函数，最终导致每个输出的文件中都包含这段辅助函数的代码，造成了代码的冗余。解决方法是修改"),a("code",[t._v(".babelrc")]),t._v("文件，为其加入"),a("code",[t._v("transform-runtime")]),t._v("插件。")]),t._v(" "),a("li",[t._v("不能将依赖模块打包到NPM模块中的解决方案：使用"),a("code",[t._v("externals")]),t._v("配置项来告诉 webpack 哪些模块不需要打包。")]),t._v(" "),a("li",[t._v("对于依赖的资源文件打包的解决方案：通过"),a("code",[t._v("css-loader")]),t._v("和"),a("code",[t._v("extract-text-webpack-plugin")]),t._v("来实现，配置如下：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ExtractTextPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'extract-text-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增加对 CSS 文件的支持")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.css")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提取出 Chunk 中的 CSS 代码到单独的文件中")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExtractTextPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExtractTextPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出的 CSS 文件名称")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);