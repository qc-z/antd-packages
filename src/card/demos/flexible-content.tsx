/**
 * title: 更灵活的内容展示
 * desc: 可以利用`Card.Meta`支持更灵活的内容。
 */

import { Card } from 'antd-packages'
import React from 'react'

const { Meta } = Card

const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
)

export default App
