---
title: Anchor 锚点
group:
  title: 其他
  order: 6
nav:
  title: Anchor 锚点
  path: /components
---

# 锚点 Anchor

用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 基本

<code src="./demos/basic.tsx"></code>

## 静态位置

<code src="./demos/static.tsx"></code>

## 自定义 onClick 事件

<code src="./demos/onClick.tsx"></code>

## 自定义锚点高亮

<code src="./demos/customizeHighlight.tsx"></code>

## 设置锚点滚动偏移量

<code src="./demos/targetOffset.tsx"></code>

## 监听锚点链接改变

<code src="./demos/onChange.tsx"></code>

## API

### Anchor Props

| 成员             | 说明                                                                                | 类型                                | 默认值       | 版本 |
| ---------------- | ----------------------------------------------------------------------------------- | ----------------------------------- | ------------ | ---- |
| affix            | 固定模式                                                                            | boolean                             | true         |      |
| bounds           | 锚点区域边界                                                                        | number                              | 5            |      |
| getContainer     | 指定滚动的容器                                                                      | () => HTMLElement                   | () => window |      |
| getCurrentAnchor | 自定义高亮的锚点                                                                    | (activeLink: string) => string      | -            |      |
| offsetTop        | 距离窗口顶部达到指定偏移量后触发                                                    | number                              |              |      |
| showInkInFixed   | `affix={false}` 时是否显示小圆点                                                    | boolean                             | false        |      |
| targetOffset     | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#components-anchor-demo-targetOffset) | number                              | -            |      |
| onChange         | 监听锚点链接改变                                                                    | (currentActiveLink: string) => void | -            |      |
| onClick          | `click` 事件的 handler                                                              | function(e: Event, link: Object)    | -            |      |

### Link Props

| 成员   | 说明                             | 类型      | 默认值 | 版本 |
| ------ | -------------------------------- | --------- | ------ | ---- |
| href   | 锚点链接                         | string    | -      |      |
| target | 该属性指定在何处显示链接的资源。 | string    | -      |      |
| title  | 文字内容                         | ReactNode | -      |      |
