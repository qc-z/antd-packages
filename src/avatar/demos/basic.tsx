/**
 * title: 基本
 * desc: 头像有三种尺寸，两种形状可选。
 */

import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <div>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar
        size="large"
        icon={<UserOutlined />}
      />
      <Avatar icon={<UserOutlined />} />
      <Avatar
        size="small"
        icon={<UserOutlined />}
      />
    </div>
    <div>
      <Avatar
        shape="square"
        size={64}
        icon={<UserOutlined />}
      />
      <Avatar
        shape="square"
        size="large"
        icon={<UserOutlined />}
      />
      <Avatar
        shape="square"
        icon={<UserOutlined />}
      />
      <Avatar
        shape="square"
        size="small"
        icon={<UserOutlined />}
      />
    </div>
  </>
)

export default App
