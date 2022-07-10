/**
 * title: 支持更多内容配置
 * desc: 一种支持封面、头像、标题和描述信息的卡片。
 */

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import React from 'react'

const { Meta } = Card

const App: React.FC = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
)

export default App
