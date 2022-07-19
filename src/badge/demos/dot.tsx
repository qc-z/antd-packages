/**
 * title: 讨嫌的小红点
 * desc: 没有具体的数字。
 */

import { NotificationOutlined } from '@ant-design/icons'
import { Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge dot>
      <NotificationOutlined
        style={{ fontSize: 16 }}
      />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </>
)

export default App
