# The Autocrat’s Index

面向 **Pax Autocratica** Early Access 的独立中文资料站。站点把已核验的官方、Steam 与开发者公开材料整理成开局指南、机制索引、配置要求、多人状态、更新追踪与来源政策；不售卖游戏、不代表 Multiverse，也不把社区猜测写成机制结论。

## 当前状态

- 内容基线：2026-08-13；主游戏 Steam AppID 为 `1067360`。现有 11 个内容路由已完成一轮实质扩展，未改变既有 TDH、slug 或 canonical 合同。
- 证据基线：claim-level 来源账本现有 52 行，发现观察现有 35 条；新增官方路线图图片 `public/images/steam/roadmap-2026.jpg` 与官方 12 分钟玩法视频来源。Steam 2026-08-13 快照为全语言 825 条评测（740 好评、85 差评，商店标记 `Very Positive`）；该数字只代表检查时点。
- 内容真实性：`已核验` 仅用于当前 Steam 商店、官方站点或开发者公开发言可支持的事实；`观察到` 表示官方媒体中可读但尚未在本地存档复现；`计划中` 不等于已上线功能。
- 图片来源：`public/images/steam/` 为 Steam 官方媒体集，用于识别、评论与说明；相关商标和美术资产归 Multiverse 所有。
- 发布状态：历史记录与 `ops/run.json` 已记录 GitHub `main` 触发的 Cloudflare Pages 外部集成、生产提交与站点 [paxautocraticatips.com](https://paxautocraticatips.com/)；源码位于 [stewart-lhc/pax-autocratica-tips](https://github.com/stewart-lhc/pax-autocratica-tips)。仓库没有生产部署 CLI、CI workflow 或部署状态查询；每次 push 后必须等待外部传播并完成线上 smoke check，不能仅凭 push 或本地构建宣称发布完成。
- 搜索收录：Google Search Console 域名属性 `sc-domain:paxautocraticatips.com` 已完成 DNS 验证；`sitemap-index.xml` 提交成功并覆盖 12 个公开 URL。首页与 6 个核心内容页已加入优先抓取队列，其余页面由 sitemap 提供给 Google。

## 本地运行

项目使用 `pnpm-lock.yaml` 固定依赖：

```bash
pnpm install
pnpm dev
```

开发服务器绑定 `0.0.0.0`。完成后可执行：

```bash
pnpm run check
pnpm test
pnpm run build
pnpm run audit:content
```

项目不记录独立 lint 命令；以上命令以当前 `package.json` 为准。

## 内容与证据

- 页面与搜索意图：`ops/02-page-matrix.csv`
- 每页来源账本：`ops/03-source-ledger.csv`
- 浏览器内容验收：`ops/04-content-review.csv`（当前均待验收）
- 候选与发现观察：`ops/01-candidates.csv`、`ops/01-discovery-observations.csv`
- 运行阶段与发布字段：`ops/run.json`

发布回滚边界：只允许创建 `git revert` 提交并 push 到 `main`，再等待 Cloudflare Pages 传播并复做 smoke check；不使用 `reset` 或 force push。

Early Access 变化快。发现不准确之处时，应提供页面、具体断言、游戏/补丁版本，以及可公开复查的官方或 Steam 来源；未能核验的数据保持空白，不以推测补齐。
