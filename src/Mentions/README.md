---
title: Mentions 提及
group:
  title: 数据录入
  order: 3
nav:
  title: Mentions 提及
  path: /components
---

# 提及 Mentions

提及组件。

## 何时使用

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 异步加载

<code src="./demos/async.tsx"></code>

## 配合 Form 使用

<code src="./demos/form.tsx"></code>

## 自定义触发字符

<code src="./demos/prefix.tsx"></code>

## 无效或只读

<code src="./demos/readonly.tsx"></code>

## 向上展开

<code src="./demos/placement.tsx"></code>

## 自动大小

<code src="./demos/autoSize.tsx"></code>

## 自定义状态

<code src="./demos/status.tsx"></code>

## API

```jsx | pure
<Mentions onChange={onChange}>
  <Mentions.Option value="sample">
    Sample
  </Mentions.Option>
</Mentions>
```

### Mentions

| 参数              | 说明                                                                      | 类型                                                     | 默认值      | 版本   |
| ----------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- | ----------- | ------ |
| autoFocus         | 自动获得焦点                                                              | boolean                                                  | false       |        |
| autoSize          | 自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 } | boolean \| object                                        | false       |        |
| defaultValue      | 默认值                                                                    | string                                                   | -           |        |
| filterOption      | 自定义过滤逻辑                                                            | false \| (input: string, option: OptionProps) => boolean | -           |        |
| getPopupContainer | 指定建议框挂载的 HTML 节点                                                | () => HTMLElement                                        | -           |        |
| notFoundContent   | 当下拉列表为空时显示的内容                                                | ReactNode                                                | `Not Found` |        |
| placement         | 弹出层展示位置                                                            | `top` \| `bottom`                                        | `bottom`    |        |
| prefix            | 设置触发关键字                                                            | string \| string\[]                                      | `@`         |        |
| split             | 设置选中项前后分隔符                                                      | string                                                   | ` `         |        |
| status            | 设置校验状态                                                              | 'error' \| 'warning'                                     | -           | 4.19.0 |
| validateSearch    | 自定义触发验证逻辑                                                        | (text: string, props: MentionsProps) => void             | -           |        |
| value             | 设置值                                                                    | string                                                   | -           |        |
| onBlur            | 失去焦点时触发                                                            | () => void                                               | -           |        |
| onChange          | 值改变时触发                                                              | (text: string) => void                                   | -           |        |
| onFocus           | 获得焦点时触发                                                            | () => void                                               | -           |        |
| onResize          | resize 回调                                                               | function({ width, height })                              | -           |        |
| onSearch          | 搜索时触发                                                                | (text: string, prefix: string) => void                   | -           |        |
| onSelect          | 选择选项时触发                                                            | (option: OptionProps, prefix: string) => void            | -           |        |

### Mentions 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### Option

| 参数     | 说明           | 类型      | 默认值 |
| -------- | -------------- | --------- | ------ |
| children | 选项内容       | ReactNode | -      |
| value    | 选择时填充的值 | string    | -      |