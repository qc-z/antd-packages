/**
 * title: 基本
 * desc: 最简单的用法。
 */

import { Breadcrumb } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      An Application
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default App
