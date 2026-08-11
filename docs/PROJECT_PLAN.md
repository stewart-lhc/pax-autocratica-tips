# PAX Autocratica Wiki Agent — Plan Gate 摘要

## 元数据

- 计划名称：Early Access 首版资料站实现与证据闭环
- 当前基线：Astro 静态站点已具备 11 个内容页面、官方 Steam 媒体与内容审计脚本；尚无线上地址或部署记录。
- 事实源：`src/data/site.ts`、Steam 商店 AppID `1067360`、官方站点、Steam Community、开发者 AMA；逐页映射见 `ops/03-source-ledger.csv`。
- 任务等级：S2（跨页面内容合同、来源追溯与发布前验证）。

## 目标、非目标与约束

- 目标：交付可构建的资料站；每个公开页面有至少两个不同域名的可追溯来源；未知与计划功能显式标识；保留独立浏览器验收记录。
- 非目标：不声称已完成实机全流程、不虚构全量攻略/数值/排行、不创建生产资源、不部署或售卖任何商品。
- 约束：Early Access 内容随版本变化；采用官方/商店/开发者公开材料优先，社区内容只能记录观察或待复核信号；不得泄露密钥或覆盖其他 agent 改动。

## 任务 DAG 与所有权

| Task ID | 工作项 | 依赖 | 所有权文件/模块 | 产物 |
|---|---|---|---|---|
| T1 | 页面内容与视觉实现 | 已有证据基线 | `src/`、`public/`（实现 agent） | 可渲染 Astro 页面 |
| T2 | 证据账本、页面矩阵与内容审阅状态 | T1 页面清单 | `ops/*.csv`、`ops/run.json` | 可追溯内容合同 |
| T3 | 项目说明与计划门 | T1、T2 | `README.md`、`docs/PROJECT_PLAN.md` | 中文交付说明 |
| T4 | 静态检查、内容测试与浏览器验收 | T1–T3 | 不改生产代码（evaluator） | 命令证据与验收记录 |

## Acceptance Criteria

| AC ID | 可观察行为 | 验证方法 | 通过标准 |
|---|---|---|---|
| AC-1 | 页面可由 Astro 解析与构建 | `pnpm run check`、`pnpm run build` | 两命令退出码为 0 |
| AC-2 | 内容结构符合脚本合同 | `pnpm test`、`pnpm run audit:content` | 两命令退出码为 0 |
| AC-3 | 每个公开 slug 具备跨域来源 | 核对 `ops/03-source-ledger.csv` | 每 slug 至少两个不同 `domain` |
| AC-4 | 公开页在目标视口无明显内容、链接与移动端问题 | 独立浏览器检查 | `ops/04-content-review.csv` 标为通过并有验收人/日期 |
| AC-5 | 发布信息真实 | 核对 `ops/run.json` 与实际部署 | 未部署时保持空 URL 与非 passed 发布阶段 |

## 测试矩阵与风险

| 层级 | 主路径 | 错误/边界 | 当前状态 |
|---|---|---|---|
| 静态 | 类型检查与构建 | 缺失资源、无效 Astro 数据 | 已通过 |
| 内容 | 标题、来源、断言与图片审计 | Early Access 过期、未证实数值 | 已通过 |
| 浏览器 | 桌面和移动页面、导航、外链 | 小屏溢出、链接失效 | 已通过；1 个低严重度问题已修复并复验 |
| 发布 | Preview/Production smoke check | 域名、canonical、索引错误 | 未获授权，不执行 |

- 风险：商店评价、价格、讨论热度和路线图会漂移；当前资料不等于实机性能或长期平衡结论。
- 回滚：文档和静态内容均可由 Git 提交回退；生产资源尚未创建。
- 文档影响：README、页面矩阵、来源账本与内容验收记录已纳入本计划。

## Plan Gate

- 结论：**LOCAL_ACCEPTANCE_PASSED**。
- 已完成：T4 的 `check`、`test`、`build`、内容审计与桌面/移动浏览器验收；证据见 `ops/evidence/browser/report.md`。
- 发布硬门：没有发布授权、canonical host、部署记录与线上 smoke check 前，不得报告已上线。
