(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{309:function(t,a,e){"use strict";e.r(a);var s=e(14),l=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java8-tomap问题-key重复如何解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java8-tomap问题-key重复如何解决"}},[t._v("#")]),t._v(" java8 toMap问题(key重复如何解决)")]),t._v(" "),a("p",[t._v("使用stream的toMap()函数时，当key重复，系统会报错相同的key不能形成一个map，那么需要解决这个问题")]),t._v(" "),a("ul",[a("li",[t._v("相同key的情况下，丢弃重复的只保留一个")]),t._v(" "),a("li",[t._v("相同key的情况下，把value变成list，形成"),a("code",[t._v("Map(Object,List<Object>)")]),t._v("的形式")])]),t._v(" "),a("h2",{attrs:{id:"解决方案一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案一"}},[t._v("#")]),t._v(" 解决方案一")]),t._v(" "),a("p",[t._v("给重复的Key设置一个新的值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Map<Integer, String> map = list.stream().collect(Collectors.toMap(Person::getId, Person::getName,(oldValue, newValue) -> newValue));\n")])])]),a("h2",{attrs:{id:"解决方案二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案二"}},[t._v("#")]),t._v(" 解决方案二")]),t._v(" "),a("p",[t._v("使用其他字段为map的key，如主键id")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Map<String, BottomAccount> map = bottomAccountList.stream().collect(Collectors.toMap(BottomAccount::getId, Function.identity()));\n")])])]),a("p",[t._v("原来的map中的key就变成了value")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("map.values().stream().map(BottomAccount::getGoodName).collect(Collectors.toList())\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);