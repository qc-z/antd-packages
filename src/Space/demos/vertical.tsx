/**
 * title: 垂直间距
 * desc: 相邻组件垂直间距。
 */

import { Card, Space } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    size="middle"
    style={{ display: 'flex' }}
  >
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
)

export default App
