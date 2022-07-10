---
title: Rate 评分
group:
  title: 数据录入
  order: 3
nav:
  title: Rate 评分
  path: /components
---

# 评分 Rate

评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 基本

<code src="./demos/basic.tsx"></code>

## 半星

<code src="./demos/half.tsx"></code>

## 文案展现

<code src="./demos/text.tsx"></code>

## 只读

<code src="./demos/disabled.tsx"></code>

## 清除

<code src="./demos/clear.tsx"></code>

## 其他字符

<code src="./demos/character.tsx"></code>

## 自定义字符

<code src="./demos/character-function.tsx"></code>

## API

| 属性          | 说明                     | 类型                                  | 默认值            | 版本              |
| ------------- | ------------------------ | ------------------------------------- | ----------------- | ----------------- |
| allowClear    | 是否允许再次点击后清除   | boolean                               | true              |                   |
| allowHalf     | 是否允许半选             | boolean                               | false             |                   |
| autoFocus     | 自动获取焦点             | boolean                               | false             |                   |
| character     | 自定义字符               | ReactNode \| (RateProps) => ReactNode | &lt;StarFilled /> | function(): 4.4.0 |
| className     | 自定义样式类名           | string                                | -                 |                   |
| count         | star 总数                | number                                | 5                 |                   |
| defaultValue  | 默认值                   | number                                | 0                 |                   |
| disabled      | 只读，无法进行交互       | boolean                               | false             |                   |
| style         | 自定义样式对象           | CSSProperties                         | -                 |                   |
| tooltips      | 自定义每项的提示信息     | string\[]                             | -                 |                   |
| value         | 当前数，受控值           | number                                | -                 |                   |
| onBlur        | 失去焦点时的回调         | function()                            | -                 |                   |
| onChange      | 选择时的回调             | function(value: number)               | -                 |                   |
| onFocus       | 获取焦点时的回调         | function()                            | -                 |                   |
| onHoverChange | 鼠标经过时数值变化的回调 | function(value: number)               | -                 |                   |
| onKeyDown     | 按键回调                 | function(event)                       | -                 |                   |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
