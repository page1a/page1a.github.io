(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{329:function(t,s,a){"use strict";a.r(s);var i=a(14),_=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"独立事件下的简单概率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#独立事件下的简单概率"}},[t._v("#")]),t._v(" 独立事件下的简单概率")]),t._v(" "),s("h2",{attrs:{id:"基础概率和简单概率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概率和简单概率"}},[t._v("#")]),t._v(" 基础概率和简单概率")]),t._v(" "),s("h3",{attrs:{id:"硬币和骰子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#硬币和骰子"}},[t._v("#")]),t._v(" 硬币和骰子")]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　一个硬币有两面，我们都知道，投掷一次硬币，正面朝上的概率是50%；一个骰子有六个数字，投掷一次骰子，每个数字出现的概率均等，都是1/6")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　上述两个概率用数学解释就是：一个事件的概率 = 满足要求的事件数目 / 所有等可能性事件的数目。所以硬币正面朝上的概率 P(head) = 1/2，数字1在骰子中出现的概率是P(1) = 1/6。")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　同样的，因为一个骰子有3个偶数，抛掷一次骰子，偶数出现的概率就是P(偶数) = 3/6 = 1/2；因为没有任何一面有两个数字，所以同时出现2或3的概率是 P(2 or 3) = 0/6 = 0")])]),t._v(" "),s("h2",{attrs:{id:"概率相加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概率相加"}},[t._v("#")]),t._v(" 概率相加")]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　将一副扑克牌去掉大小王，剩余的52张牌中共四种花色，每种花色13张，很容易知道抽到J的概率是 P(J) = 4/52 = 1/13；抽到♠的概率P(♠) = 13/52 = 1/4；抽到♠J的概率 P(♠J) =  1/52；抽到J或♠的概率是多少呢？")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　先看下图：")])]),t._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("span",{staticStyle:{"font-size":"16px"}},[s("img",{attrs:{src:"/Probability/probability_1/probability_1_1.png",alt:""}})])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　J或♠的概率就是绿色和蓝色正方形所覆盖的面积，P(J or ♠) = (4 + 13 - 1)/52 = 4/13")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　由于重叠部分是P(J and ♠)，故P(J or ♠) = P(J) + P(♠) - P(J and ♠) = 4/52 + 13/52 – 1/52 = 4/13，由此得到概率相加公式：")])]),t._v(" "),s("p",{attrs:{align:"center"}},[s("span",{staticStyle:{"font-size":"18px"}},[s("strong",[t._v("P(A or B) = P(A) + P(B) – P(A and B)")])])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　将or和and用集合符号表示：")])]),t._v(" "),s("p",{attrs:{align:"center"}},[s("span",{staticStyle:{"font-size":"18px"}},[s("strong",[t._v("P(A")]),s("strong",[t._v("∪")]),s("strong",[t._v("B) = P(A) + P(B) – P(A")]),s("strong",[t._v("∩")]),s("strong",[t._v("B)")])])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　其中P(A∩B)可简写作P(AB).")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　如果P(A and B) = 0，则A和B是互斥事件，P(A)和P(B)是互斥概率。")])]),t._v(" "),s("h2",{attrs:{id:"独立事件的组合概率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#独立事件的组合概率"}},[t._v("#")]),t._v(" 独立事件的组合概率")]),t._v(" "),s("h3",{attrs:{id:"等概率事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#等概率事件"}},[t._v("#")]),t._v(" 等概率事件")]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　计算一枚硬币两次投掷出正面的概率。")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　如果H表示正面，T表示方面，两次投掷的所有可能是：HH, HT, TH, TT，所以P(HH) = 1/4")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　在投掷时，第一次投掷的结果对第二次投掷没有任何影响，我们称这两次投掷事件是相互独立的。对于独立事件，过去事件发生的概率不影响将来事件的概率。")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　对于本例，两次投掷出正面的概率 = 第一次投出正面的概率×第二次投出正面的概率，即P(HH) = P(H"),s("sub",[t._v("1")]),t._v(")·P(H"),s("sub",[t._v("2")]),t._v(") = 1/2 × 1/2 = 1/4。同理，如果有三枚硬币，P(THT) = P(T"),s("sub",[t._v("1")]),t._v(")P(H"),s("sub",[t._v("2")]),t._v(")P(T"),s("sub",[t._v("3")]),t._v(") = 1/8")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　当A"),s("sub",[t._v("1")]),t._v("A"),s("sub",[t._v("2")]),t._v("A"),s("sub",[t._v("3")]),t._v("……A"),s("sub",[t._v("n")]),t._v("相互独立，")])]),t._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("span",{staticStyle:{"font-size":"16px"}},[s("img",{attrs:{src:"/Probability/probability_1/probability_1_2.png",alt:""}})])]),t._v(" "),s("h3",{attrs:{id:"不等概率事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不等概率事件"}},[t._v("#")]),t._v(" 不等概率事件")]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　假设硬币是不均匀的，每次投掷硬币后正面朝上的几率更大，P(H) = 60%，投掷一次硬币就是一个不等概率事件。很容易得知 P(T) = 1 – P(H) = 40%")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　连续投掷两次硬币，正面朝上的概率：")])]),t._v(" "),s("p",{attrs:{align:"center"}},[s("span",{staticStyle:{"font-size":"18px"}},[t._v("P(H"),s("sub",[t._v("1")]),t._v("H"),s("sub",[t._v("2")]),t._v(") = P(H"),s("sub",[t._v("1")]),t._v(")·P(H"),s("sub",[t._v("2")]),t._v(") = 60% × 60% = 36%")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　连续投掷三次硬币，两次正面一次反面订单概率：")])]),t._v(" "),s("p",{attrs:{align:"center"}},[s("span",{staticStyle:{"font-size":"18px"}},[t._v("P(H"),s("sub",[t._v("1")]),t._v("H"),s("sub",[t._v("2")]),t._v(" T"),s("sub",[t._v("3")]),t._v(") = P(H"),s("sub",[t._v("1")]),t._v(")·P(H"),s("sub",[t._v("2")]),t._v(")·P(T"),s("sub",[t._v("3")]),t._v(") = 60% × 60% × 40% = 9.6%")])]),t._v(" "),s("p",{staticStyle:{"text-align":"left"},attrs:{align:"center"}},[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　可以看出，在独立事件样本中，等概率和不等概率事件并没有差别。")])]),t._v(" "),s("h2",{attrs:{id:"在n个独立事件中发生k个事件的概率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在n个独立事件中发生k个事件的概率"}},[t._v("#")]),t._v(" 在n个独立事件中发生k个事件的概率")]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[s("strong",[t._v("　　投掷三枚硬币，")])])]),t._v(" "),s("ol",[s("li",[s("span",{staticStyle:{"font-size":"16px"}},[s("strong",[t._v("恰好两枚正面朝上的概率？")])])]),t._v(" "),s("li",[s("span",{staticStyle:{"font-size":"16px"}},[s("strong",[t._v("至少有一次正面朝上的概率？")])])])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　可以列出所有可能的结果：HHH, HHT, HTT, HTH, THH, THT, TTH, TTT。由此可知问题1的答案P(Exactly 2 H) = 3/8；问题2的答案P(at least 1 H) = 7/8")])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　如果投掷更多的硬币，画图法就不靠谱了，必须找到数学方法。先来看样本空间的样本数量，每次投掷硬币可以得到两种结果，投掷3次，根据乘法结合律可以得到2×2×2种结果。再来看满足要求的事件数目，对于问题1，可以看作共有三个位置，其中恰好有两个安插了正面朝上的硬币，它们的顺序无关紧要，这是典型的组合问题，可以用  表示。于是问题1变成了：")])]),t._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("span",{staticStyle:{"font-size":"16px"}},[s("img",{attrs:{src:"/Probability/probability_1/probability_1_3.png",alt:""}})])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　对于问题2，相当于1减所有反面朝上的概率：")])]),t._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("span",{staticStyle:{"font-size":"16px"}},[s("img",{attrs:{src:"/Probability/probability_1/probability_1_4.png",alt:""}})])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("　　如果投掷10次硬币：")])]),t._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("span",{staticStyle:{"font-size":"16px"}},[s("img",{attrs:{src:"/Probability/probability_1/probability_1_5.png",alt:""}})])]),t._v(" "),s("p",[s("span",{staticStyle:{"font-size":"16px"}},[t._v("将上面的示例扩展，投掷n个硬币，恰好有k个正面朝上：")])]),t._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("span",{staticStyle:{"font-size":"16px"}},[s("img",{attrs:{src:"/Probability/probability_1/probability_1_6.png",alt:""}})])])])}),[],!1,null,null,null);s.default=_.exports}}]);