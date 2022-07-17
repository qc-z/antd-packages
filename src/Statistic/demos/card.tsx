/**
 * title: 在卡片中使用
 * desc: 在卡片中展示统计数值。
 */

import {
  ArrowDownOutlined,
  ArrowUpOutlined
} from '@ant-design/icons'
import { Card, Col, Row, Statistic } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>
)

export default App
