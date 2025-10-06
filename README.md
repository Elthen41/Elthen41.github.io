# Elthen中文博客模版

这是一个基于 [Astro](https://astro.build) + Tailwind CSS 的静态博客模版，按照 [siboehm.com](https://siboehm.com) 的信息架构与版式重新设计，借此模版可以方便你快速搭建自己的个人网站。

## 功能特点

- 🧱 **组件化布局**：主页、博客列表、文章详情、关于页面与页脚组件可复用，轻松扩展新内容。
- 📝 **Markdown/MDX 文章**：支持在 `src/content/posts` 中用 Markdown 或 MDX 撰写中文内容。
- 📰 **RSS 订阅**：自动根据文章集合生成 `feed.xml`。
- 🎨 **现代设计语言**：内置 Inter 字体、柔和配色与响应式排版，复刻 siboehm.com 的干净风格。

## 本地开发

需要先安装node.js

```bash
npm install
npm run dev
```

浏览器访问 `http://localhost:4321` 查看效果。

## 发布

```bash
npm run build
```

生成的静态文件位于 `dist/` 目录，可部署到任何静态空间（GitHub Pages、Vercel、Netlify 等）。

### GitHub Pages 自动部署

1. **仓库命名**：将仓库命名为 `<你的用户名>.github.io` 并推送到 GitHub。
2. **站点配置**：本仓库已在 `astro.config.mjs` 中将 `site` 字段指向 `https://elthen41.github.io`。如需使用其它域名，请同步修改。
3. **启用 GitHub Pages**：在仓库中保持 `.github/workflows/deploy.yml` 文件，GitHub Actions 会在 `main` 分支变更时构建并发布最新版本。首次推送后，到仓库 **Settings → Pages** 里选择 “GitHub Actions” 作为发布来源。
4. **自定义域名（可选）**：如果你有自定义域名，可在设置中添加域名并配置 DNS `CNAME` 记录指向 `<用户名>.github.io`。

工作流会自动安装依赖、运行 `npm run build`，并将 `dist/` 目录发布到 GitHub Pages。稍等几分钟后即可访问你的线上博客。

## 自定义

- 修改 `src/components/Header.astro` 更新导航与社交链接。
- 在 `src/components/Hero.astro` 调整主页自我介绍文案。
- 新增文章只需在 `src/content/posts` 目录添加 `.md`/`.mdx` 文件，并填写前言区块（title、summary、pubDate、tags）。
- 如果要更换全局颜色与字体，可在 `tailwind.config.mjs` 与 `src/styles/global.css` 中修改。
