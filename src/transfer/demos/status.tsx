/**
 * title: 自定义状态
 * desc: 使用`status`为Transfer添加状态，可选`error`或者`warning`。
 */

import { Space, Transfer } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space direction="vertical">
    <Transfer status="error" />
    <Transfer status="warning" showSearch />
  </Space>
)

export default App
