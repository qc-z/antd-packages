---
title: Badge 徽标数
group:
  title: 数据展示
  order: 4
nav:
  title: Badge 徽标数
  path: /components
--- 

# 徽标数 Badge

图标右上角的圆形徽标数字。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 基本

<code src="./demos/basic.tsx"></code>

## 独立使用

<code src="./demos/no-wrapper.tsx"></code>

## 封顶数字

<code src="./demos/overflow.tsx"></code>

## 讨嫌的小红点

<code src="./demos/dot.tsx"></code>

## 动态

<code src="./demos/change.tsx"></code>

## 可点击

<code src="./demos/link.tsx"></code>

## 自定义位置偏移

<code src="./demos/offset.tsx"></code>

## 大小

<code src="./demos/size.tsx"></code>

## 状态点

<code src="./demos/status.tsx"></code>

## 多彩徽标

<code src="./demos/colorful.tsx"></code>

## 缎带

<code src="./demos/ribbbon.tsx"></code>

## Ribbon Debug

<code src="./demos/ribbon-debug.tsx"></code>

## 各种混用的情况

<code src="./demos/mix.tsx"></code>

## 自定义标题

<code src="./demos/title.tsx"></code>

## API

### Badge

| 参数          | 说明                                                                     | 类型                                                           | 默认值 | 版本  |
| ------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------- | ------ | ----- |
| color         | 自定义小圆点的颜色                                                       | string                                                         | -      |       |
| count         | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | ReactNode                                                      | -      |       |
| dot           | 不展示数字，只有一个小红点                                               | boolean                                                        | false  |       |
| offset        | 设置状态点的位置偏移                                                     | \[number, number]                                              | -      |       |
| overflowCount | 展示封顶的数字值                                                         | number                                                         | 99     |       |
| showZero      | 当数值为 0 时，是否展示 Badge                                            | boolean                                                        | false  |       |
| size          | 在设置了 `count` 的前提下有效，设置小圆点的大小                          | `default` \| `small`                                           | -      | 4.6.0 |
| status        | 设置 Badge 为状态点                                                      | `success` \| `processing` \| `default` \| `error` \| `warning` | -      |       |
| text          | 在设置了 `status` 的前提下有效，设置状态点的文本                         | ReactNode                                                      | -      |       |
| title         | 设置鼠标放在状态点上时显示的文字                                         | string                                                         | -      |       |

### Badge.Ribbon (4.5.0+)

| 参数      | 说明                                                      | 类型             | 默认值 | 版本 |
| --------- | --------------------------------------------------------- | ---------------- | ------ | ---- |
| color     | 自定义缎带的颜色                                          | string           | -      |      |
| placement | 缎带的位置，`start` 和 `end` 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end`  |      |
| text      | 缎带中填入的内容                                          | ReactNode        | -      |      |
