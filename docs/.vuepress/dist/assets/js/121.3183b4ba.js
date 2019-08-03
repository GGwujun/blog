(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{330:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-什么是单例模式？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是单例模式？","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 什么是单例模式？")]),s._v(" "),n("blockquote",[n("p",[s._v("单例模式定义：保证一个类仅有一个实例，并提供访问此实例的全局访问点。")])]),s._v(" "),n("h2",{attrs:{id:"_2-单例模式用途"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-单例模式用途","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 单例模式用途")]),s._v(" "),n("p",[s._v("如果一个类负责连接数据库的线程池、日志记录逻辑等等，"),n("strong",[s._v("此时需要单例模式来保证对象不被重复创建，以达到降低开销的目的。")])]),s._v(" "),n("h2",{attrs:{id:"_3-代码实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. 代码实现")]),s._v(" "),n("blockquote",[n("p",[s._v("需要指明的是，"),n("strong",[s._v("以下实现的单例模式均为“惰性单例”：只有在用户需要的时候才会创建对象实例。")])])]),s._v(" "),n("h3",{attrs:{id:"_3-1-python3-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-python3-实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 python3 实现")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将实例作为静态变量")]),s._v("\n  __instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n\n  @"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("staticmethod")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_instance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有初始化实例，则调用初始化函数")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为Singleton生成 instance 实例")]),s._v("\n      Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__instance\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v(" Exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请通过get_instance()获得实例"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为Singleton生成 instance 实例")]),s._v("\n      Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n  s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  s2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存地址是否相同")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"_3-2-javascript-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-javascript-实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 javascript 实现")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("Singleton")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nSingleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getInstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 由于es6没有静态类型,故闭包: 函数外部无法访问 instance")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查是否存在实例")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" s2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);