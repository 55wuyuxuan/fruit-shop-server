# 河美果里果气 - Railway 部署指南

## Railway 简介

Railway 是一个现代化的云平台，提供免费的部署额度，适合个人项目和测试使用。

### 免费额度
- **每月 500 小时**免费运行时间
- 自动 HTTPS 域名
- 支持 Node.js、Python 等

---

## 部署步骤

### 第一步：注册 Railway 账号

1. 访问 https://railway.app
2. 使用 GitHub 账号登录（推荐）
3. 完成验证

### 第二步：上传代码到 GitHub

1. 登录 GitHub：https://github.com
2. 创建新仓库，命名为 `fruit-shop-server`
3. 将 `/workspace/projects/server` 目录的代码上传到仓库

**上传命令（如果本地有 Git）：**
```bash
cd /workspace/projects/server
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/fruit-shop-server.git
git push -u origin main
```

### 第三步：在 Railway 部署

1. 登录 https://railway.app
2. 点击 **"New Project"**
3. 选择 **"Deploy from GitHub repo"**
4. 选择你刚创建的仓库 `fruit-shop-server`
5. Railway 会自动检测并部署

### 第四步：配置环境变量（可选）

1. 在 Railway 项目页面，点击 **"Variables"**
2. 添加你的环境变量（如果有的话）

### 第五步：获取访问地址

部署成功后，Railway 会提供一个 URL，例如：
```
https://fruit-shop-server.up.railway.app
```

这个 URL 就是你的后端 API 地址！

---

## 测试 API

部署成功后，访问以下地址测试：

```
https://你的域名.railway.app/api/products
```

你应该能看到商品列表数据。

---

## 配置小程序

部署成功后，修改小程序的 API 地址：

### 方法一：修改 Network 配置

编辑 `/workspace/projects/src/network/index.ts`，将 `baseURL` 改为你的 Railway URL。

### 方法二：设置环境变量

创建 `/workspace/projects/.env.local`：
```
PROJECT_DOMAIN=https://fruit-shop-server.up.railway.app
```

---

## 常见问题

### Q: 部署失败怎么办？
A: 检查 Railway 的 Deploy Logs，查看错误信息。常见问题：
- 依赖安装失败：检查 package.json
- 端口配置错误：确保使用 PORT 环境变量

### Q: 如何重新部署？
A: 在 Railway 页面，点击项目右上角的 **"Deployments"**，然后点击 **"Redeploy"**。

### Q: 免费额度用完了怎么办？
A: Railway 会暂停服务，不会收费。可以等下个月额度恢复，或升级到付费计划。

---

## 下一步

1. 测试 API 是否正常
2. 配置小程序调用后端
3. 测试完整购物流程
4. 后续可迁移到云服务器

---

## 联系支持

- Railway 文档：https://docs.railway.app
- Railway Discord：https://discord.gg/railway
