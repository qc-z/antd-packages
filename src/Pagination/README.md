---
title: 分页 Pagination
order: 2
group:
  title: 导航
nav:
  title: 分页 Pagination
  path: /components
---

# 分页 Pagination

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 基本

<code src="./demos/basic.tsx"></code>

## 更多

<code src="./demos/more.tsx"></code>

## 改变

<code src="./demos/changer.tsx"></code>

## 跳转

<code src="./demos/jump.tsx"></code>

## 迷你

<code src="./demos/mini.tsx"></code>

## 简洁

<code src="./demos/simple.tsx"></code>

## 受控

<code src="./demos/controlled.tsx"></code>

## 总数

<code src="./demos/total.tsx"></code>

## 全部展示

<code src="./demos/all.tsx"></code>

## 上一步和下一步

<code src="./demos/itemRender.tsx"></code>

## API

```jsx | pure
<Pagination onChange={onChange} total={50} />
```

| 参数             | 说明                                                         | 类型                                                                         | 默认值                     | 版本 |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------- | -------------------------- | ---- |
| current          | 当前页数                                                     | number                                                                       | -                          |      |
| defaultCurrent   | 默认的当前页数                                               | number                                                                       | 1                          |      |
| defaultPageSize  | 默认的每页条数                                               | number                                                                       | 10                         |      |
| disabled         | 禁用分页                                                     | boolean                                                                      | -                          |      |
| hideOnSinglePage | 只有一页时是否隐藏分页器                                     | boolean                                                                      | false                      |      |
| itemRender       | 用于自定义页码的结构，可用于优化 SEO                         | (page, type: 'page' \| 'prev' \| 'next', originalElement) => React.ReactNode | -                          |      |
| pageSize         | 每页条数                                                     | number                                                                       | -                          |      |
| pageSizeOptions  | 指定每页可以显示多少条                                       | string\[]                                                                    | \[`10`, `20`, `50`, `100`] |      |
| responsive       | 当 size 未指定时，根据屏幕宽度自动调整尺寸                   | boolean                                                                      | -                          |      |
| showLessItems    | 是否显示较少页面内容                                         | boolean                                                                      | false                      |      |
| showQuickJumper  | 是否可以快速跳转至某页                                       | boolean \| { goButton: ReactNode }                                           | false                      |      |
| showSizeChanger  | 是否展示 `pageSize` 切换器，当 `total` 大于 50 时默认为 true | boolean                                                                      | -                          |      |
| showTitle        | 是否显示原生 tooltip 页码提示                                | boolean                                                                      | true                       |      |
| showTotal        | 用于显示数据总量和当前数据顺序                               | function(total, range)                                                       | -                          |      |
| simple           | 当添加该属性时，显示为简单分页                               | boolean                                                                      | -                          |      |
| size             | 当为 `small` 时，是小尺寸分页                                | `default` \| `small`                                                         | `default`                  |      |
| total            | 数据总数                                                     | number                                                                       | 0                          |      |
| onChange         | 页码或 `pageSize` 改变的回调，参数是改变后的页码及每页条数   | function(page, pageSize)                                                     | -                          |      |
| onShowSizeChange | pageSize 变化的回调                                          | function(current, size)                                                      | -                          |      |
