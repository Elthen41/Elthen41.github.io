# Elthen中文博客模版

这是一个基于 [Astro](https://astro.build) + Tailwind CSS 的静态博客模版，按照 [siboehm.com](https://siboehm.com) 的信息架构与版式重新设计，方便你快速搭建自己的中文个人网站。

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

## 自定义

- 修改 `src/components/Header.astro` 更新导航与社交链接。
- 在 `src/components/Hero.astro` 调整主页自我介绍文案。
- 新增文章只需在 `src/content/posts` 目录添加 `.md`/`.mdx` 文件，并填写前言区块（title、summary、pubDate、tags）。
- 如果要更换全局颜色与字体，可在 `tailwind.config.mjs` 与 `src/styles/global.css` 中修改。
