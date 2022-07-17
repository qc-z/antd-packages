/**
 * title: 可点击
 * desc: 用a标签进行包裹即可。
 */

import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <a href="#">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
)

export default App
