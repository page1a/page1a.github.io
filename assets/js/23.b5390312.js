(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{296:function(e,n,c){"use strict";c.r(n);var r=c(14),a=Object(r.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"docker-五-docker三剑客之docker-machine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-五-docker三剑客之docker-machine"}},[e._v("#")]),e._v(" Docker(五)：Docker三剑客之Docker Machine")]),e._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),n("p",[e._v("上篇文章"),n("a",{attrs:{href:"/Docker/docker_4.html",target:"_blank"}},[e._v("Docker(四)：Docker 三剑客之 Docker Compose")]),e._v(" 介绍了 Docker Compose，这篇文章我们来了解 Docker Machine 。")]),e._v(" "),n("h2",{attrs:{id:"docker-machine-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-machine-介绍"}},[e._v("#")]),e._v(" Docker Machine 介绍")]),e._v(" "),n("p",[e._v("Docker Machine 是 Docker 官方编排（Orchestration）项目之一，负责在多种平台上快速安装 Docker 环境。")]),e._v(" "),n("p",[e._v("Docker Machine 是一个工具，它允许你在虚拟宿主机上安装 Docker Engine ，并使用 docker-machine 命令管理这些宿主机。你可以使用 Machine 在你本地的 Mac 或 Windows box、公司网络、数据中心、或像 AWS 或 Digital Ocean 这样的云提供商上创建 Docker 宿主机。")]),e._v(" "),n("p",[e._v("使用 docker-machine 命令，你可以启动、审查、停止和重新启动托管的宿主机、升级 Docker 客户端和守护程序、并配置 Docker 客户端与你的宿主机通信。")]),e._v(" "),n("h2",{attrs:{id:"为什么要使用它"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用它"}},[e._v("#")]),e._v(" 为什么要使用它？")]),e._v(" "),n("p",[e._v("Docker Machine 使你能够在各种 Linux 上配置多个远程 Docker 宿主机。\n此外，Machine 允许你在较早的 Mac 或 Windows 系统上运行 Docker，如上一主题所述。\nDocker Machine 有这两个广泛的用例。")]),e._v(" "),n("ul",[n("li",[e._v("我有一个较旧的桌面系统，并希望在 Mac 或 Windows 上运行 Docker")])]),e._v(" "),n("p",[e._v("如果你主要在不符合新的 Docker for Mac 和 Docker for Windows 应用程序的旧 Mac 或 Windows 笔记本电脑或台式机上工作，则需要 Docker Machine 来在本地“运行Docker”（即Docker Engine）。在 Mac 或 Windows box 中使用 Docker Toolbox 安装程序安装 Docker Machine 将为 Docker Engine 配置一个本地的虚拟机，使你能够连接它、并运行 docker 命令。")]),e._v(" "),n("ul",[n("li",[e._v("我想在远程系统上配置 Docker 宿主机")])]),e._v(" "),n("p",[e._v("Docker Engine Linux 系统上原生地运行。如果你有一个 Linux 作为你的主系统，并且想要运行 docker 命令，所有你需要做的就是下载并安装 Docker Engine 。然而，如果你想要在网络上、云中甚至本地配置多个 Docker 宿主机有一个有效的方式，你需要 Docker Machine。")]),e._v(" "),n("p",[e._v("无论你的主系统是 Mac、Windows 还是 Linux，你都可以在其上安装 Docker Machine，并使用 docker-machine 命令来配置和管理大量的 Docker 宿主机。它会自动创建宿主机、在其上安装 Docker Engine 、然后配置 docker 客户端。每个被管理的宿主机（“machine”）是 Docker 宿主机和配置好的客户端的结合。")]),e._v(" "),n("h2",{attrs:{id:"docker-engine-和-docker-machine-有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-engine-和-docker-machine-有什么区别"}},[e._v("#")]),e._v(" Docker Engine 和 Docker Machine 有什么区别？")]),e._v(" "),n("p",[e._v("当人们说“Docker”时，他们通常是指 Docker Engine，它是一个客户端 - 服务器应用程序，由 Docker 守护进程、一个REST API指定与守护进程交互的接口、和一个命令行接口（CLI）与守护进程通信（通过封装REST API）。Docker Engine 从 CLI 中接受docker 命令，例如 docker run 、docker ps 来列出正在运行的容器、docker images 来列出镜像，等等。")]),e._v(" "),n("p",[e._v("Docker Machine 是一个用于配置和管理你的宿主机（上面具有 Docker Engine 的主机）的工具。通常，你在你的本地系统上安装 Docker Machine。Docker Machine有自己的命令行客户端 docker-machine 和 Docker Engine 客户端 docker。你可以使用 Machine 在一个或多个虚拟系统上安装 Docker Engine。")]),e._v(" "),n("p",[e._v("这些虚拟系统可以是本地的（就像你在 Mac 或 Windows 上使用 Machine 在 VirtualBox 中安装和运行 Docker Engine 一样）或远程的（就像你使用 Machine 在云提供商上 provision Dockerized 宿主机一样）。Dockerized 宿主机本身可以认为是，且有时就称为，被管理的“machines”。")]),e._v(" "),n("h2",{attrs:{id:"安装和使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用"}},[e._v("#")]),e._v(" 安装和使用")]),e._v(" "),n("p",[e._v("Docker Machine 安装很简单")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("curl -L https://github.com/docker/machine/releases/download/v0.14.0/docker-machine-`uname -s`-`uname -m` >/tmp/docker-machine && \\\ninstall /tmp/docker-machine /usr/local/bin/docker-machine\n\n#完成后，查看版本信息。\ndocker-machine -v\ndocker-machine version 0.14.0, build 89b8332\n")])])]),n("p",[n("strong",[e._v("创建一个 VirtualBox")])]),e._v(" "),n("p",[e._v("查看是否存在可用的主机")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$  docker-machine ls\nNAME   ACTIVE   DRIVER   STATE   URL   SWARM   DOCKER   ERRORS\n")])])]),n("p",[e._v("创建一个主机:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ docker-machine create --driver virtualbox default\nRunning pre-create checks...\n(default) Default Boot2Docker ISO is out-of-date, downloading the latest release...\n(default) Latest release for github.com/boot2docker/boot2docker is v17.12.1-ce\n(default) Downloading C:\\Users\\hkrt-neo\\.docker\\machine\\cache\\boot2docker.iso from https://github.com/boot2docker/boot2docker/releases/download/v17.12.1-ce/boot2docker.iso...\n(default) 0%....10%....20%....30%....40%....50%....60%....70%....80%....90%....100%\nCreating machine...\n(default) Copying C:\\Users\\hkrt-neo\\.docker\\machine\\cache\\boot2docker.iso to C:\\Users\\hkrt-neo\\.docker\\machine\\machines\\default\\boot2docker.iso...\n(default) Creating VirtualBox VM...\n(default) Creating SSH key...\n(default) Starting the VM...\n(default) Check network to re-create if needed...\n(default) Windows might ask for the permission to configure a dhcp server. Sometimes, such confirmation window is minimized in the taskbar.\n(default) Waiting for an IP...\nWaiting for machine to be running, this may take a few minutes...\nDetecting operating system of created instance...\nWaiting for SSH to be available...\nDetecting the provisioner...\nProvisioning with boot2docker...\nCopying certs to the local machine directory...\nCopying certs to the remote machine...\nSetting Docker configuration on the remote daemon...\n...\n")])])]),n("p",[e._v("这个命令会下载 boot2docker，基于 boot2docker 创建一个虚拟主机。boot2docker 是一个轻量级的 linux 发行版，基于专门为运行 docker 容器而设计的 Tiny Core Linux 系统，完全从 RAM 运行，45Mb左右，启动时间约5s。")]),e._v(" "),n("p",[e._v("再次查看服务列表")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker-machine ls\nNAME      ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER        ERRORS\ndefault   *        virtualbox   Running   tcp://192.168.99.100:2376           v17.12.1-ce\n")])])]),n("p",[e._v("发现已经存在一个虚拟主机")]),e._v(" "),n("p",[e._v("创建主机成功后，可以通过 env 命令来让后续操作对象都是目标主机。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ docker-machine env default\nexport DOCKER_TLS_VERIFY="1"\nexport DOCKER_HOST="tcp://192.168.99.100:2376"\nexport DOCKER_CERT_PATH="C:\\Users\\hkrt-neo\\.docker\\machine\\machines\\default"\nexport DOCKER_MACHINE_NAME="default"\nexport COMPOSE_CONVERT_WINDOWS_PATHS="true"\n# Run this command to configure your shell:\n# eval $("D:\\Program Files\\Docker Toolbox\\docker-machine.exe" env default)\n')])])]),n("p",[e._v("相当于配置了一个环境变量 default，后续根据提示在命令行输入命令之后就可以操作 default 主机。")]),e._v(" "),n("p",[e._v("可以通过 SSH 登录到主机")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ docker-machine ssh default\n\ndocker@default:~$ docker --version\nDocker version 17.12.1-ce, build 7390fc6\n")])])]),n("p",[e._v("连接到主机之后你就可以在其上使用 Docker 了，退出虚拟机使用命令："),n("code",[e._v("exit")])]),e._v(" "),n("p",[n("strong",[e._v("Docker Machine 常用命令")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//创建虚拟机\ndocker-machine create [OPTIONS] [arg...]\n\n//移除虚拟机\ndocker-machine rm [OPTIONS] [arg...]\n\n//登录虚拟机\ndocker-machine ssh [arg...]\n\n//docker客户端配置环境变量\ndocker-machine env [OPTIONS] [arg...]\n\n//检查机子信息\ndocker-machine inspect\n\n//查看虚拟机列表\ndocker-machine ls [OPTIONS] [arg...]\n\n//查看虚拟机状态\ndocker-machine status [arg...]  //一个虚拟机名称\n\n//启动虚拟机\ndocker-machine start [arg...]  //一个或多个虚拟机名称\n\n//停止虚拟机\ndocker-machine stop [arg...]  //一个或多个虚拟机名称\n\n//重启虚拟机\ndocker-machine restart [arg...]  //一个或多个虚拟机名称\n")])])]),n("blockquote",[n("p",[e._v("更多参数请使用 docker-machine --help 命令查看。")])])])}),[],!1,null,null,null);n.default=a.exports}}]);