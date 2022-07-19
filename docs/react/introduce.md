---
order: 0
title: Ant Design of React
---

<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  </a>
</p>

<h1 align="center">antd packages</h1>

<div>

一套企业级 UI 设计语言和 React 组件库。

## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🌍 数十个国际化语言支持。
- 🎨 深入每个细节的主题定制能力。

## 🖥 兼容环境

- 现代浏览器和 IE11（需要 [polyfills](https://ant.design/docs/react/getting-started-cn#兼容性)）。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                                  | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                                      |

## 📦 安装

### 使用 pnpm 或 yarn 安装

**我们推荐使用 pnpm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

```bash
pnpm install antd-packages --save
```

## 🔨 示例

```tsx | pure
import { Button } from 'antd-packages'

const App = () => (
  <Button type="primary">按钮</Button>
)
```

引入样式：

```jsx | pure
import 'antd-packages/es/style/index.css'
```

_推荐_ `less 2.7.2` `less-loader 6.0.0`

```bash
pnpm i less@2.7.2  less-loader@6.0.0 -D
```

webpack.config.base.js 配置

```js | pure
if (preProcessor) {
  if (preProcessor === 'less-loader') {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        lessOptions: {
          javascriptEnabled: true
        },
        // modifyVars: {
        //   // 修改主题色
        //   "@primary-color": "#f40"
        // },
        sourceMap: isEnvProduction
          ? shouldUseSourceMap
          : isEnvDevelopment
      }
    })
  } else {
    loaders.push(
      {
        loader: require.resolve(
          'resolve-url-loader'
        ),
        options: {
          sourceMap: isEnvProduction
            ? shouldUseSourceMap
            : isEnvDevelopment,
          root: paths.appSrc
        }
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true
        }
      }
    )
  }
}
```

## 按需加载

安装 `babel-plugin-import`
`pnpm i babel-plugin-import -D`
根目录新建.babelrc 文件并写入

```js | pure
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd-packages",
        "style": true
      }
    ]
  ]
}
```

## ⌨️ 本地开发

```bash
$ git clone https://github.com/qc-z/antd-packages.git
$ cd antd-packages
$ pnpm install
$ pnpm start
```

打开浏览器访问 http://127.0.0.1:8000
