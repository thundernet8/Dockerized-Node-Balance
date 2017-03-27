## Dockerized-Node-Balance
使用Docker和docker-compose快速部署Node APP以及实现Nginx负载均衡。

Nginx代理用户请求并分配转发至指定Node Server。

同时示例了Node App link位于不同容器的MongoDB和Redis服务。

开发环境可使用nodemon监听文件修改以重启Node服务器(需要为nodeapp容器设置volumes，方便在宿主机修改文件)

## 使用
```
初次
docker-compose build
docker-compose up -d

后续
docker-compose start
docker-compose stop
```