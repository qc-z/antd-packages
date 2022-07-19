---
title: Result 结果
group:
  title: 反馈
  order: 5
nav:
  title: Result 结果
  path: /components
---

# 结果 Result

用于反馈一系列操作任务的处理结果。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## Success

<code src="./demos/success.tsx"></code>

## Info

<code src="./demos/info.tsx"></code>

## Warning

<code src="./demos/warning.tsx"></code>

## 403

<code src="./demos/403.tsx"></code>

## 404

<code src="./demos/404.tsx"></code>

## 500

<code src="./demos/500.tsx"></code>

## Error

<code src="./demos/error.tsx"></code>

## 自定义 icon

<code src="./demos/customIcon.tsx"></code>

## API

| 参数     | 说明                       | 类型                                                                   | 默认值 |
| -------- | -------------------------- | ---------------------------------------------------------------------- | ------ |
| extra    | 操作区                     | ReactNode                                                              | -      |
| icon     | 自定义 icon                | ReactNode                                                              | -      |
| status   | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | subTitle 文字              | ReactNode                                                              | -      |
| title    | title 文字                 | ReactNode                                                              | -      |
