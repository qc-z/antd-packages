/**
 * title: 自定义状态
 * desc: 使用`status`为TimePicker添加状态，可选`error`或者`warning`。
 */

import { Space, TimePicker } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space direction="vertical">
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
)

export default App
