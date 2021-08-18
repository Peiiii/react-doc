"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[164],{6179:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(272),r=a(2151),c=(a(7294),a(3905)),l=["components"],p={};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'                                                 _.-"\\\n                                            _.-"      \\\n                                          ,-"          \\\n                                          \\    create    \\\n                                          \\ \\    react    \\\n                                          \\ \\      doc     \\\n                                            \\ \\         _.-;\n                                            \\ \\    _.-"   :\n                                              \\ \\,-"    _.-"\n                                              \\(   _.-"\n                                                `--"\n')),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/create-react-doc"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/create-react-doc",alt:"npm version"})),"\n",(0,c.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/create-react-doc"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dw/create-react-doc.svg",alt:"week download"})),"\n",(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/MuYunyun/create-react-doc/traffic/traffic-create-react-doc/views.svg",alt:"views"}),"\n",(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/MuYunyun/create-react-doc/traffic/traffic-create-react-doc/views_per_week.svg",alt:"views"}),"\n",(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/MuYunyun/create-react-doc/traffic/traffic-create-react-doc/clones_per_week.svg",alt:"clones"}),"\n",(0,c.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/l/create-react-doc.svg",alt:"LICENSE MIT"})),(0,c.kt)("h1",null,"Create React Doc"),(0,c.kt)("p",null,"Create React Doc 是一个使用 React 的 markdown 文档站点生成工具。就像 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app")," 一样，开发者可以使用 Create React Doc 来开发、部署 markdown 站点或者博客而无需关心站点环境配置信息。"),(0,c.kt)("h2",null,"特性"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"建站理念: 文件即站点 (Files as a site)。"),(0,c.kt)("li",{parentName:"ul"},"开箱即用: 一键生成可运行文档站点, 无需关心站点环境配置信息。"),(0,c.kt)("li",{parentName:"ul"},"自定义展示目录: 天然适合搭建 monorepo 文档、博客等站点。"),(0,c.kt)("li",{parentName:"ul"},"性能: 文档支持懒加载提升站点加载速度。"),(0,c.kt)("li",{parentName:"ul"},"工作流: 集成 Github action, 自动化打包、发布站点。")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"http://muyunyun.cn/create-react-doc/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B"},"快速上手"))),(0,c.kt)("h2",null,"主题"),(0,c.kt)("p",null,"当前默认使用的主题是 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/MuYunyun/create-react-doc/tree/main/packages/crd-seed"},"crd-seed"),"。"),(0,c.kt)("p",null,"使用该主题搭建的站点"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"http://muyunyun.cn/blog"},"blog"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("img",{parentName:"li",src:"http://with.muyunyun.cn/ec330b8ac2175c828be41f446f9f9619.jpg",alt:null})),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("img",{parentName:"li",src:"http://with.muyunyun.cn/2e7440e4256debda2d73a4e6392c7146.jpg-300",alt:null})))),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://muyunyun.cn/diana/"},"diana"))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"如果你的产品从中受益，欢迎",(0,c.kt)("a",{href:"https://github.com/MuYunyun/create-react-doc/issues/new",target:"_blank"},"留言补充"))),(0,c.kt)("h2",null,"快速上手"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"create-react-doc")," 非常容易上手。开发者不需要额外安装或配置 webpack 或者 Babel 等工具，它们被内置隐藏在脚手架中，因此开发者可以专心于文档的书写。"),(0,c.kt)("p",null,"如果你想在当前文件下建立站点文件 ",(0,c.kt)("inlineCode",{parentName:"p"},"doc"),", 这里提供如下三种方式快速建站:"),(0,c.kt)("h3",null,"npx"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-doc doc\n")),(0,c.kt)("h3",null,"npm"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"npm init create-react-doc doc\n")),(0,c.kt)("h3",null,"yarn"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create react-doc doc\n")),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"http://with.muyunyun.cn/0f0cf6e8cb68b18399eac2927f74b063.jpg",alt:null})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"如果想把模板内容内容拉取到当前文件夹, 则可以将如上命令的 ",(0,c.kt)("inlineCode",{parentName:"p"},"doc")," 替换为 ",(0,c.kt)("inlineCode",{parentName:"p"},"."),", 比如执行 ",(0,c.kt)("inlineCode",{parentName:"p"},"npx create-react-doc ."),"。")),(0,c.kt)("p",null,"接着执行 ",(0,c.kt)("inlineCode",{parentName:"p"},"cd doc && yarn && yarn start"),", 可以在 ",(0,c.kt)("inlineCode",{parentName:"p"},"localhost: 3000")," 预览站点, 如果站点文档发生改变, 站点将自动重新加载。"),(0,c.kt)("img",{src:"http://with.muyunyun.cn/2bbd4d8da3165e1a09a88f5e6a114009.jpg",width:"900"}),(0,c.kt)("h2",null,"高阶用法"),(0,c.kt)("p",null,"与 git 文件结构类似, 如果在展示的文件夹中有私有文件不方便展示在文档站点, 可以在 ",(0,c.kt)("inlineCode",{parentName:"p"},".gitignore")," 文件中设置过滤文件, 这样它们就不会展示在文档站点中了。eg: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/MuYunyun/blog/blob/main/.gitignore"},".gitignore")),(0,c.kt)("h2",null,"其它工具"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/MuYunyun/create-react-doc/tree/main/packages/leetcode-cli"},"crd-leetcode-cli"),": 提供将 ",(0,c.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/"},"leetcode")," 中已 AC 的题目转化为 markdown 表格的能力。")))}u.isMDXComponent=!0}}]);