/**
 * title: 各种大小
 * desc: 小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载。
 */

import { Space, Spin } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
)

export default App
