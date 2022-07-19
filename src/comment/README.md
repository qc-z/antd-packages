---
title: Comment 评论
group:
  title: 数据展示
  order: 4
nav:
  title: Comment 评论
  path: /components
---

# 评论 Comment

对网站内容的反馈、评价和讨论。

## 何时使用

评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。

## 基本评论

<code src="./demos/basic.tsx"></code>

## 配合 List 组件

<code src="./demos/list.tsx"></code>

## 嵌套评论

<code src="./demos/nested.tsx"></code>

## 回复框

<code src="./demos/editor.tsx"></code>

## API

| 参数     | 说明                                                 | 类型                | 默认值 | 版本 |
| -------- | ---------------------------------------------------- | ------------------- | ------ | ---- |
| actions  | 在评论内容下面呈现的操作项列表                       | Array&lt;ReactNode> | -      |      |
| author   | 要显示为注释作者的元素                               | ReactNode           | -      |      |
| avatar   | 要显示为评论头像的元素 - 通常是 antd Avatar 或者 src | ReactNode           | -      |      |
| children | 嵌套注释应作为注释的子项提供                         | ReactNode           | -      |      |
| content  | 评论的主要内容                                       | ReactNode           | -      |      |
| datetime | 展示时间描述                                         | ReactNode           | -      |      |
