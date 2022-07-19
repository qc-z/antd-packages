/**
 * title: 带有图标的
 * desc: 图标放在文字前面。
 */

import {
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Breadcrumb } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>
)

export default App
