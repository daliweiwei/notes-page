(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{585:function(t,s,e){t.exports=e.p+"assets/img/image-20210504101228402.5e7543f7.png"},586:function(t,s,e){t.exports=e.p+"assets/img/image-20210504102416728.3dbda827.png"},587:function(t,s,e){t.exports=e.p+"assets/img/image-20210504103213588.d63b5ec3.png"},588:function(t,s,e){t.exports=e.p+"assets/img/image-20210504103418834.acabf1c4.png"},589:function(t,s,e){t.exports=e.p+"assets/img/image-20210504104452973.81e4374c.png"},590:function(t,s,e){t.exports=e.p+"assets/img/image-20210504104610444.bc5623d2.png"},591:function(t,s,e){t.exports=e.p+"assets/img/image-20210504105031201.4dd08695.png"},592:function(t,s,e){t.exports=e.p+"assets/img/image-20210504105437959.f4a9a07c.png"},593:function(t,s,e){t.exports=e.p+"assets/img/image-20210504105647664.46c543a7.png"},594:function(t,s,e){t.exports=e.p+"assets/img/image-20210504110100677.15a7a58d.png"},595:function(t,s,e){t.exports=e.p+"assets/img/image-20210504110235680.d03c16f5.png"},596:function(t,s,e){t.exports=e.p+"assets/img/image-20210504111438312.727bc6a5.png"},597:function(t,s,e){t.exports=e.p+"assets/img/image-20210504120333648.39036f64.png"},598:function(t,s,e){t.exports=e.p+"assets/img/image-20210504120510820.7751bb3c.png"},599:function(t,s,e){t.exports=e.p+"assets/img/image-20210504120612932.25edc2fb.png"},600:function(t,s,e){t.exports=e.p+"assets/img/image-20210504120708693.fd343f7b.png"},601:function(t,s,e){t.exports=e.p+"assets/img/image-20210504121302298.97f6e65c.png"},602:function(t,s,e){t.exports=e.p+"assets/img/image-20210504121450870.40fc550a.png"},832:function(t,s,e){"use strict";e.r(s);var a=e(34),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"项目规范及工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目规范及工具"}},[t._v("#")]),t._v(" 项目规范及工具")]),t._v(" "),a("h2",{attrs:{id:"集成-editorconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成-editorconfig"}},[t._v("#")]),t._v(" 集成 EditorConfig")]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("a",{attrs:{href:"https://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EditorConfig"),a("OutboundLink")],1)]),t._v(" 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。")])]),t._v(" "),a("p",[t._v("在项目根目录下增加 "),a("code",[t._v(".editorconfig")]),t._v(" 文件， 并配置以下内容：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Editor configuration, see http://editorconfig.org")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示是最顶层的 EditorConfig 配置文件")]),t._v("\nroot = true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表示所有文件适用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置文件字符集为 utf-8")]),t._v("\ncharset = utf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缩进风格（tab | space）")]),t._v("\nindent_style = space\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缩进大小")]),t._v("\nindent_size = 4\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 控制换行类型(lf | cr | crlf)")]),t._v("\nend_of_line = lf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去除行首的任意空白字符")]),t._v("\ntrim_trailing_whitespace = true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 始终在文件末尾插入一个新行")]),t._v("\ninsert_final_newline = true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# md 文件适用以下规则")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*.md")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nmax_line_length = off\ntrim_trailing_whitespace = false\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("VSCode 使用 EditorConfig 需要去插件市场下载插件 "),a("code",[t._v("EditorConfig for VS Code")]),t._v(" 。WebStorm 则不需要安装，直接使用 EditorConfig 配置即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(585),alt:"image-20210504101228402"}})])]),t._v(" "),a("h2",{attrs:{id:"集成-prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成-prettier"}},[t._v("#")]),t._v(" 集成 Prettier")]),t._v(" "),a("blockquote",[a("p",[a("strong",[a("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier"),a("OutboundLink")],1)]),t._v(" 是一款强大的代码格式化工具，支持 "),a("code",[t._v("JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown")]),t._v(" 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。")])]),t._v(" "),a("ul",[a("li",[t._v("安装 Prettier")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i prettier -D\n")])])]),a("ul",[a("li",[a("p",[t._v("创建 Prettier 配置文件\nPrettier 支持多种格式的配置文件，比如 "),a("code",[t._v(".json")]),t._v("、"),a("code",[t._v(".yml")]),t._v("、"),a("code",[t._v(".yaml")]),t._v("、"),a("code",[t._v(".js")]),t._v(" 等。\n在本项目根目录下创建 "),a("code",[t._v(".prettierrc")]),t._v(" 文件。")])]),t._v(" "),a("li",[a("p",[t._v("配置 "),a("code",[t._v(".prettierrc")]),t._v("\n在本项目中，进行如下简单配置，关于更多配置项信息，请前往官网查看 "),a("a",{attrs:{href:"https://prettier.io/docs/en/options.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier-Options"),a("OutboundLink")],1),t._v(" 。")])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useTabs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tabWidth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"printWidth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"singleQuote"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"trailingComma"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bracketSpacing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"semi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Prettier 安装且配置好之后，就能使用命令来格式化代码")]),t._v(" "),a("ul",[a("li",[t._v("格式化所有文件（. 表示所有文件）")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ npx prettier --write "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("VSCode 编辑器使用 "),a("code",[t._v("Prettier")]),t._v(" 配置需要下载插件 "),a("code",[t._v("Prettier - Code formatter")]),t._v("； WebStorm 则不需要安装，直接使用 EditorConfig 配置即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(586),alt:"image-20210504102416728"}})])]),t._v(" "),a("h2",{attrs:{id:"集成-eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成-eslint"}},[t._v("#")]),t._v(" 集成 ESLint")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),a("OutboundLink")],1),t._v(" 是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。其核心是通过对代码解析得到的 "),a("code",[t._v("AST")]),t._v("（Abstract Syntax Tree 抽象语法树）进行模式匹配，来分析代码达到检查代码质量和风格问题的能力。\n使用 "),a("code",[t._v("ESLint")]),t._v(" 可以尽可能的避免团队成员之间编程能力和编码习惯不同所造成的代码质量问题，一边写代码一边查找问题，如果发现错误，就给出规则提示，并且自动修复，长期下去，可以促使团队成员往同一种编码风格靠拢。")]),t._v(" "),a("ul",[a("li",[t._v("安装 eslint")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D eslint\n")])])]),a("ul",[a("li",[a("p",[t._v("配置 ESLint")]),t._v(" "),a("blockquote",[a("p",[t._v("ESLint 安装成功后，执行 "),a("code",[t._v("npx eslint --init")]),t._v("，然后按照终端操作提示完成一系列设置来创建配置文件。")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(587),alt:"image-20210504103213588"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("How would you like to use ESLint? ...(你想如何使用 ESLint?…)")]),t._v(" "),a("blockquote",[a("p",[t._v("我这里选择第三个，检查语法，发现问题，并强制代码样式")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(588),alt:"image-20210504103418834"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("What type of modules does your project use? ... （你的项目使用什么类型的模块?…）")]),t._v(" "),a("blockquote",[a("p",[t._v("项目支持 es6+语法，所以这里就直接选用第一项：JavaScript modules (import/export)")])])]),t._v(" "),a("li",[a("p",[t._v("Which framework does your project use? ... （你的项目使用哪种框架?…）")]),t._v(" "),a("blockquote",[a("p",[t._v("这里并未使用 vue 和 react，所以选择 none of these")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(589),alt:"image-20210504104452973"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Does your project use TypeScript? (你的项目使用 TypeScript 吗?)")]),t._v(" "),a("blockquote",[a("p",[t._v("项目中并没有使用 Typescript，所以选择 No")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(590),alt:"image-20210504104610444"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Where does your code run?(你的代码在哪里运行?)")]),t._v(" "),a("blockquote",[a("p",[t._v("这是 node 项目，所以不需要选择浏览器环境")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(591),alt:"image-20210504105031201"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("How would you like to define a style for your project? ... (你想怎样为你的项目定义风格？)")]),t._v(" "),a("blockquote",[a("p",[t._v("这里选择 Use a popular style guide（使用一种流行的风格指南）")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(592),alt:"image-20210504105437959"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Which style guide do you want to follow? ... (你想遵循哪种风格指南?…)")]),t._v(" "),a("p",[a("img",{attrs:{src:e(593),alt:"image-20210504105647664"}})])]),t._v(" "),a("li",[a("p",[t._v("What format do you want your config file to be in? ... (您希望配置文件的格式是什么?…)")]),t._v(" "),a("blockquote",[a("p",[t._v("我这里选择 JavaScript")])])]),t._v(" "),a("li",[a("p",[t._v("Would you like to install them now with npm?（你想现在用 npm 安装它们吗?）")]),t._v(" "),a("blockquote",[a("p",[t._v("默认 Yes，所以可以直接回车")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(594),alt:"image-20210504110100677"}})])]),t._v(" "),a("li",[a("p",[t._v("所有配置如下")]),t._v(" "),a("p",[a("img",{attrs:{src:e(595),alt:"image-20210504110235680"}})])])]),t._v(" "),a("p",[t._v("安装成功后，项目的根目录就会多一个"),a("code",[t._v(".eslintrc.js")]),t._v("文件，其中的内容就是在终端中选择的相应配置。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("VSCode 使用 ESLint 配置文件需要去插件市场下载插件 ESLint 。\n"),a("img",{attrs:{src:e(596),alt:"image-20210504111438312"}})])]),t._v(" "),a("h3",{attrs:{id:"webpack-中使用-eslint-不推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中使用-eslint-不推荐"}},[t._v("#")]),t._v(" Webpack 中使用 ESLint(不推荐)")]),t._v(" "),a("p",[t._v("首先需要安装"),a("code",[t._v("eslint-loader")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D eslint-loader\n")])])]),a("p",[t._v("然后在 webpack.config.js 中"),a("code",[t._v("module.rules")]),t._v("添加如下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    enforce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定检查的目录")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的配置项参数将会被传递到 eslint 的 CLIEngine")]),t._v("\n        formatter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint-friendly-formatter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定错误报告的格式规范")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[t._v("ESLint 的配置单独做了一个 Webpack 的"),a("code",[t._v("module.rule")]),t._v("配置，所以使用了"),a("code",[t._v("enforce: 'pre'")]),t._v("来调整了 loader 加载顺序，保证先检测代码风格，之后再做 Babel 转换等工作；")]),t._v(" "),a("li",[t._v("也可以放到 Babel 放到一起，不过要将 "),a("code",[t._v("eslint-loader")]),t._v("放到"),a("code",[t._v("babel-loader")]),t._v(" 之前检测；")]),t._v(" "),a("li",[t._v("这里为了让 ESLint 报错更加好看一些，使用了"),a("a",{attrs:{href:"https://github.com/royriojas/eslint-friendly-formatter",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-formatter-friendly"),a("OutboundLink")],1),t._v("这个 ESLint"),a("code",[t._v("formatter")]),t._v("，记得安装它："),a("code",[t._v("npm i -D eslint-formatter-friendly")])])]),t._v(" "),a("p",[t._v("新建一个 entry 文件，内容如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("不推荐理由：使用lint-stage 结合 husky就可以做eslint的代码检查与优化了")]),t._v(" "),a("h3",{attrs:{id:"webpack-中使用-stylelint-不推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中使用-stylelint-不推荐"}},[t._v("#")]),t._v(" Webpack 中使用 StyleLint(不推荐)")]),t._v(" "),a("p",[t._v("Webpack 中使用 StyleLint 是通过插件的方式来使用，这个插件的名字是 "),a("a",{attrs:{href:"https://www.npmjs.com/package/stylelint-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint-webpack-plugin"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D stylelint-webpack-plugin\n")])])]),a("p",[t._v("安装之后，按照插件的使用方式在 webpack.config.js 添加配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" StyleLintPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylelint-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StyleLintPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("默认 StyleLint-webpack-plugin 会查找项目中的 StyleLint 配置文件，根据配置文件的配置来检测 CSS 代码。")]),t._v(" "),a("p",[t._v("在 stylelint-webpack-plugin 插件中有两个跟 Webpack 编译相关的配置项：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("emitErrors")]),t._v("：默认是"),a("code",[t._v("true")]),t._v("，将遇见的错误信息发送给 webpack 的编辑器处理；")]),t._v(" "),a("li",[a("code",[t._v("failOnError")]),t._v("：默认是"),a("code",[t._v("false")]),t._v("，如果是 "),a("code",[t._v("true")]),t._v("遇见 StyleLint 报错则终止 Webpack 编译。")])]),t._v(" "),a("h2",{attrs:{id:"解决-prettier-和-eslint-的冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决-prettier-和-eslint-的冲突"}},[t._v("#")]),t._v(" 解决 Prettier 和 ESLint 的冲突")]),t._v(" "),a("p",[t._v("本项目中的 ESLint 配置中使用了 "),a("code",[t._v("Airbnb JavaScript")]),t._v(" 风格指南校验，其规则之一是代码结束后面要加分号，而在 Prettier 配置文件中加了代码结束后面不加分号的配置项，这样就有冲突了，会出现用 Prettier 格式化后的代码，ESLint 检测到格式有问题的，从而抛出错误提示。\n解决两者冲突问题，需要用到 "),a("code",[t._v("eslint-plugin-prettier")]),t._v(" 和 "),a("code",[t._v("eslint-config-prettier")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("eslint-plugin-prettier")]),t._v(" 将 Prettier 的规则设置到 ESLint 的规则中。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("eslint-config-prettier")]),t._v(" 关闭 ESLint 中与 Prettier 中会发生冲突的规则。")])]),t._v(" "),a("p",[t._v("最后形成优先级：Prettier 配置规则 > ESLint 配置规则。")]),t._v(" "),a("ul",[a("li",[t._v("安装插件")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i eslint-plugin-prettier eslint-config-prettier -D\n")])])]),a("ul",[a("li",[t._v("在 "),a("code",[t._v(".eslintrc.js")]),t._v(" 添加 prettier 插件")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'airbnb-base'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:prettier/recommended'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加 prettier 插件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样，在执行 "),a("code",[t._v("eslint --fix")]),t._v(" 命令时，ESLint 就会按照 Prettier 的配置规则来格式化代码，轻松解决二者冲突问题。")]),t._v(" "),a("h2",{attrs:{id:"集成-husky-和-lint-staged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成-husky-和-lint-staged"}},[t._v("#")]),t._v(" 集成 husky 和 lint-staged")]),t._v(" "),a("p",[t._v("在项目中已集成 "),a("code",[t._v("ESLint")]),t._v(" 和 "),a("code",[t._v("Prettier")]),t._v("，在编码时，这些工具可以对写的代码进行实时校验，在一定程度上能有效规范写的代码，但团队可能会有些人觉得这些条条框框的限制很麻烦，选择视“提示”而不见，依旧按自己的一套风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，"),a("code",[t._v("ESLint")]),t._v(" 也就形同虚设。\n所以，还需要做一些限制，让没通过 "),a("code",[t._v("ESLint")]),t._v(" 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。\n为了解决这个问题，需要用到 "),a("code",[t._v("Git Hook")]),t._v("，在本地执行 "),a("code",[t._v("git commit")]),t._v(" 的时候，就对所提交的代码进行 "),a("code",[t._v("ESLint")]),t._v(" 检测和修复（即执行 "),a("code",[t._v("eslint --fix")]),t._v("），如果这些代码没通过 "),a("code",[t._v("ESLint")]),t._v(" 规则校验，则禁止提交。\n实现这一功能，借助 "),a("code",[t._v("husky + lint-staged")]),t._v(" 。")]),t._v(" "),a("blockquote",[a("p",[t._v("husky —— Git Hook 工具，可以设置在 git 各个阶段（pre-commit、commit-msg、pre-push 等）触发的命令。\nlint-staged —— 在 git 暂存的文件上运行 linters。")])]),t._v(" "),a("h3",{attrs:{id:"配置-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-husky"}},[t._v("#")]),t._v(" 配置 husky")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("husky-init")]),t._v(" 命令快速在项目初始化一个 "),a("code",[t._v("husky")]),t._v(" 配置。在配置 "),a("code",[t._v("husky")]),t._v(" 之前必须初始化 "),a("code",[t._v("git")]),t._v("，否则可能会配置不成功")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ npx husky-init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("命令执行会经历以下四步流程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装"),a("code",[t._v("husky")]),t._v("为开发依赖")]),t._v(" "),a("p",[a("img",{attrs:{src:e(597),alt:"image-20210504120333648"}})])]),t._v(" "),a("li",[a("p",[t._v("创建"),a("code",[t._v(".husky")]),t._v("文件夹")]),t._v(" "),a("p",[a("img",{attrs:{src:e(598),alt:"image-20210504120510820"}})])]),t._v(" "),a("li",[a("p",[t._v("在 "),a("code",[t._v(".husky")]),t._v(" 目录创建 "),a("code",[t._v("pre-commit")]),t._v(" hook，并初始化 "),a("code",[t._v("pre-commit")]),t._v(" 命令为 "),a("code",[t._v("npm test")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(599),alt:"image-20210504120612932"}})])]),t._v(" "),a("li",[a("p",[t._v("修改 "),a("code",[t._v("package.json")]),t._v(" 的 "),a("code",[t._v("scripts")]),t._v("，增加 "),a("code",[t._v('"prepare": "husky install"')])]),t._v(" "),a("p",[a("img",{attrs:{src:e(600),alt:"image-20210504120708693"}})])])]),t._v(" "),a("h3",{attrs:{id:"配置-lint-staged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-lint-staged"}},[t._v("#")]),t._v(" 配置 lint-staged")]),t._v(" "),a("p",[t._v("lint-staged 这个工具一般结合 husky 来使用，它可以让 husky 的 "),a("code",[t._v("hook")]),t._v(" 触发的命令只作用于 "),a("code",[t._v("git add")]),t._v("那些文件（即 git 暂存区的文件），而不会影响到其他文件。")]),t._v(" "),a("p",[t._v("接下来，使用 lint-staged 继续优化项目。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装 lint-staged")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i lint-staged -D\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在 "),a("code",[t._v("package.json")]),t._v("里增加 lint-staged 配置项")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{vue,js,ts}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:e(601),alt:"image-20210504121302298"}})])]),t._v(" "),a("li",[a("p",[t._v("修改 "),a("code",[t._v(".husky/pre-commit hook")]),t._v(" 的触发命令为："),a("code",[t._v("npx lint-staged")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(602),alt:"image-20210504121450870"}})])])]),t._v(" "),a("p",[t._v("至此，husky 和 lint-staged 组合配置完成。")]),t._v(" "),a("h2",{attrs:{id:"集成stylelint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成stylelint"}},[t._v("#")]),t._v(" 集成stylelint")]),t._v(" "),a("p",[t._v("检测 CSS 语法使用"),a("a",{attrs:{href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("StyleLint"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("StyleLint 和 ESLint 很像，它们都只是提供了工具与规则，如何配置这些规则完全取决于使用者，所以要根据需要自己引入或配置规则。StyleLint 的代码风格也有很多社区开源版本，官方推荐的代码风格有两个：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/stylelint/stylelint-config-recommended",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint-config-recommended"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/stylelint/stylelint-config-standard",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint-config-standard"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("要使用 StyleLint 需要先安装它：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D stylelint\n")])])]),a("blockquote",[a("p",[t._v("除了 StyleLint 本身之外，还可以安装"),a("a",{attrs:{href:"https://github.com/hudochenkov/stylelint-order",target:"_blank",rel:"noopener noreferrer"}},[t._v("stylelint-order 插件"),a("OutboundLink")],1),t._v("，该插件的作用是强制在写 CSS 的时候按照某个顺序来编写。")]),t._v(" "),a("p",[t._v("例如先写定位，再写盒模型，再写内容区样式，最后写 CSS3 相关属性。这样可以极大的保证代码的可读性和风格统一。")])]),t._v(" "),a("p",[t._v("StyleLint 的配置文件是"),a("code",[t._v(".stylelintrc.json")]),t._v("，其中的写法跟 ESLint 的配置类似，都是包含"),a("code",[t._v("extend")]),t._v("和"),a("code",[t._v("rules")]),t._v("等内容，下面是一个示例：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint-config-standard"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint-config-recess-order"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"at-rule-no-unknown"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignoreAtRules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mixin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extend"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("配置文件中单独配置 "),a("code",[t._v("at-rule-no-unknown")]),t._v(" 是为了让 StyleLint 支持 SCSS 语法中的 "),a("code",[t._v("mixin")]),t._v("、"),a("code",[t._v("extend")]),t._v("、"),a("code",[t._v("content")]),t._v(" 语法，更多详细的规则，可以查看"),a("a",{attrs:{href:"https://stylelint.io/user-guide/rules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("如何在webpack中使用stylelint，可以参考专栏文章："),a("RouterLink",{attrs:{to:"/devops/webpack/06-资源处理.html#扩展3-webpack-中使用-stylelint"}},[t._v("资源处理")])],1)])}),[],!1,null,null,null);s.default=n.exports}}]);