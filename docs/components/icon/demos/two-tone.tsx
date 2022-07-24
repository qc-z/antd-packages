/**
 * title: 多色图标
 * desc: 双色图标可以通过 `twoToneColor` 属性设置主题色。
 */

import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Space>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </Space>
)

export default App
