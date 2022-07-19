/**
 * title: 单位
 * desc: 通过前缀和后缀添加单位。
 */

import { LikeOutlined } from '@ant-design/icons'
import { Col, Row, Statistic } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic
        title="Feedback"
        value={1128}
        prefix={<LikeOutlined />}
      />
    </Col>
    <Col span={12}>
      <Statistic
        title="Unmerged"
        value={93}
        suffix="/ 100"
      />
    </Col>
  </Row>
)

export default App
