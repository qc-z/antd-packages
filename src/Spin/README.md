---
title: 加载中 Spin
order: 5
group:
  title: 反馈
nav:
  title: 加载中 Spin
  path: /components
---

# 加载中 Spin

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 基本用法

<code src="./demos/basic.tsx"></code>

## 各种大小

<code src="./demos/size.tsx"></code>

## 容器

<code src="./demos/inside.tsx"></code>

## 卡片加载中

<code src="./demos/nested.tsx"></code>

## 自定义描述文案

<code src="./demos/tip.tsx"></code>

## 延迟

<code src="./demos/delayAndDebounce.tsx"></code>

## 自定义指示符

<code src="./demos/custom-indicator.tsx"></code>

## API

| 参数             | 说明                                         | 类型          | 默认值    |
| ---------------- | -------------------------------------------- | ------------- | --------- |
| delay            | 延迟显示加载效果的时间（防止闪烁）           | number (毫秒) | -         |
| indicator        | 加载指示符                                   | ReactNode     | -         |
| size             | 组件大小，可选值为 `small` `default` `large` | string        | `default` |
| spinning         | 是否为加载中状态                             | boolean       | true      |
| tip              | 当作为包裹元素时，可以自定义描述文案         | ReactNode     | -         |
| wrapperClassName | 包装器的类属性                               | string        | -         |

### 静态方法

- `Spin.setDefaultIndicator(indicator: ReactNode)`

  你可以自定义全局默认 Spin 的元素。
