# 我的个人博客

第一个 Web 开发练手项目。

## 项目结构

```
my-blog/
├── index.html          # 博客首页
├── article.html        # 文章详情页
├── about.html          # 关于页面
├── css/
│   └── style.css       # 全局样式
├── js/
│   └── main.js         # 交互逻辑（主题切换、回到顶部、搜索）
├── data/
│   └── articles.json   # 文章数据（阶段3用 Fetch 加载）
└── README.md           # 你正在看的文件
```

## 如何开始

### 1. 本地预览

直接用浏览器打开 `index.html` 即可预览。

或者用 VS Code 的 Live Server 插件（推荐）：
- 安装 VS Code 插件 "Live Server"
- 右键 `index.html` → "Open with Live Server"

### 2. 开发顺序

按照 `learning-roadmap.html` 中的路线图：

| 阶段 | 时间 | 目标 |
|------|------|------|
| 阶段 0 | 第 1 天 | 安装工具，学会 Git 基本操作 |
| 阶段 1 | 第 1 周 | 学习 HTML + CSS，理解现有页面结构 |
| 阶段 2 | 第 2 周 | 学习 JavaScript，在 main.js 中实现交互 |
| 阶段 3 | 第 3-4 周 | 用 JSON 管理数据，部署到 GitHub Pages |

### 3. 部署到 GitHub Pages

1. 在 GitHub 上创建一个新仓库，比如 `my-blog`
2. 把项目文件推送到仓库：
   ```bash
   git init
   git add .
   git commit -m "初始化博客项目"
   git remote add origin https://github.com/你的用户名/my-blog.git
   git push -u origin main
   ```
3. 进入仓库 Settings → Pages
4. Source 选择 `main` 分支，目录选 `/root`
5. 等待 1-2 分钟，访问 `https://你的用户名.github.io/my-blog/` 即可看到你的博客

## 你需要自己完成的功能

代码里留了一些 TODO，这些是你学习时需要自己动手实现的：

1. **搜索框** - 在首页添加搜索输入框，调用 `main.js` 中已有的 `searchArticles()` 函数
2. **动态文章列表** - 用 Fetch API 从 `data/articles.json` 加载文章数据，动态渲染到首页
3. **文章详情动态加载** - 根据 URL 中的 `?id=` 参数加载对应的文章内容
4. **移动端菜单** - 小屏幕下汉堡菜单的展开和收起

## 技术栈

- HTML5 - 页面结构
- CSS3 - 样式与布局（含 Flexbox + 响应式）
- JavaScript (ES6) - 交互逻辑
- JSON - 数据存储
- Git + GitHub Pages - 版本控制与部署

## 学习资源

- [MDN Web 文档](https://developer.mozilla.org/zh-CN/) - 最权威的前端文档
- [freeCodeCamp](https://www.freecodecamp.org/chinese/) - 免费交互式编程学习
- [廖雪峰 Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600) - Git 入门
- [GitHub Pages 文档](https://docs.github.com/en/pages) - 部署指南
