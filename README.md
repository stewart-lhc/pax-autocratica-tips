# The Autocrat’s Index

面向 **Pax Autocratica** Early Access 的独立中文资料站。站点把已核验的官方、Steam 与开发者公开材料整理成开局指南、机制索引、配置要求、多人状态、更新追踪与来源政策；不售卖游戏、不代表 Multiverse，也不把社区猜测写成机制结论。

## 当前状态

- 内容基线：2026-08-11；主游戏 Steam AppID 为 `1067360`。
- 内容真实性：`已核验` 仅用于当前 Steam 商店、官方站点或开发者公开发言可支持的事实；`观察到` 表示官方媒体中可读但尚未在本地存档复现；`计划中` 不等于已上线功能。
- 图片来源：`public/images/steam/` 为 Steam 官方媒体集，用于识别、评论与说明；相关商标和美术资产归 Multiverse 所有。
- 发布状态：实现与本地验证工作进行中，**尚未部署**，没有 production URL、canonical host 或生产提交。

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

Early Access 变化快。发现不准确之处时，应提供页面、具体断言、游戏/补丁版本，以及可公开复查的官方或 Steam 来源；未能核验的数据保持空白，不以推测补齐。
