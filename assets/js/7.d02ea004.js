(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(t,a,_){"use strict";_.r(a);var v=_(14),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("head",[a("script",{attrs:{type:"text/javascript",id:"MathJax-script",async:"",src:"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"}})]),t._v(" "),a("h1",{attrs:{id:"机器学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器学习笔记"}},[t._v("#")]),t._v(" 机器学习笔记")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("anaconda\nubuntu启动anaconda图形化界面\nanaconda-navigator")])]),t._v(" "),a("li",[a("p",[t._v("jupyter notebook\n配置美化界面：jt -t grade3 -f fira -fs 16 -cellw 90% -ofs 11 -dfs 11 -T")])]),t._v(" "),a("li",[a("p",[t._v("Scikit-learn\npip install scikit-learn")])]),t._v(" "),a("li",[a("p",[t._v("Keras\npip install keras")])])]),t._v(" "),a("h2",{attrs:{id:"归一化操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#归一化操作"}},[t._v("#")]),t._v(" 归一化操作")]),t._v(" "),a("p",[t._v("归一化操作是数据处理中的一种常见操作，其目的是将数据调整到一个标准的范围或分布，以便更好地进行比较、分析和训练模型。在不同的领域和上下文中，归一化可以有不同的含义和方法。")]),t._v(" "),a("p",[t._v("在机器学习和深度学习中，常见的归一化操作是对数据进行零均值化和标准差归一化（Z-score normalization）。这种归一化操作通过以下步骤实现：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("零均值化（Zero Mean）： 计算数据的均值，然后将数据减去均值。这样做的目的是使数据的均值变为零。")])]),t._v(" "),a("li",[a("p",[t._v("标准差归一化（Standard Deviation Normalization）： 计算数据的标准差，然后将数据除以标准差。这样做的目的是使数据的标准差变为1。")])])]),t._v(" "),a("p",[t._v("这种归一化操作使得数据具有零均值和单位方差，有助于加速模型的收敛，提高模型的稳定性，同时也有助于避免某些特征对模型训练产生较大的影响。")]),t._v(" "),a("p",[t._v("在图像处理中，归一化通常指将图像的像素值缩放到特定的范围，例如[0, 1]或[-1, 1]。这种操作有助于提高图像数据的稳定性，同时也是深度学习中常见的预处理步骤。")]),t._v(" "),a("p",[t._v("总的来说，归一化操作是数据预处理中的重要步骤，有助于提高模型的性能和泛化能力。")]),t._v(" "),a("h2",{attrs:{id:"如何设计一个具有通用性的程序框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设计一个具有通用性的程序框架"}},[t._v("#")]),t._v(" 如何设计一个具有通用性的程序框架：")]),t._v(" "),a("h3",{attrs:{id:"_1-处理数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-处理数据"}},[t._v("#")]),t._v(" 1. 处理数据")]),t._v(" "),a("p",[t._v("如何将文件夹中的数据传送导网络中")]),t._v(" "),a("ul",[a("li",[t._v("输入： 训练数据的路径，epoch，batch_size")]),t._v(" "),a("li",[t._v("输出：训练图片和目标值")])]),t._v(" "),a("h3",{attrs:{id:"_2-构建网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-构建网络"}},[t._v("#")]),t._v(" 2. 构建网络")]),t._v(" "),a("h4",{attrs:{id:"卷积层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卷积层"}},[t._v("#")]),t._v(" 卷积层")]),t._v(" "),a("p",[t._v("在深度学习中，卷积神经网络（CNN）通常采用一系列卷积层来逐渐提取和学习输入数据的特征。在这个过程中，每个卷积层都包含多个卷积核（或滤波器），这些卷积核负责学习不同的特征。")]),t._v(" "),a("p",[t._v("卷积核的数量决定了卷积层输出的特征图的深度（通道数）。每个卷积核都负责检测输入数据中的某种特定特征。通过增加卷积核的数量，网络可以学习提取更丰富和复杂的特征，有助于提高模型的性能。")]),t._v(" "),a("p",[t._v("计算卷积层输出大小的公式为：")]),t._v(" "),a("p",[t._v("$$\noutputSize = (inputSize + 2 * padding - kernelSize) / stride  + 1\n$$")]),t._v(" "),a("h4",{attrs:{id:"全连接层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全连接层"}},[t._v("#")]),t._v(" 全连接层")]),t._v(" "),a("p",[t._v("全连接层的作用是将输入的特征进行线性变换，这包括两个步骤：线性组合和非线性变换。")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("线性组合：")]),t._v("  在神经网络中，全连接层的作用是将输入的特征进行线性变换，这包括两个步骤：线性组合和非线性变换。将输入特征展平为一维向量，然后与权重矩阵相乘。在这里，假设输入特征是 x，权重矩阵是 W，那么线性组合的结果是 "),a("strong",[t._v("z=Wx")]),t._v("。")])]),t._v(" "),a("p",[t._v("如果输入特征 x 是一个大小为 16 × 5 × 5 的三维张量，展平后就是一个大小为 16×25 的一维向量。权重矩阵 W 的大小是 120×(16×25)，其中 120 是输出特征的数量。因此，线性组合的结果 z 是一个大小为 120 的一维向量。")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("非线性变换：")]),t._v(" 将线性组合的结果加上偏置项，并经过一个非线性的激活函数。假设偏置项是 b，那么输出 y 可以表示为 "),a("strong",[t._v("y=f(z+b)")]),t._v("，其中 f 是激活函数。")])]),t._v(" "),a("p",[t._v("在神经网络中，常用的激活函数包括 ReLU（Rectified Linear Unit）等。这一步的目的是引入非线性性，使得网络可以学习更复杂的模式和特征。")]),t._v(" "),a("p",[t._v("总结起来，全连接层的计算过程可以表示为：")]),t._v(" "),a("p",[t._v("$$\ny = f(W_x + b)\n$$")]),t._v(" "),a("p",[t._v("其中，W 是权重矩阵，b 是偏置项，x 是输入特征，f 是激活函数。这个过程是神经网络中前向传播的一部分，用于将输入的特征映射到输出。")]),t._v(" "),a("h3",{attrs:{id:"_3-损失函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-损失函数"}},[t._v("#")]),t._v(" 3. 损失函数")]),t._v(" "),a("h3",{attrs:{id:"_4-优化函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-优化函数"}},[t._v("#")]),t._v(" 4. 优化函数")]),t._v(" "),a("h3",{attrs:{id:"_5-模型保存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-模型保存"}},[t._v("#")]),t._v(" 5. 模型保存")])])}),[],!1,null,null,null);a.default=s.exports}}]);