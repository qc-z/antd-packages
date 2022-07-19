/**
 * title: 栅格卡片
 * desc: 在系统概览页面常常和栅格进行配合。
 */

import { Card, Col, Row } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
)

export default App
