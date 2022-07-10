---
title: Empty 空状态
group:
  title: 数据展示
  order: 4
nav:
  title: Empty 空状态
  path: /components
--- 

# 空状态 Empty

空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 基本

<code src="./demos/basic.tsx"></code>

## 选择图片

<code src="./demos/simple.tsx"></code>

## 自定义

<code src="./demos/customize.tsx"></code>

## 全局化配置

<code src="./demos/config-provider.tsx"></code>

## 无描述

<code src="./demos/description.tsx"></code>

## API

```jsx | pure
<Empty>
  <Button>创建</Button>
</Empty>
```

| 参数        | 说明                                           | 类型          | 默认值                          | 版本 |
| ----------- | ---------------------------------------------- | ------------- | ------------------------------- | ---- |
| description | 自定义描述内容                                 | ReactNode     | -                               |      |
| image       | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode     | `Empty.PRESENTED_IMAGE_DEFAULT` |      |
| imageStyle  | 图片样式                                       | CSSProperties | -                               |      |

## 内置图片

```jsx | pure
- Empty.PRESENTED_IMAGE_SIMPLE

  <div class="site-empty-buildIn-img site-empty-buildIn-simple"><div>

- Empty.PRESENTED_IMAGE_DEFAULT

  <div class="site-empty-buildIn-img site-empty-buildIn-default"></div>
```
