/**
 * title: 自定义状态
 * desc: 使用`status`为DatePicker添加状态，可选`error`或者`warning`。
 */

import { DatePicker, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <DatePicker
      status="error"
      style={{ width: '100%' }}
    />
    <DatePicker
      status="warning"
      style={{ width: '100%' }}
    />
    <DatePicker.RangePicker
      status="error"
      style={{ width: '100%' }}
    />
    <DatePicker.RangePicker
      status="warning"
      style={{ width: '100%' }}
    />
  </Space>
)

export default App
