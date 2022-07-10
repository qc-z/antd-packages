---
title: 图片 Image
order: 4
group:
  title: 数据展示
nav:
  title: 图片 Image
  path: /components
---

# 图片 Image

可预览的图片。

## 何时使用

- 需要展示图片时使用。
- 加载大图时显示 loading 或加载失败时容错处理。

## 基本用法

<code src="./demos/basic.tsx"></code>

## 容错处理

<code src="./demos/fallback.tsx"></code>

## 渐进加载

<code src="./demos/placeholder.tsx"></code>

## 多张图片预览

<code src="./demos/preview-group.tsx"></code>

## 相册模式

<code src="./demos/preview-group-visible.tsx"></code>

## 自定义预览图片

<code src="./demos/previewSrc.tsx"></code>

## 受控的预览

<code src="./demos/controlled-preview.tsx"></code>

## 自定义预览文本

<code src="./demos/preview-mask.tsx"></code>

## 多图预览时顶部进度自定义

<code src="./demos/preview-group-top-progress.tsx"></code>

## API

| 参数          | 说明                                                   | 类型                                   | 默认值 | 版本                                    |
| ------------- | ------------------------------------------------------ | -------------------------------------- | ------ | --------------------------------------- |
| alt           | 图像描述                                               | string                                 | -      | 4.6.0                                   |
| fallback      | 加载失败容错地址                                       | string                                 | -      | 4.6.0                                   |
| height        | 图像高度                                               | string \| number                       | -      | 4.6.0                                   |
| placeholder   | 加载占位, 为 `true` 时使用默认占位                     | ReactNode                              | -      | 4.6.0                                   |
| preview       | 预览参数，为 `false` 时禁用                            | boolean \| [previewType](#previewType) | true   | 4.6.0 [previewType](#previewType):4.7.0 |
| src           | 图片地址                                               | string                                 | -      | 4.6.0                                   |
| width         | 图像宽度                                               | string \| number                       | -      | 4.6.0                                   |
| onError       | 加载错误回调                                           | (event: Event) => void                 | -      | 4.12.0                                  |
| rootClassName | 为展示图片根 DOM 和预览大图根 DOM 提供自定义 className | string                                 | -      | 4.20.0                                  |

### previewType

```js
{
  visible?: boolean;
  onVisibleChange?: (visible, prevVisible) => void;
  getContainer?: string | HTMLElement | (() => HTMLElement); // v4.8.0
  src?: string; // v4.10.0
  mask?: ReactNode; // v4.9.0
  maskClassName?: string; // v4.11.0
  current?: number; // v4.12.0 仅支持 PreviewGroup
  countRender?: (current: number, total: number) => string  // v4.20.0 仅支持 PreviewGroup
}
```

其他属性见 [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)
