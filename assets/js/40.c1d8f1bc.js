(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{315:function(e,t,a){"use strict";a.r(t);var s=a(14),l=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"kubectl常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubectl常用命令"}},[e._v("#")]),e._v(" kubectl常用命令")]),e._v(" "),t("h2",{attrs:{id:"查看集群状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看集群状态"}},[e._v("#")]),e._v(" 查看集群状态")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl version --short=true 查看客户端及服务端程序版本信息\nkubectl cluster-info 查看集群信息\n")])])]),t("h2",{attrs:{id:"创建资源对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建资源对象"}},[e._v("#")]),e._v(" 创建资源对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl run name --image=(镜像名) --replicas=(备份数) --port=(容器要暴露的端口) --labels=(设定自定义标签)\nkubectl create -f **.yaml  陈述式对象配置管理方式\nkubectl apply -f **.yaml  声明式对象配置管理方式（也适用于更新等）\n")])])]),t("h2",{attrs:{id:"查看资源对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看资源对象"}},[e._v("#")]),e._v(" 查看资源对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('kubectl get namespace 查看命名空间\nkubectl get pods,services -o wide (-o 输出格式 wide表示plain-text)\nkubectl get pod -l "key=value,key=value" -n kube-system (-l 标签选择器(多个的话是与逻辑)，-n 指定命名空间，不指定默认default)\nkubectl get pod -l "key1 in (val1,val2),!key2" -L key (-l 基于集合的标签选择器, -L查询结果显示标签) 注意：为了避免和shell解释器解析!,必须要为此类表达式使用单引号\nkubectl get pod -w(-w 监视资源变动信息)\n')])])]),t("h2",{attrs:{id:"删除资源对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除资源对象"}},[e._v("#")]),e._v(" 删除资源对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl delete [pods/services/deployments/...] name 删除指定资源对象\nkubectl delete [pods/services/deployments/...] -l key=value -n kube-system  删除kube-system下指定标签的资源对象\nkubectl delete [pods/services/deployments/...] --all -n kube-system 删除kube-system下所有资源对象\nkubectl delete [pods/services/deployments/...] source_name --force --grace-period=0 -n kube-system 强制删除Terminating的资源对象\nkubectl delete -f xx.yaml\nkubectl apply -f xx.yaml --prune -l <labels>(一般不用这种方式删除)\nkubectl delete rs rs_name --cascade=fale(默认删除控制器会同时删除其管控的所有Pod对象，加上cascade=false就只删除rs)\n")])])]),t("h2",{attrs:{id:"将服务暴露出去-创建service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将服务暴露出去-创建service"}},[e._v("#")]),e._v(" 将服务暴露出去(创建Service)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('kubectl expose deployments/deployment_name --type="NodePort" --port=(要暴露的容器端口) --name=(Service对象名字)\n')])])])])}),[],!1,null,null,null);t.default=l.exports}}]);