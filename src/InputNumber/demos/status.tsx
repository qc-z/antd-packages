/**
 * title: 自定义状态
 * desc: 使用`status`为InputNumber添加状态，可选`error`或者`warning`。
 */

import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined'
import { InputNumber, Space } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
  >
    <InputNumber
      status="error"
      style={{ width: '100%' }}
    />
    <InputNumber
      status="warning"
      style={{ width: '100%' }}
    />
    <InputNumber
      status="error"
      style={{ width: '100%' }}
      prefix={<ClockCircleOutlined />}
    />
    <InputNumber
      status="warning"
      style={{ width: '100%' }}
      prefix={<ClockCircleOutlined />}
    />
  </Space>
)

export default App
