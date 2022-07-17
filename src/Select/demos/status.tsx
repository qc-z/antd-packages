/**
 * title: 自定义状态
 * desc: 使用`status`为Select添加状态，可选`error`或者`warning`。
 */

import { Select, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <Select
      status="error"
      style={{ width: '100%' }}
    />
    <Select
      status="warning"
      style={{ width: '100%' }}
    />
  </Space>
)

export default App
