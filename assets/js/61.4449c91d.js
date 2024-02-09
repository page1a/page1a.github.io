(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{335:function(t,e,a){"use strict";a.r(e);var r=a(14),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用docker部署spring-boot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用docker部署spring-boot"}},[t._v("#")]),t._v(" 使用Docker部署Spring Boot")]),t._v(" "),e("p",[t._v("Docker 技术发展为微服务落地提供了更加便利的环境，使用 Docker 部署 Spring Boot 其实非常简单。")]),t._v(" "),e("p",[t._v("首先构建一个简单的 Spring Boot 项目，然后给项目添加 Docker 支持，最后对项目进行部署。")]),t._v(" "),e("h2",{attrs:{id:"一个简单-spring-boot-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个简单-spring-boot-项目"}},[t._v("#")]),t._v(" 一个简单 Spring Boot 项目")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("pom.xml")]),t._v(" 中 ，使用 Spring Boot 2.0 相关依赖")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<parent>\n\t<groupId>org.springframework.boot</groupId>\n\t<artifactId>spring-boot-starter-parent</artifactId>\n\t<version>2.0.0.RELEASE</version>\n</parent>\n")])])]),e("p",[t._v("添加 web 和测试依赖")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<dependencies>\n     <dependency>\n\t<groupId>org.springframework.boot</groupId>\n\t<artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n\t<dependency>\n\t\t<groupId>org.springframework.boot</groupId>\n\t\t<artifactId>spring-boot-starter-test</artifactId>\n\t\t<scope>test</scope>\n\t</dependency>\n</dependencies>\n")])])]),e("p",[t._v("创建一个 DockerController，在其中有一个index()方法，访问时返回：Hello Docker!")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@RestController\npublic class DockerController {\n\t\n    @RequestMapping("/")\n    public String index() {\n        return "Hello Docker!";\n    }\n}\n')])])]),e("p",[t._v("启动类")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@SpringBootApplication\npublic class DockerApplication {\n\n\tpublic static void main(String[] args) {\n\t\tSpringApplication.run(DockerApplication.class, args);\n\t}\n}\n")])])]),e("p",[t._v("添加完毕后启动项目，启动成功后浏览器放问："),e("code",[t._v("http://localhost:8080/")]),t._v("，页面返回：Hello Docker!，说明 Spring Boot 项目配置正常。")]),t._v(" "),e("h2",{attrs:{id:"spring-boot-项目添加-docker-支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-项目添加-docker-支持"}},[t._v("#")]),t._v(" Spring Boot 项目添加 Docker 支持")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("pom.xml-properties")]),t._v("中添加 Docker 镜像名称")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<properties>\n\t<docker.image.prefix>springboot</docker.image.prefix>\n</properties>\n")])])]),e("p",[t._v("plugins 中添加 Docker 构建插件：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<build>\n\t<plugins>\n\t\t<plugin>\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-maven-plugin</artifactId>\n\t\t</plugin>\n\t\t\x3c!-- Docker maven plugin --\x3e\n\t\t<plugin>\n\t\t\t<groupId>com.spotify</groupId>\n\t\t\t<artifactId>docker-maven-plugin</artifactId>\n\t\t\t<version>1.0.0</version>\n\t\t\t<configuration>\n\t\t\t\t<imageName>${docker.image.prefix}/${project.artifactId}</imageName>\n\t\t\t\t<dockerDirectory>src/main/docker</dockerDirectory>\n\t\t\t\t<resources>\n\t\t\t\t\t<resource>\n\t\t\t\t\t\t<targetPath>/</targetPath>\n\t\t\t\t\t\t<directory>${project.build.directory}</directory>\n\t\t\t\t\t\t<include>${project.build.finalName}.jar</include>\n\t\t\t\t\t</resource>\n\t\t\t\t</resources>\n\t\t\t</configuration>\n\t\t</plugin>\n\t\t\x3c!-- Docker maven plugin --\x3e\n\t</plugins>\n</build>\n")])])]),e("p",[t._v("在目录src/main/docker下创建 Dockerfile 文件，Dockerfile 文件用来说明如何来构建镜像。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('FROM openjdk:8-jdk-alpine\nVOLUME /tmp\nADD spring-boot-docker-1.0.jar app.jar\nENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]\n')])])]),e("p",[t._v("这个 Dockerfile 文件很简单，构建 Jdk 基础环境，添加 Spring Boot Jar 到镜像中，简单解释一下:")]),t._v(" "),e("ul",[e("li",[t._v("FROM ，表示使用 Jdk8 环境 为基础镜像，如果镜像不是本地的会从 DockerHub 进行下载")]),t._v(" "),e("li",[t._v("VOLUME ，VOLUME 指向了一个/tmp的目录，由于 Spring Boot 使用内置的Tomcat容器，Tomcat 默认使用/tmp作为工作目录。这个命令的效果是：在宿主机的/var/lib/docker目录下创建一个临时文件并把它链接到容器中的/tmp目录")]),t._v(" "),e("li",[t._v("ADD ，拷贝文件并且重命名")]),t._v(" "),e("li",[t._v("ENTRYPOINT ，为了缩短 Tomcat 的启动时间，添加java.security.egd的系统属性指向/dev/urandom作为 ENTRYPOINT")])]),t._v(" "),e("blockquote",[e("p",[t._v("这样 Spring Boot 项目添加 Docker 依赖就完成了。")])]),t._v(" "),e("h2",{attrs:{id:"构建打包环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建打包环境"}},[t._v("#")]),t._v(" 构建打包环境")]),t._v(" "),e("p",[t._v("我们需要有一个 Docker 环境来打包 Spring Boot 项目，在 Windows 搭建 Docker 环境很麻烦，因此我这里以 Centos 7 为例。")]),t._v(" "),e("p",[t._v("安装 Docker 环境\n安装")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum install docker\n")])])]),e("p",[t._v("安装完成后，使用下面的命令来启动 docker 服务，并将其设置为开机启动：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("service docker start\nchkconfig docker on\n\n#LCTT 译注：此处采用了旧式的 sysv 语法，如采用CentOS 7中支持的新式 systemd 语法，如下：\nsystemctl  start docker.service\nsystemctl  enable docker.service\n")])])]),e("p",[t._v("使用Docker 中国加速器")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('vi  /etc/docker/daemon.json\n\n#添加后：\n{\n    "registry-mirrors": ["https://registry.docker-cn.com"],\n    "live-restore": true\n}\n')])])]),e("p",[t._v("重新启动docker")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("systemctl restart docker\n")])])]),e("p",[t._v("输入"),e("code",[t._v("docker version")]),t._v(" 返回版本信息则安装正常。")]),t._v(" "),e("p",[t._v("安装JDK")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum -y install java-1.8.0-openjdk*\n")])])]),e("p",[t._v("配置环境变量\n打开 "),e("code",[t._v("vim /etc/profile")]),t._v("\n添加一下内容")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.161-0.b14.el7_4.x86_64 \nexport PATH=$PATH:$JAVA_HOME/bin \n")])])]),e("p",[t._v("修改完成之后，使其生效")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("source /etc/profile\n")])])]),e("p",[t._v("输入java -version` 返回版本信息则安装正常。")]),t._v(" "),e("p",[t._v("安装MAVEN\n下载："),e("code",[t._v("wget http://mirrors.shu.edu.cn/apache/maven/maven-3/3.5.2/binaries/apache-maven-3.5.2-bin.tar.gz")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## 解压\ntar vxf apache-maven-3.5.2-bin.tar.gz\n## 移动\nmv apache-maven-3.5.2 /usr/local/maven3\n")])])]),e("p",[t._v("修改环境变量， 在"),e("code",[t._v("/etc/profile")]),t._v("中添加以下几行")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("MAVEN_HOME=/usr/local/maven3\nexport MAVEN_HOME\nexport PATH=${PATH}:${MAVEN_HOME}/bin\n")])])]),e("p",[t._v("记得执行"),e("code",[t._v("source /etc/profile")]),t._v("使环境变量生效。")]),t._v(" "),e("p",[t._v("输入"),e("code",[t._v("mvn -version")]),t._v(" 返回版本信息则安装正常。")]),t._v(" "),e("blockquote",[e("p",[t._v("这样整个构建环境就配置完成了。")])]),t._v(" "),e("h2",{attrs:{id:"使用-docker-部署-spring-boot-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-部署-spring-boot-项目"}},[t._v("#")]),t._v(" 使用 Docker 部署 Spring Boot 项目")]),t._v(" "),e("p",[t._v("将项目 "),e("code",[t._v("spring-boot-docker")]),t._v(" 拷贝服务器中，进入项目路径下进行打包测试。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#打包\nmvn package\n#启动\njava -jar target/spring-boot-docker-1.0.jar\n")])])]),e("p",[t._v("看到 Spring Boot 的启动日志后表明环境配置没有问题，接下来我们使用 DockerFile 构建镜像。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mvn package docker:build\n")])])]),e("p",[t._v("第一次构建可能有点慢，当看到以下内容的时候表明构建成功：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("...\nStep 1 : FROM openjdk:8-jdk-alpine\n ---\x3e 224765a6bdbe\nStep 2 : VOLUME /tmp\n ---\x3e Using cache\n ---\x3e b4e86cc8654e\nStep 3 : ADD spring-boot-docker-1.0.jar app.jar\n ---\x3e a20fe75963ab\nRemoving intermediate container 593ee5e1ea51\nStep 4 : ENTRYPOINT java -Djava.security.egd=file:/dev/./urandom -jar /app.jar\n ---\x3e Running in 85d558a10cd4\n ---\x3e 7102f08b5e95\nRemoving intermediate container 85d558a10cd4\nSuccessfully built 7102f08b5e95\n[INFO] Built springboot/spring-boot-docker\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 54.346 s\n[INFO] Finished at: 2018-03-13T16:20:15+08:00\n[INFO] Final Memory: 42M/182M\n[INFO] ------------------------------------------------------------------------\n")])])]),e("p",[t._v("使用"),e("code",[t._v("docker images")]),t._v("命令查看构建好的镜像：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker images\nREPOSITORY                      TAG                 IMAGE ID            CREATED             SIZE\nspringboot/spring-boot-docker   latest              99ce9468da74        6 seconds ago       117.5 MB\n")])])]),e("p",[e("code",[t._v("springboot/spring-boot-docker")]),t._v(" 就是我们构建好的镜像，下一步就是运行该镜像")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker run -p 8080:8080 -t springboot/spring-boot-docker\n")])])]),e("p",[t._v("启动完成之后我们使用docker ps查看正在运行的镜像：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('docker ps\nCONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS              PORTS                    NAMES\n049570da86a9        springboot/spring-boot-docker   "java -Djava.security"   30 seconds ago      Up 27 seconds       0.0.0.0:8080->8080/tcp   determined_mahavira\n')])])]),e("p",[t._v("可以看到我们构建的容器正在在运行，访问浏览器："),e("code",[t._v("http://192.168.0.x:8080/")]),t._v(",返回")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Hello Docker!\n")])])]),e("p",[t._v("说明使用 Docker 部署 Spring Boot 项目成功！")])])}),[],!1,null,null,null);e.default=n.exports}}]);