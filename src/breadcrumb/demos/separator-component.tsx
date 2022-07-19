/**
 * title: 分隔符
 * desc: 使用`Breadcrumb.Separator`可以自定义分隔符。
 */

import { Breadcrumb } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Breadcrumb separator="">
    <Breadcrumb.Item>Location</Breadcrumb.Item>
    <Breadcrumb.Separator>:</Breadcrumb.Separator>
    <Breadcrumb.Item href="">
      Application Center
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href="">
      Application List
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      An Application
    </Breadcrumb.Item>
  </Breadcrumb>
)

export default App
