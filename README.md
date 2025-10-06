# Elthen中文博客模版

这是一个基于 [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com/) 的中文静态博客模版，参考 [siboehm.com](https://siboehm.com) 的信息架构重新设计。它提供完善的文章编写体验、响应式设计与现代主题切换能力，帮助你高效搭建个人网站。

## 功能亮点
- 🧱 组件化布局：主页、博客列表、文章详情、关于页面与页脚模块全部可复用，方便扩展新内容。
- 🌓 主题切换：内置 <code>ThemeToggle</code> 组件与本地存储逻辑，自动识别系统偏好并持久化深浅色模式。
- 🔍 实时搜索：<code>PostList.astro</code> 提供纯前端关键词筛选，可按标题、摘要、标签和正文快速过滤文章。
- 📝 Markdown / MDX：支持在 <code>src/content/posts</code> 中编写 Markdown 或 MDX，内置 <code>astro:assets</code> 图片处理与自定义区块。
- 📰 RSS 订阅：<code>src/pages/feed.xml.ts</code> 自动根据文章集合生成 <code>feed.xml</code>。
- 🎨 现代视觉：内置 Inter 字体、柔和配色与 Tailwind Typography，暗色模式细节同步适配。

## 环境要求
- Node.js 20 或更新版本（与 GitHub Actions 工作流保持一致）
- npm 9+（建议使用 <code>npm</code>，无需全局安装 Astro）

## 快速开始
~~~bash
npm install
npm run dev
~~~
浏览器访问 http://localhost:4321 查看效果。

### 可用脚本
- <code>npm run dev</code>：启动开发服务器并启用热更新。
- <code>npm run build</code>：构建生产版本，产物位于 <code>dist/</code>。
- <code>npm run preview</code>：在本地预览生产构建结果。
- <code>npm run check</code>：运行 Astro 内置的类型与内容校验，发布前建议执行一次。

## 项目结构速览
~~~
src/
├─ components/        # 页头、页脚、文章列表、深浅色切换等 UI 组件
├─ layouts/           # BaseLayout 统一注入字体、主题脚本与头部信息
├─ pages/             # Astro 页面路由（首页、博客归档、关于、RSS）
├─ content/           # 文章集合与内容 Schema
│  ├─ posts/          # Markdown/MDX 文章
│  └─ config.ts       # frontmatter 校验规则
└─ styles/            # 全局样式（颜色变量、排版细节）
~~~

## 写作指南
1. 在 <code>src/content/posts</code> 下新增 <code>.md</code> 或 <code>.mdx</code> 文件，必须包含以下 frontmatter：
   ~~~yaml
   ---
   title: 文章标题
   summary: 用一两句话概括内容
   pubDate: 2025-01-01
   tags:
     - 可选标签
     - 可继续添加
   ---
   ~~~
2. <code>tags</code> 字段可留空，但推荐填写，便于在列表和搜索中展示。
3. MDX 文件可直接导入组件，例如提示框：
   ~~~mdx
   import Callout from '../../components/blocks/Callout.astro';

   <Callout title='提示'>
     支持在文章中插入强调内容或附注。
   </Callout>
   ~~~
4. 使用 <code>astro:assets</code> 导入图片，可自动生成多尺寸资源并配合 <code>.caption</code> 样式说明。

## 自定义指南
- **导航与社交信息**：编辑 <code>src/components/Header.astro</code> 与 <code>src/components/Footer.astro</code>。
- **首页文案**：在 <code>src/components/Hero.astro</code> 修改问候语、按钮链接和个人简介。
- **主题与配色**：调整 <code>tailwind.config.mjs</code> 中的颜色映射，或在 <code>src/styles/global.css</code> 更新 CSS 变量。
- **网站信息**：在 <code>astro.config.mjs</code> 替换 <code>site</code> 字段；同时在 <code>src/pages/feed.xml.ts</code> 更新 RSS 标题与描述。
- **Favicon 与资源**：替换 <code>public/favicon.svg</code> 或新增静态资源文件。
- **搜索体验**：若需修改提示语或搜索字段，可在 <code>src/components/PostList.astro</code> 中调整占位符文案与 <code>makeSearchText</code> 逻辑。

## 部署
~~~bash
npm run build
~~~
构建后的静态文件位于 <code>dist/</code>，可部署到任意静态托管平台（GitHub Pages、Vercel、Netlify 等）。

### GitHub Pages 自动部署
1. **仓库命名**：将仓库命名为 <code>&lt;你的用户名&gt;.github.io</code> 并推送到 GitHub。
2. **站点配置**：更新 <code>astro.config.mjs</code> 中的 <code>site</code> 字段为你的域名或 GitHub Pages 地址。
3. **启用 Pages**：仓库中包含 <code>.github/workflows/deploy.yml</code>，会在 <code>main</code> 分支推送时触发构建。首次推送完成后，进入 Settings → Pages，选择 'GitHub Actions' 作为发布来源。
4. **自定义域名（可选）**：在 Pages 设置中添加自定义域名，并将 DNS 的 <code>CNAME</code> 指向 <code>&lt;用户名&gt;.github.io</code>。

工作流会自动执行 <code>npm ci</code>、<code>npm run build</code>，并将 <code>dist/</code> 上传到 GitHub Pages。等待部署完成后即可访问你的博客。

## 常用优化建议
- 发布前运行 <code>npm run check</code>，确保 frontmatter 与 Markdown 格式通过 Astro 校验。
- 若引入第三方脚本，记得在 <code>BaseLayout.astro</code> 中合理注入并关注深浅色兼容性。
- 推荐通过 <code>.env</code> 或 GitHub Secrets 注入统计脚本等敏感配置，避免硬编码在仓库中。
