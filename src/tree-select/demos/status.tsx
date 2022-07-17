/**
 * title: 自定义状态
 * desc: 使用`status`为TreeSelect添加状态，可选`error`或者`warning`。
 */

import { Space, TreeSelect } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <TreeSelect
      status="error"
      style={{ width: '100%' }}
      placeholder="Error"
    />
    <TreeSelect
      status="warning"
      style={{ width: '100%' }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
)

export default App
