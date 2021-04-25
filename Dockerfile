# 镜像版本
FROM node

# 设置时区
# RUN apk --update add tzdata \
#     && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
#     && echo "Asia/Shanghai" > /etc/timezone \
#     && apk del tzdata

# 创建app目录
RUN mkdir -p /usr/src/node-app/nuxtElementBlog

# 设置工作目录
WORKDIR /usr/src/node-app/nuxtElementBlog
# 拷贝package.json文件到工作目录
# !!重要：package.json需要单独添加。
# Docker在构建镜像的时候，是一层一层构建的，仅当这一层有变化时，重新构建对应的层。
# 如果package.json和源代码一起添加到镜像，则每次修改源码都需要重新安装npm模块，这样木有必要。
# 所以，正确的顺序是: 添加package.json；安装npm模块；添加源代码。
COPY package.json /usr/src/node-app/nuxtElementBlog/package.json

# 安装yarn
RUN npm install yarn -g --registry=https://registry.npm.taobao.org
RUN yarn --version

# 安装node版本工具
RUN npm install n -g --registry=https://registry.npm.taobao.org
# 由于开发环境是在node 14.5.0 开发的 部署时切换到对应的版本
RUN sudo n 14.5.0 
# 安装npm依赖
RUN yarn install
# 安装pm2 
RUN npm install pm2 -g --registry=https://registry.npm.taobao.org

# 拷贝所有源代码到工作目录
COPY . /usr/src/node-app/nuxtElementBlog

# 暴露容器端口
EXPOSE 3001
# 启动node应用
CMD pm2 start