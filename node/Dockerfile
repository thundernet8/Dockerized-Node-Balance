# TLS 版本的NodeJS
FROM node:boron
RUN mkdir -p /src

# 任何RUN命令均在此目录执行
WORKDIR /src

# 使用淘宝NPM镜像
COPY .npmrc /root/.npmrc

# 安装NodeAPP的包依赖，install后可附带 -- production参数以忽略开发依赖
COPY package.json /src/
RUN npm install

# 开发环境可使用nodemon代替node启动app
# 这时需要在packages.json的start scripts改成nodemon index.js
# 同时为了方便修改程序文件，需要在docker-compose.yml文件中为nodeapp设置volumes，将container src目录映射到物理host机的持久文件存储
RUN npm install nodemon -g

# 再次拷贝源码至container的src目录
# 如果映射了宿主机文件系统，则可不做
# 手动提前将app源码准备到对应映射到的文件夹
COPY . /src

# 容器将监听8080端口
EXPOSE 8080

# 容器运行时直接启动App
CMD [ "npm", "start" ]