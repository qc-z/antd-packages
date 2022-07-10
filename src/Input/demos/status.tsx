/**
 * title: 自定义状态
 * desc: 使用`status`为Input添加状态，可选`error`或者`warning`。
 */

import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined'
import { Input, Space } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <Input status="error" placeholder="Error" />
    <Input
      status="warning"
      placeholder="Warning"
    />
    <Input
      status="error"
      prefix={<ClockCircleOutlined />}
      placeholder="Error with prefix"
    />
    <Input
      status="warning"
      prefix={<ClockCircleOutlined />}
      placeholder="Warning with prefix"
    />
  </Space>
)

export default App
