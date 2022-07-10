/**
 * title: 分隔符
 * desc: 使用`separator=">"`可以自定义分隔符。
 */

import { Breadcrumb } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">
      Application Center
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      Application List
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      An Application
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default App
