okam-iview-example

====

在 okam 的百度小程序中使用 iview 组件库

## 开发前阅读

此项目是基于 `okam` 开发框架开发的小程序项目，开发前先了解：[Okam 的使用](https://ecomfe.github.io/okam)

## ui 组件

- [iview](https://weapp.iviewui.com/docs/guide/start)

## 快速开始

pages 中的 示例来自 [ivew example](https://github.com/TalkingData/iview-weapp/tree/master/examples)

![home](./docs/demo.png=200x400)

### 准备工作

* 安装 Node (`Node >= 8` && `npm >= 3`)

* 执行 `npm install`

### 开发

* 百度小程序运行命令

    * `npm run dev`：           带 watch 开发模式

    * `npm run dev:clean`：     删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式

    * `npm run dev:server`：    带 watch && 开发 Server 开发模式

    * `npm run build`：         删掉构建重新构建（没有 watch && 开发 Server）

    * `npm run prod`：          生产环境构建

* 微信小程序运行命令

    * `npm run dev:wx：`        微信小程序开发构建

    * `npm run dev:wx:clean`：  微信小程序：删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式

    * `npm run dev:wx:server`： 带 watch && 开发 Server 开发模式

    * `npm run prod:wx`：       微信小程序生产环境构建

* 支付宝小程序运行命令

    * `npm run dev:ant`：       微信小程序开发构建

    * `npm run dev:ant:clean`： 微信小程序：删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式

    * `npm run dev:ant:server`：带 watch && 开发 Server 开发模式

    * `npm run prod:ant`：      微信小程序生产环境构建

* 头条小程序运行命令

    * `npm run dev:tt`：       微信小程序开发构建

    * `npm run dev:tt:clean`： 微信小程序：删掉构建产物（不包括项目配置文件）并重新构建且带 watch 开发模式

    * `npm run dev:tt:server`：带 watch && 开发 Server 开发模式

    * `npm run prod:tt`：      微信小程序生产环境构建

### 目录结构说明

```
.
├── README.md
├── package.json
├── doc                     // 缓存项目源图片或者其它文档目录
├── dist                    // 百度小程序 构建产物，开发工具得选择该构建产物目录作为项目根目录方能预览
├── wx_dist                 // 微信小程序 构建产物，开发工具得选择该构建产物目录作为项目根目录方能预览
├── ant_dist                // 支付宝小程序 构建产物，开发工具得选择该构建产物目录作为项目根目录方能预览
├── tt_dist                 // 头条小程序 构建产物，开发工具得选择该构建产物目录作为项目根目录方能预览
├── .tinyimgcache           // 图片压缩的缓存信息，不可删掉，否则会导致图片重复压缩
├── project.json5           // 小程序项目配置文件，除了语法使用 JS 对象形式，配置说明参考官方小程序说明
├── scripts                 // 构建相关脚本
│   ├── build.js            // 构建入口脚本
│   ├── base.config.js      // 基础构建配置文件
│   ├── base.config.js      // 基础构建配置文件
│   ├── tt.config.js        // 头条小程序构建配置文件
│   ├── ant.config.js       // 支付宝小程序构建配置文件
│   ├── wx.config.js        // 微信小程序构建配置文件
│   └── swan.config.js      // 百度 Swan 小程序构建配置文件
└── src                     // 项目源码
    ├── app.js            // 小程序入口脚本
    ├── app.styl         // 小程序入口样式
    └── pages               // 小程序页面集合
        ├── home            // 首页
        ├── ...
        └── ...
```

## 存在问题 （百度小程序中使用 iview 存在的问题）
* [x] `node_modules` 路径问题
* [x] `event detail` 高低版本不一致问题
* [x] 里面用 `data` 上用了 `...` 了 必须 `babel7` 转
* [ ] `wxs` 语法不一致未做处理
    * [wx: wxs](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/)
    * [swan: filter](https://smartprogram.baidu.com/docs/develop/framework/view_filter/)
* [ ] `getRelationNodes、relations` 不支持
* [ ] 字体渲染： 字体 `ios` 真机正常 、`android` 不正常

## 组件可用情况
* 布局
    * [x] Layout 栅格布局
    * [ ] Grid 宫格 (getRelationNodes)
    * [x] Panel 面板
    * [ ] List 列表 (开发工具)
    * [x] Card 卡片
* 基础组件
    * [x] Button 按钮
    * [x] Color 色彩
    * [ ] Icon 图标 (icon)
* 导航
    * [ ] TabBar 标签栏 (getRelationNodes)
    * [ ] Tabs 标签页 (getRelationNodes)
    * [x] Drawer 抽屉
    * [ ] Page 分页 (细节样式 + icon)
    * [x] Steps 步骤条 (wxs + getRelationNodes)
    * [ ] NoticeBar 通告栏 (getRelationNodes + icon)
    * [ ] Index 索引选择器 (wxs + 侧边标签不显示)
    * [ ] Sticky 吸顶容器 (getRelationNodes)
* 操作反馈
    * ActionSheet 动作面板
    * [x] Toast 轻提示
    * [ ] Modal 对话框 (getRelationNodes, 样式不一致)
    * [x] Message 全局提醒
    * [ ] Spin 加载中 (样式 + 开发工具)
    * [ ] Swipeout 滑动菜单 (wxs + icon)
* 视图
    * [x] Badge 徽章
    * [x] Alert 警告提示
    * [ ] Tag 标签 (wxs === ok)
    * [x] Progress 进度条
    * [x] Avatar 头像
    * [x] CountDown 倒计时
    * [x] Divider 分隔符 (wxs === ok)
    * [ ] Collapse 折叠面板 (icon)
    * [x] LoadMore 页底提示
* 表单
    * [x] Input 输入框 (细节样式，height, min-height，混用渲染机制不一致)
    * [ ] Radio 单选 (getRelationNodes)
    * [ ] Checkbox 复选 (getRelationNodes)
    * [ ] Switch 开关  (开发工具)
    * [ ] Rate 评分 (开发工具)
    * [x] InputNumber 数字输入框

### 代码规范说明
fecs: https://github.com/ecomfe/fecs

### 文档
* [iview](https://weapp.iviewui.com/docs/guide/start)
* [okam 使用教程](https://ecomfe.github.io/okam)
* [百度小程序](https://smartprogram.baidu.com/docs/develop/tutorial/codedir)
* [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/index.html)
* [支付宝小程序](https://docs.alipay.com/mini/developer/getting-started)
* [头条小程序](https://microapp.bytedance.com/docs/framework/)
* [快应用](https://doc.quickapp.cn/)
