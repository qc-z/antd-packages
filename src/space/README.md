---
title: Space 间距
group:
  title: 布局
  order: 1
nav:
  title: Space 间距
  path: /components
---

# 间距 Space

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 基本用法

<code src="./demos/base.tsx"></code>

## 垂直间距

<code src="./demos/vertical.tsx"></code>

## 间距大小

<code src="./demos/size.tsx"></code>

## 对齐

<code src="./demos/align.tsx"></code>

## 自定义尺寸

<code src="./demos/customize.tsx"></code>

## 自动换行

<code src="./demos/wrap.tsx"></code>

## 多样的 Child

<code src="./demos/debug.tsx"></code>

## Flex gap 样式

<code src="./demos/gap-in-line.tsx"></code>

## 分隔符

<code src="./demos/split.tsx"></code>

## API

| 参数      | 说明                                   | 类型                                     | 默认值       | 版本                  |
| --------- | -------------------------------------- | ---------------------------------------- | ------------ | --------------------- |
| align     | 对齐方式                               | `start` \| `end` \|`center` \|`baseline` | -            | 4.2.0                 |
| direction | 间距方向                               | `vertical` \| `horizontal`               | `horizontal` | 4.1.0                 |
| size      | 间距大小                               | [Size](#Size) \| [Size\[\]](#Size)       | `small`      | 4.1.0 \| Array: 4.9.0 |
| split     | 设置拆分                               | ReactNode                                | -            | 4.7.0                 |
| wrap      | 是否自动换行，仅在 `horizontal` 时有效 | boolean                                  | false        | 4.9.0                 |

### Size

`'small' | 'middle' | 'large' | number`
