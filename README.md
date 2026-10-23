# Take ONE 钱箱

公司钱箱现金流水：记账、余额走势、分类统计、现金盘点。
页面放在 GitHub Pages，数据存在 Firebase（Firestore），只有 @takeone51.com 的 Google 账号可以使用。
全部使用免费额度，不需要绑定信用卡。

| 文件 | 作用 |
|---|---|
| `index.html` | 页面本体 |
| `firebase-config.js` | Firebase 连接配置（第 2 步填写） |
| `firestore.rules` | 数据库安全规则（第 4 步粘贴到 Firebase） |

---

## 第 1 步：建立 Firebase 项目
1. 用公司 Google 账号打开 https://console.firebase.google.com
2. 点「创建项目」，名称填 `takeone-cashbox`（随意）。Google Analytics 可以关闭。
3. 免费方案（Spark）即可，不需要升级。

## 第 2 步：注册网页应用，取得配置
1. 项目首页点 `</>`（网页）图标，应用昵称填 `cashbox`，**不要**勾选 Firebase Hosting，点「注册应用」。
2. 页面会显示一段 `const firebaseConfig = { apiKey: ..., ... }`。
3. 把里面 6 个值分别填进本文件夹的 `firebase-config.js`，替换「在这里粘贴」。

## 第 3 步：开启 Google 登录
1. 左侧菜单「构建 → Authentication」→「开始使用」。
2. 「登录方法」→ 选 **Google** → 启用 → 选择项目支持邮箱 → 保存。
3. 「设置」→「已授权网域」→「添加网域」，填：`nekoshark-neko.github.io`

## 第 4 步：建立数据库并设置规则
1. 左侧菜单「构建 → Firestore Database」→「创建数据库」。
2. 位置选 **asia-northeast1（东京）** 或 **asia-northeast2（大阪）**（本项目用的是大阪），模式选「生产模式」。
3. 建好后点「规则」标签，把 `firestore.rules` 的全部内容粘贴进去，替换原有内容 → 「发布」。

## 第 5 步：上传到 GitHub 并开启 Pages
1. 打开 https://github.com/new ，仓库名填 `cashbox`，选 **Public**，点「Create repository」。
2. 在新仓库页面点「uploading an existing file」，把 `index.html`、`firebase-config.js`、`firestore.rules`、`README.md` 4 个文件拖进去 →「Commit changes」。
3. 仓库「Settings → Pages」，Source 选「Deploy from a branch」，Branch 选 `main`、文件夹 `/ (root)` → Save。
4. 等 1～2 分钟，网址是：https://nekoshark-neko.github.io/cashbox/

## 第 6 步：使用
- 手机、电脑打开上面的网址，点「用公司 Google 账号登录」。
- 第一次使用先在页面底部填 **期初余额**（开始记账时钱箱里的现金）。
- 手机可以「添加到主屏幕」，像 App 一样使用。
- 断网时也能记账，联网后自动上传。

---

## 以后修改页面
修改文件后，在 GitHub 仓库里打开该文件 → 铅笔图标编辑，或重新上传覆盖 → Commit，1～2 分钟后自动更新。

## 数据说明
- `tx/*`：每一笔记录（类型、金额、类别、日期、经手人、备注、记录人邮箱）。记录不能修改，只能删除后重记。
- `months/YYYY-MM`：每月收入/支出合计，页面自动维护，用来计算余额。
- `meta/settings`：期初余额。
- 备份：每月用「导出 CSV」存一份到公司共享盘。
