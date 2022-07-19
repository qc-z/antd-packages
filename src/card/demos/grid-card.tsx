/**
 * title: 网格型内嵌卡片
 * desc: 一种常见的卡片内容区隔模式。
 */

import { Card } from 'antd-packages'
import React from 'react'

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center'
}

const App: React.FC = () => (
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid
      hoverable={false}
      style={gridStyle}
    >
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>
      Content
    </Card.Grid>
  </Card>
)

export default App
