---
title: Tag 标签
group:
  title: 数据展示
  order: 4
nav:
  title: Tag 标签
  path: /components
---

# 标签 Tag

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 基本

<code src="./demos/basic.tsx"></code>

## 多彩标签

<code src="./demos/colorful.tsx"></code>

## 反色多彩标签

<code src="./demos/colorful-inverse.tsx"></code>

## 动态添加和删除

<code src="./demos/control.tsx"></code>

## 可选择标签

<code src="./demos/checkable.tsx"></code>

## 控制关闭状态

<code src="./demos/controlled.tsx"></code>

## 添加动画

<code src="./demos/animation.tsx"></code>

## 图标按钮

<code src="./demos/icon.tsx"></code>

## 预设状态的标签

<code src="./demos/status.tsx"></code>

## 自定义关闭按钮

<code src="./demos/customize.tsx"></code>

## API

### Tag

| 参数      | 说明                                                       | 类型        | 默认值 | 版本  |
| --------- | ---------------------------------------------------------- | ----------- | ------ | ----- |
| closable  | 标签是否可以关闭（点击默认关闭）                           | boolean     | false  |       |
| closeIcon | 自定义关闭按钮                                             | ReactNode   | -      | 4.4.0 |
| color     | 标签色                                                     | string      | -      |       |
| icon      | 设置图标                                                   | ReactNode   | -      |       |
| visible   | 是否显示标签                                               | boolean     | true   |       |
| onClose   | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e) => void | -      |       |

### Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |
