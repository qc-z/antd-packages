/**
 * title: 封顶数字
 * desc: 超过`overflowCount`的会显示为`${overflowCount}+`，默认的`overflowCount`为`99`。
 */

import { Avatar, Badge } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge count={99}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={100}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

export default App
