/**
 * title: 基本
 * desc: 简单的徽章展示，当`count`为`0`时，默认不显示，但是可以使用`showZero`修改为显示。
 */

import { ClockCircleOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge
      count={
        <ClockCircleOutlined
          style={{ color: '#f5222d' }}
        />
      }
    >
      <Avatar shape="square" size="large" />
    </Badge>
  </>
)

export default App
