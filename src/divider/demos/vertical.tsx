/**
 * title: 垂直分割线
 * desc: 使用`type="vertical"`设置为行内的垂直分割线。
 */

import { Divider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
)

export default App
