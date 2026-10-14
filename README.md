# AbnerSolo 学术笔记

[网站首页](https://abnersolo.github.io/) · [数学基础](https://abnersolo.github.io/math/group-ring-field-quotient-ideal/) · [Gaussian 笔记](https://abnersolo.github.io/lattice/gaussian-smoothing-parameter/)

> 网站源码已配置完成；公开网站需要在仓库 Settings → Pages 中启用。具体步骤见 [发布与收录说明](PUBLISHING.md)。

## About Me

本科就读于数学专业，现跨专业进入网络空间安全方向攻读博士学位。本仓库将持续记录并分享我在直博阶段的学习与研究内容。

目前发布的内容主要为论文阅读笔记与网络空间安全相关数学基础笔记，旨在梳理个人对论文核心思想、理论框架及相关数学工具的理解，也希望能为从事相同或相关方向研究的同学提供参考。

由于本人仍处于学习阶段，内容难免存在疏漏或理解不当之处，欢迎批评指正与交流讨论。

---

I received my undergraduate education in mathematics and am now pursuing a direct-entry Ph.D. in cyberspace security as a student transitioning into the field from a different academic background. This repository documents and shares my learning and research progress throughout my Ph.D. studies.

At present, the content mainly consists of research paper reading notes and mathematical foundations for cyberspace security. These notes are intended to organize my understanding of core ideas, theoretical frameworks, and mathematical tools. I also hope they may serve as a useful reference for graduate students and researchers working in related areas.

As I am still learning, the notes may contain omissions or misunderstandings. Comments, corrections, and discussions are sincerely welcome.

---

## 数学基础 | Mathematical Foundations

### 网络空间安全数学基础

- **01 · [群、环、域、商群与理想](notes/algebra/group-ring-field-quotient-ideal.md)**  
  内容：从定义来源出发理解群、环、域之间增加的结构与限制；解释商群、商环、正规子群与理想的含义，以及它们与同态核、第一同构定理之间的联系。  
  语言：中文；整理日期：2026-10-13。  
  *A Chinese note on groups, rings, fields, quotient structures, normal subgroups, ideals, kernels, and the first isomorphism theorem.*

---

## 论文阅读笔记 | Paper Reading Notes

### 格密码学 | Lattice Cryptography

- **01 · [GAUSSIAN：从平滑参数到最坏情况—平均情况归约](notes/lattice/gaussian-smoothing-parameter.md)**  
  阅读对象：Daniele Micciancio and Oded Regev, *Worst-case to Average-case Reductions based on Gaussian Measures*（FOCS 2004 / SICOMP 2007）。  
  内容：平滑参数的定义与几何意义、对偶格与 Fourier 分析、Poisson 求和公式、关键引理的证明，以及到 SIS 的归约思路。  
  语言：中文；整理日期：2026-10-08。核心公式已对照作者公开稿，未展开或仍需复核的部分在文末标注。  
  *A Chinese reading note on smoothing parameters, Gaussian measures on lattices, and worst-case to average-case reductions, with proofs, intuition, and explicit verification notes.*

笔记会区分原论文结论、个人推导与直观解释。更正与讨论欢迎通过本仓库交流。

*The notes distinguish results from the paper, independent derivations, and intuition. Corrections and discussion are welcome.*

---

## 网站发布与维护

本站使用 GitHub Pages / Jekyll。原始笔记保存在 `notes/`，每篇笔记通过 Front Matter 设置标题、摘要和固定链接。网站首页使用 `index.md`；`jekyll-seo-tag` 生成网页标题、摘要、canonical 和结构化数据，`jekyll-sitemap` 自动生成 [sitemap.xml](https://abnersolo.github.io/sitemap.xml)。

- [网络空间安全数学基础——群，环，域，商群与理想（网页）](https://abnersolo.github.io/math/group-ring-field-quotient-ideal/)
- [GAUSSIAN 阅读笔记（网页）](https://abnersolo.github.io/lattice/gaussian-smoothing-parameter/)
- [发布、账户操作与 Google 收录说明](PUBLISHING.md)

添加笔记时请设置唯一的 `permalink`，并在 `index.md` 和本目录增加入口。正文和公式内容应保留；Kramdown 的行内公式使用双美元符号包裹，独立公式块继续使用原有双美元符号。
