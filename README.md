# 个人主页项目

这是一个纯HTML/CSS静态网页，展示个人信息、项目作品和兴趣爱好。

## 项目结构

```
html/
├── index.html          # 首页
├── projects.html       # 项目作品页
├── hobbies.html        # 兴趣爱好页
├── css/
│   └── style.css       # 样式文件（绿色系简洁现代风格）
└── img/
    └── projects/
        ├── stars/      # 星空堆栈项目图片
        └── vote/       # 投票网站项目图片
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

3. **上传文件**
   - 在仓库页面，点击 "uploading an existing file"
   - 拖拽 `html` 文件夹到上传区域
   - 点击 "Commit changes"

4. **启用GitHub Pages**
   - 进入仓库 Settings 页面
   - 左侧导航找到 "Pages"
   - 在 "Source" 下选择 "Deploy from a branch"
   - 在 "Branch" 下选择 `main` (或 `master`) 和 `/ (root)`
   - 点击 "Save"

5. **访问你的网页**
   - 等待1-2分钟
   - 访问 https://<你的用户名>.github.io/<仓库名>/
   - 例如: https://ShenBlissard.github.io/shen-profile/

## 项目详情

### 项目作品
1. **opencode辅助星空堆栈** - 运用opencode处理lights文件，完成天体摄影堆栈处理
2. **自我介绍静态网页** - 当前项目，使用opencode开发并部署
3. **班级投票动态网页** - opencode开发 + kimi部署的班级投票系统
4. **课件批注项目** - 使用opencode对课件中的专业词汇进行标注和详细解释

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
