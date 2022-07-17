/**
 * title: 自定义提示
 * desc: 使用`tipFormatter`可以格式化`Tooltip`的内容，设置`tipFormatter={null}`，则隐藏`Tooltip`。
 */

import { Slider } from 'antd-packages'
import React from 'react'

const formatter = (value: number) => `${value}%`

const App: React.FC = () => (
  <>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </>
)

export default App
