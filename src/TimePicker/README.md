---
title: TimePicker 时间选择框
group:
  title: 数据录入
  order: 3
nav:
  title: TimePicker 时间选择框
  path: /components
---

# 时间选择框 TimePicker

输入或选择时间的控件。

## 何时使用

---

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 基本

<code src="./demos/basic.tsx"></code>

## 受控组件

<code src="./demos/value.tsx"></code>

## 三种大小

<code src="./demos/size.tsx"></code>

## 禁用

<code src="./demos/disabled.tsx"></code>

## 选择时分

<code src="./demos/hide-column.tsx"></code>

## 步长选项

<code src="./demos/interval-options.tsx"></code>

## 附加内容

<code src="./demos/addon.tsx"></code>

## 12 小时制

<code src="./demos/12hours.tsx"></code>

## 色付きポップアップ

<code src="./demos/colored-popup.tsx"></code>

## 范围选择器

<code src="./demos/range-picker.tsx"></code>

## 无边框

<code src="./demos/bordered.tsx"></code>

## 自定义状态

<code src="./demos/status.tsx"></code>

## 后缀图标

<code src="./demos/suffix.tsx"></code>

## API

---

```jsx | pure
import moment from 'moment'
;<TimePicker
  defaultValue={moment('13:30:56', 'HH:mm:ss')}
/>
```

| 参数                | 说明                                                   | 类型                                             | 默认值       | 版本   |
| ------------------- | ------------------------------------------------------ | ------------------------------------------------ | ------------ | ------ |
| allowClear          | 是否展示清除按钮                                       | boolean                                          | true         |        |
| autoFocus           | 自动获取焦点                                           | boolean                                          | false        |        |
| bordered            | 是否有边框                                             | boolean                                          | true         |        |
| className           | 选择器类名                                             | string                                           | -            |        |
| clearIcon           | 自定义的清除图标                                       | ReactNode                                        | -            |        |
| clearText           | 清除按钮的提示文案                                     | string                                           | clear        |        |
| defaultValue        | 默认时间                                               | [moment](http://momentjs.com/)                   | -            |        |
| disabled            | 禁用全部操作                                           | boolean                                          | false        |        |
| disabledTime        | 不可选择的时间                                         | [DisabledTime](#DisabledTime)                    | -            | 4.19.0 |
| format              | 展示的时间格式                                         | string                                           | `HH:mm:ss`   |        |
| getPopupContainer   | 定义浮层的容器，默认为 body 上新建 div                 | function(trigger)                                | -            |        |
| hideDisabledOptions | 隐藏禁止选择的选项                                     | boolean                                          | false        |        |
| hourStep            | 小时选项间隔                                           | number                                           | 1            |        |
| inputReadOnly       | 设置输入框为只读（避免在移动设备上打开虚拟键盘）       | boolean                                          | false        |        |
| minuteStep          | 分钟选项间隔                                           | number                                           | 1            |        |
| open                | 面板是否打开                                           | boolean                                          | false        |        |
| placeholder         | 没有值的时候显示的内容                                 | string \| \[string, string]                      | `请选择时间` |        |
| placement           | 选择框弹出的位置                                       | `bottomLeft` `bottomRight` `topLeft` `topRight`  | bottomLeft   |        |
| popupClassName      | 弹出层类名                                             | string                                           | -            |        |
| popupStyle          | 弹出层样式对象                                         | object                                           | -            |        |
| renderExtraFooter   | 选择框底部显示自定义的内容                             | () => ReactNode                                  | -            |        |
| secondStep          | 秒选项间隔                                             | number                                           | 1            |        |
| showNow             | 面板是否显示“此刻”按钮                                 | boolean                                          | -            | 4.4.0  |
| status              | 设置校验状态                                           | 'error' \| 'warning'                             | -            | 4.19.0 |
| suffixIcon          | 自定义的选择框后缀图标                                 | ReactNode                                        | -            |        |
| use12Hours          | 使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a` | boolean                                          | false        |        |
| value               | 当前时间                                               | [moment](http://momentjs.com/)                   | -            |        |
| onChange            | 时间发生变化的回调                                     | function(time: moment, timeString: string): void | -            |        |
| onOpenChange        | 面板打开/关闭时的回调                                  | (open: boolean) => void                          | -            |        |

#### DisabledTime

```typescript
type DisabledTime = (now: Moment) => {
  disabledHours?: () => number[]
  disabledMinutes?: (
    selectedHour: number
  ) => number[]
  disabledSeconds?: (
    selectedHour: number,
    selectedMinute: number
  ) => number[]
}
```

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

## RangePicker

属性与 DatePicker 的 [RangePicker](/components/date-picker/#RangePicker) 相同。还包含以下属性：

| 参数         | 说明                 | 类型                                    | 默认值 | 版本   |
| ------------ | -------------------- | --------------------------------------- | ------ | ------ |
| disabledTime | 不可选择的时间       | [RangeDisabledTime](#RangeDisabledTime) | -      | 4.19.0 |
| order        | 始末时间是否自动排序 | boolean                                 | true   | 4.1.0  |

### RangeDisabledTime

```typescript
type RangeDisabledTime = (
  now: Moment,
  type = 'start' | 'end'
) => {
  disabledHours?: () => number[]
  disabledMinutes?: (
    selectedHour: number
  ) => number[]
  disabledSeconds?: (
    selectedHour: number,
    selectedMinute: number
  ) => number[]
}
```

## FAQ

- [如何在 TimePicker 中使用自定义日期库（如 dayjs ）](/docs/react/replace-moment#TimePicker)
