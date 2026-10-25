# 个人主页项目

这是一个纯HTML/CSS静态网页，展示个人信息、项目作品和兴趣爱好。

## 项目结构

```
├── index.html          # 首页（中英双语，data-i18n 标记）
├── css/
│   └── style.css       # 样式文件（暖金色调，左侧目录栏 + 顶部语言切换）
├── js/
│   ├── i18n.js         # 中英词典与语言切换（跟随浏览器，localStorage 记忆）
│   └── scroll-spy.js   # 目录滚动高亮
└── img/
    ├── hero-bg.jpg     # 首页横幅背景图
    └── projects/       # 项目图片（stars / vote / course，已压缩优化）
```

## 本地测试

在浏览器中打开 `index.html` 文件查看效果。

## GitHub Pages 部署步骤

1. **登录GitHub**，访问 https://github.com/

2. **创建新仓库**
   - 点击右上角 "+" 号
   - 选择 "New repository"
   - 仓库名称: `shen-profile` 或其他你喜欢的名字
   - 选择 Public（公开）
   - 点击 "Create repository"

3. **推送代码**
   - 使用 Git 将仓库内容提交并推送到 GitHub（`git add -A`、`git commit`、`git push`）

4. **启用GitHub Pages**
   - 进入仓库 Settings 页面
   - 左侧导航找到 "Pages"
   - 在 "Source" 下选择 "Deploy from a branch"
   - 在 "Branch" 下选择 `main` 和 `/ (root)`
   - 点击 "Save"

5. **访问你的网页**
   - 等待1-2分钟
   - 访问 https://shenblissard.github.io/profile/

## 项目详情

### 项目作品
1. **opencode辅助星空堆栈** - 运用opencode处理lights文件，完成天体摄影堆栈处理
2. **班级投票动态网页** - opencode开发 + kimi部署的班级投票系统（https://vote.kimi.site）
3. **课件批注项目** - 使用opencode对课件中的专业词汇进行标注和详细解释
4. **自我介绍静态网页** - 当前项目，使用opencode开发并部署

### 兴趣爱好
- 利用opencode做小项目
- 数学
- 摄影和后期修图
- 手工绘画
- 观察饲养动植物

## 技术栈

- HTML5
- CSS3
- 响应式设计
- GitHub Pages托管
