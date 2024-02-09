(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{305:function(n,e,r){"use strict";r.r(e);var t=r(14),a=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"golang实现tcp通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#golang实现tcp通信"}},[n._v("#")]),n._v(" golang实现tcp通信")]),n._v(" "),e("h2",{attrs:{id:"服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[n._v("#")]),n._v(" 服务端")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('//Server.go\npackage main\n\nimport (\n    "fmt"\n    "net"\n    "os"\n)\n\nfunc main(){\n\n    //服务端在本机8888端口建立tcp监听\n\n    listener,err :=net.Listen("tcp","127.0.0.1:8888")\n    ServerHandleError(err,"net.listen")\n\n\n\n    for {\n        //循环接入所有客户端得到专线连接\n        conn,e := listener.Accept()\n        ServerHandleError(e,"listener.accept")\n        //开辟独立协程与该客聊天\n        go ChatWith(conn)\n    }\n\n\n}\n\nfunc ServerHandleError(err error,when string) {\n    if err != nil {\n        fmt.Println(err, when)\n        os.Exit(1)\n    }\n}\n\n//在conn网络专线中与客户端对话\nfunc ChatWith(conn net.Conn){\n\n    //创建消息缓冲区\n    buffer := make([]byte, 1024)\n    for {\n        ///---一个完整的消息回合\n\n\n        //读取客户端发来的消息放入缓冲区\n        n,err := conn.Read(buffer)\n        ServerHandleError(err,"conn.read buffer")\n\n        //转化为字符串输出\n        clientMsg := string(buffer[0:n])\n        fmt.Printf("收到消息",conn.RemoteAddr(),clientMsg)\n\n\n        //回复客户端消息\n        if clientMsg != "im off" {\n            conn.Write([]byte("已读:"+clientMsg))\n        } else {\n            conn.Write([]byte("bye"))\n            break\n        }\n    }\n    conn.Close()\n    fmt.Printf("客户端断开连接",conn.RemoteAddr())\n\n}\n')])])]),e("h2",{attrs:{id:"客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[n._v("#")]),n._v(" 客户端")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('//Client.go\npackage main\n\nimport (\n    "bufio"\n    "fmt"\n    "net"\n    "os"\n)\n\nfunc ClientHandleError(err error, when string){\n    if err != nil {\n        fmt.Println(err, when)\n        os.Exit(1)\n    }\n\n}\n\n\nfunc main(){\n\n    //拨号远程地址，简历tcp连接\n    conn, err := net.Dial("tcp","127.0.0.1:8888")\n    ClientHandleError(err, "client conn error")\n\n    //预先准备消息缓冲区\n    buffer := make([]byte,1024)\n\n\n    //准备命令行标准输入\n    reader := bufio.NewReader(os.Stdin)\n\n    for {\n        lineBytes,_,_ := reader.ReadLine()\n        conn.Write(lineBytes)\n        n,err := conn.Read(buffer)\n        ClientHandleError(err, "client read error")\n\n        serverMsg := string(buffer[0:n])\n        fmt.Printf("服务端msg",serverMsg)\n        if serverMsg == "bye" {\n            break\n        }\n\n    }\n\n}\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);