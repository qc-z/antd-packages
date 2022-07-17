/**
 * title: 内部卡片
 * desc: 可以放在普通卡片内部，展示多层级结构的信息。
 */

import { Card } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Card title="Card title">
    <Card
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>
)

export default App
