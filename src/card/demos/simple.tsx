/**
 * title: 简洁卡片
 * desc: 只包含内容区域。
 */

import { Card } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
)

export default App
