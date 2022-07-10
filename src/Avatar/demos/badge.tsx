/**
 * title: 带徽标的头像
 * desc: 通常用于消息提示。
 */

import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <span className="avatar-item">
      <Badge count={1}>
        <Avatar
          shape="square"
          icon={<UserOutlined />}
        />
      </Badge>
    </span>
    <span>
      <Badge dot>
        <Avatar
          shape="square"
          icon={<UserOutlined />}
        />
      </Badge>
    </span>
  </>
)

export default App
