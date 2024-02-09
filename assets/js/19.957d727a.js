(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{290:function(n,e,a){"use strict";a.r(e);var o=a(14),t=Object(o.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"docker-compose-yml开发环境基础中间件配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml开发环境基础中间件配置"}},[this._v("#")]),this._v(" docker-compose.yml开发环境基础中间件配置")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('version: \'3\'\n\n######## 项目依赖的环境，启动项目之前要先启动此环境 #######\n######## The environment that the project depends on, starting this environment before starting the project #######\n\nservices:\n  #jaeger链路追踪 — Jaeger for tracing\n  jaeger:\n    image: jaegertracing/all-in-one:1.42.0\n    container_name: jaeger\n    restart: always\n    ports:\n      - "5775:5775/udp"\n      - "6831:6831/udp"\n      - "6832:6832/udp"\n      - "5778:5778"\n      - "16686:16686"\n      - "14268:14268"\n      - "9411:9411"\n    environment:\n      - SPAN_STORAGE_TYPE=elasticsearch\n      - ES_SERVER_URLS=http://elasticsearch:9200\n      - LOG_LEVEL=debug\n    networks:\n      - looklook_net\n\n  #prometheus监控 — Prometheus for monitoring\n  prometheus:\n    image: prom/prometheus:v2.28.1\n    container_name: prometheus\n    environment:\n      # 时区上海 - Time zone Shanghai (Change if needed)\n      TZ: Asia/Shanghai\n    volumes:\n      - ./deploy/prometheus/server/prometheus.yml:/etc/prometheus/prometheus.yml\n      - ./data/prometheus/data:/prometheus\n    command:\n      - \'--config.file=/etc/prometheus/prometheus.yml\'\n      - \'--storage.tsdb.path=/prometheus\'\n    restart: always\n    user: root\n    ports:\n      - 9090:9090\n    networks:\n      - looklook_net\n\n  #查看prometheus监控数据 - Grafana to view Prometheus monitoring data\n  grafana:\n    image: grafana/grafana:8.0.6\n    container_name: grafana\n    hostname: grafana\n    user: root\n    environment:\n      # 时区上海 - Time zone Shanghai (Change if needed)\n      TZ: Asia/Shanghai\n    restart: always\n    volumes:\n        - ./data/grafana/data:/var/lib/grafana\n    ports:\n        - "3001:3000"\n    networks:\n        - looklook_net\n\n  #搜集kafka业务日志、存储prometheus监控数据 - Kafka for collecting business logs and storing Prometheus monitoring data\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:7.13.4\n    container_name: elasticsearch\n    user: root\n    environment:\n      - discovery.type=single-node\n      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"\n      - TZ=Asia/Shanghai\n    volumes:\n      - ./data/elasticsearch/data:/usr/share/elasticsearch/data\n    restart: always\n    ports:\n    - 9200:9200\n    - 9300:9300\n    networks:\n      - looklook_net\n\n  #查看elasticsearch数据 - Kibana to view Elasticsearch data\n  kibana:\n    image: docker.elastic.co/kibana/kibana:7.13.4\n    container_name: kibana\n    environment:\n      - elasticsearch.hosts=http://elasticsearch:9200\n      - TZ=Asia/Shanghai\n    restart: always\n    networks:\n      - looklook_net\n    ports:\n      - "5601:5601"\n    depends_on:\n      - elasticsearch\n\n  #消费kafka中filebeat收集的数据输出到es - The data output collected by FileBeat in Kafka is output to ES\n  go-stash:\n    image: kevinwan/go-stash:1.0 # if you "macOs intel" or "linux amd"\n#    image: kevinwan/go-stash:1.0-arm64 #  if you "macOs m1" or "linux arm"\n    container_name: go-stash\n    environment:\n      # 时区上海 - Time zone Shanghai (Change if needed)\n      TZ: Asia/Shanghai\n    user: root\n    restart: always\n    volumes:\n      - ./deploy/go-stash/etc:/app/etc\n    networks:\n      - looklook_net\n    depends_on:\n      - elasticsearch\n      - kafka\n\n  #收集业务数据 - Collect business data\n  filebeat:\n    image: elastic/filebeat:7.13.4\n    container_name: filebeat\n    environment:\n      # 时区上海 - Time zone Shanghai (Change if needed)\n      TZ: Asia/Shanghai\n    user: root\n    restart: always\n    entrypoint: "filebeat -e -strict.perms=false"  #解决配置文件权限问题 - Solving the configuration file permissions\n    volumes:\n      - ./deploy/filebeat/conf/filebeat.yml:/usr/share/filebeat/filebeat.yml\n      # 此处需指定docker的containers目录，取决于你docker的配置 - The containers directory of docker needs to be specified here, depending on your docker configuration\n      # 如snap安装的docker，则为/var/snap/docker/common/var-lib-docker/containers - Example if docker is installed by Snap /var/snap/docker/common/var-lib-docker/containers\n      # - /var/snap/docker/common/var-lib-docker/containers:/var/lib/docker/containers\n      - /var/lib/docker/containers:/var/lib/docker/containers\n    networks:\n      - looklook_net\n    depends_on:\n      - kafka\n\n\n  #zookeeper是kafka的依赖 - Zookeeper is the dependencies of Kafka\n  zookeeper:\n    image: wurstmeister/zookeeper\n    container_name: zookeeper\n    environment:\n      # 时区上海 - Time zone Shanghai (Change if needed)\n      TZ: Asia/Shanghai\n    restart: always\n    ports:\n      - 2181:2181\n    networks:\n      - looklook_net\n\n  #消息队列 - Message queue\n  kafka:\n    image: wurstmeister/kafka\n    container_name: kafka\n    ports:\n      - 9092:9092\n    environment:\n      - KAFKA_ADVERTISED_HOST_NAME=kafka\n      - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181\n      - KAFKA_AUTO_CREATE_TOPICS_ENABLE=false\n      - TZ=Asia/Shanghai\n    restart: always\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    networks:\n      - looklook_net\n    depends_on:\n      - zookeeper\n\n  #asynqmon asynq延迟队列、定时队列的webui - Asynqmon asynq delay queue, timing queue\'s webUI\n  asynqmon:\n    image: hibiken/asynqmon:latest\n    container_name: asynqmon\n    ports:\n      - 8980:8080\n    command:\n      - \'--redis-addr=redis:6379\'\n      - \'--redis-password=G62m50oigInC30sf\'\n    restart: always\n    networks:\n      - looklook_net\n    depends_on:\n      - redis\n\n  mysql:\n    image: mysql/mysql-server:8.0.28\n    container_name: mysql\n    environment:\n      # 时区上海 - Time zone Shanghai (Change if needed)\n      TZ: Asia/Shanghai\n      # root 密码 - root password\n      MYSQL_ROOT_PASSWORD: PXDN93VRKUm8TeE7\n    ports:\n      - 33069:3306\n    volumes:\n      # 数据挂载 - Data mounting\n      - ./data/mysql/data:/var/lib/mysql\n      # 日志\n    command:\n      # 将mysql8.0默认密码策略 修改为 原先 策略 (mysql8.0对其默认策略做了更改 会导致密码无法匹配) \n      # Modify the Mysql 8.0 default password strategy to the original strategy (MySQL8.0 to change its default strategy will cause the password to be unable to match)\n      --default-authentication-plugin=mysql_native_password\n      --character-set-server=utf8mb4\n      --collation-server=utf8mb4_general_ci\n      --explicit_defaults_for_timestamp=true\n      --lower_case_table_names=1\n    privileged: true\n    restart: always\n    networks:\n      - looklook_net\n\n  #redis容器 - Redis container\n  redis:\n    image: redis:6.2.5\n    container_name: redis-looklook\n    ports:\n      - 36379:6379\n    environment:\n      # 时区上海 - Time zone Shanghai (Change if needed)\n      TZ: Asia/Shanghai\n    volumes:\n      # 数据文件 - data files\n      - ./data/redis/data:/data:rw\n    command: "redis-server --requirepass G62m50oigInC30sf  --appendonly yes"\n    privileged: true\n    restart: always\n    networks:\n      - looklook_net\n\n\nnetworks:\n  looklook_net:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.16.0.0/16\n\n\n')])])])])}),[],!1,null,null,null);e.default=t.exports}}]);