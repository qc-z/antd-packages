/**
 * title: 自定义标题
 * desc: 设置鼠标放在状态点上时显示的文字。
 */

import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge count={5} title="Custom hover text">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={-5} title="Negative">
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

export default App
