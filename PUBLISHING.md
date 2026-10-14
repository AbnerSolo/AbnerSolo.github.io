# 发布与搜索引擎收录

网站源码准备发布到 `AbnerSolo/AbnerSolo.github.io`，源分支为 `main`，发布目录为仓库根目录。

## 只剩账户设置

当前 GitHub 连接可提交文件，但未提供删除仓库、重命名仓库或启用 Pages 的管理接口。这些操作需要仓库所有者在 GitHub 网页完成。

### 1. 删除空仓库，再重命名有笔记的仓库

检查时，`AbnerSolo/AbnerSolo.github.io`（仓库 ID：1318927207）为空，没有提交；`AbnerSolo/AbnerSolo1.github.io`（仓库 ID：1318928071）包含现有笔记及网站源码。

1. 打开 [空仓库的 Settings](https://github.com/AbnerSolo/AbnerSolo.github.io/settings)，在 **Danger Zone → Delete this repository** 删除该空仓库。
2. 打开 [包含笔记的仓库 Settings](https://github.com/AbnerSolo/AbnerSolo1.github.io/settings)，在 **General → Repository name** 将名称改成 `AbnerSolo.github.io`。
3. 保留包含笔记的仓库及其提交历史。无需复制文件或新建仓库。

本站已按根站点配置 `url: https://abnersolo.github.io`、`baseurl: ""`，所以完成重命名后无需修改任何链接。

### 2. 启用 GitHub Pages

在重命名后的 [Settings → Pages](https://github.com/AbnerSolo/AbnerSolo.github.io/settings/pages)：

- **Source**：`Deploy from a branch`
- **Branch**：`main`
- **Folder**：`/(root)`
- 点击 **Save**。

等待 GitHub 的 `pages build and deployment` 成功。页面中应显示已发布网址。该发布方式由 GitHub 自动运行 Jekyll；不需要额外部署脚本。

## 发布后应可访问的网址

| 内容 | 网址 |
| --- | --- |
| 首页 | https://abnersolo.github.io/ |
| 群、环、域、商群与理想 | https://abnersolo.github.io/math/group-ring-field-quotient-ideal/ |
| Gaussian 论文阅读笔记 | https://abnersolo.github.io/lattice/gaussian-smoothing-parameter/ |
| 站点地图 | https://abnersolo.github.io/sitemap.xml |
| 抓取说明 | https://abnersolo.github.io/robots.txt |

网站未启用前，这些是预期发布地址，并不代表当前已上线。

## Google Search Console：用于主动提交

这一步有助于发现和跟踪收录情况；无需完成这一步，网站也可以被正常抓取。

1. 登录 [Google Search Console](https://search.google.com/search-console/)，添加 **URL 前缀**资源 `https://abnersolo.github.io/`。不选择需要 DNS 验证的 Domain 资源，因为 `github.io` 的 DNS 不由用户控制。
2. 使用 **HTML 标记**方式，复制真实的 `content` 验证码，将它填入 `_config.yml` 的 `google_site_verification` 字段，提交后等待 Pages 更新，再点击验证。也可按 Google 的说明上传验证 HTML 文件到仓库根目录。
3. 在 **Sitemaps** 中提交 `sitemap.xml`。
4. 在 **URL Inspection** 中检查两篇笔记的完整网址，使用 **Request indexing** 请求收录。

无需提供 Google 密码或访问令牌。验证代码必须来自你自己的 Search Console；配置没有写入任何虚假的验证代码。

发布成功、允许抓取和被收录是不同阶段。提交 sitemap 或请求收录不会保证立即出现搜索结果，也不能保证某个排名。

## 网站结构与维护

- `index.md`：可抓取的笔记目录，使用服务器生成的 HTML 链接。
- `notes/`：保留现有正文；增加标题、摘要、作者、日期及稳定的 permalink。
- `_layouts/`：网页结构与文章版式，正文直接生成 HTML。
- `jekyll-seo-tag`：生成 title、description、canonical、Open Graph 及 JSON-LD。
- `jekyll-sitemap`：每次构建自动生成绝对网址的 sitemap。
- `robots.txt`：允许抓取并声明 sitemap。
- `jekyll-relative-links`：将正文的相对 Markdown 链接转换成发布网页链接。
- `jekyll-redirect-from`：将原始 notes 路径的 HTML 网址跳转到固定文章网址。
- `404.html`：返回目录入口；设置 noindex 并排除出 sitemap。
- `README.md` 与本说明：仓库维护资料，排除出公开站点与 sitemap。

正文中的行内公式仅将美元符号分隔形式调整为 Kramdown 的双美元符号；TeX 内容、数学叙述与参考文献保留。MathJax 负责浏览器内排版，文章正文并不依赖 JavaScript 才能出现。

仓库还提供自动构建检查：`.github/workflows/check-pages.yml` 使用 GitHub 官方的 Jekyll 构建环境，检查生成网址、导航、SEO 元数据、公式节点与 sitemap，并保留生成网站的预览压缩包。此检查不依赖 Pages 已启用。

本地检查可使用：

```text
bundle install
bundle exec jekyll build
```

正式收录使用文章 permalink，避免提交 GitHub 的 `blob/...md` 地址。

官方说明：[GitHub Pages 发布源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[Jekyll 页面与配置](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)、[Google 所有权验证](https://support.google.com/webmasters/answer/9008080)、[请求重新抓取](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)。
