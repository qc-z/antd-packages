/**
 * title: 自定义位置偏移
 * desc: 设置状态点的位置偏移，格式为`[left,top]`，表示状态点距默认位置左侧、上方的偏移量。
 */

import { Avatar, Badge } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Badge count={5} offset={[10, 10]}>
    <Avatar shape="square" size="large" />
  </Badge>
)

export default App
