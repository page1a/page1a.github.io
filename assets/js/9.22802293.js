(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{281:function(a,t,_){"use strict";_.r(t);var e=_(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("head",[t("script",{attrs:{type:"text/javascript",id:"MathJax-script",async:"",src:"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"}})]),a._v(" "),t("h1",{attrs:{id:"计算图和求导的链式法则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算图和求导的链式法则"}},[a._v("#")]),a._v(" 计算图和求导的链式法则")]),a._v(" "),t("h2",{attrs:{id:"计算图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算图"}},[a._v("#")]),a._v(" 计算图")]),a._v(" "),t("p",[a._v("计算图是一种图形化的表示方法，用于描述复杂的数学运算过程。在深度学习中，计算图是对神经网络中的计算过程进行可视化的一种方式。计算图由节点和边组成，节点表示运算，边表示数据流向。")]),a._v(" "),t("h2",{attrs:{id:"链式法则-chain-rule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链式法则-chain-rule"}},[a._v("#")]),a._v(" 链式法则（Chain Rule）")]),a._v(" "),t("p",[a._v("是微积分中的一条基本法则，用于计算复合函数的导数。在深度学习中，链式法则是求解神经网络中参数梯度的关键步骤。")]),a._v(" "),t("h2",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),t("p",[a._v("已知：\n$$\nL = u^2 + v^2 + w^2\n$$")]),a._v(" "),t("p",[a._v("$$\nu = a_1 * x  + b_1 * y + c_1 * z\n$$")]),a._v(" "),t("p",[a._v("$$\nv = a_2 * x  + b_2 * y + c_2 * z\n$$")]),a._v(" "),t("p",[a._v("$$\nw = a_3 * x  + b_3 * y + c_3 * z\n$$")]),a._v(" "),t("p",[a._v("其中 a_i， b_i， c_i 是常数")]),a._v(" "),t("p",[a._v("其计算图如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("   x        u\n \n \n\n   y        v          L\n                     \n                    \n                      \n   z        w\n\n")])])]),t("p",[a._v("求L关于x的导数：")]),a._v(" "),t("p",[a._v("解：")]),a._v(" "),t("p",[a._v("$$\n\\frac{\\delta L}{\\delta x} = \\frac{\\delta L}{\\delta u} * \\frac{\\delta u}{\\delta x} + \\frac{\\delta L}{\\delta v} * \\frac{\\delta v}{\\delta x} + \\frac{\\delta L}{\\delta w} * \\frac{\\delta w}{\\delta x} \\\n$$")]),a._v(" "),t("p",[a._v("$$\n= 2u * a_1 + 2v * a_2 + 2w * a3\n$$")]),a._v(" "),t("p",[a._v("$$\n= 2a_1(a_1x + b_1y + c_1z) + 2a_2(a_2x + b_2y + c_2z) + 2a_3(a_3x + b_3y + c_3z)\n$$")])])}),[],!1,null,null,null);t.default=n.exports}}]);