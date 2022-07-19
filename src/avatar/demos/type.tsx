/**
 * title: 类型
 * desc: 支持三种类型：图片、Icon以及字符，其中Icon和字符型可以自定义图标颜色及背景色。
 */

import { UserOutlined } from '@ant-design/icons'
import { Avatar, Image } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Avatar icon={<UserOutlined />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://joeschmoe.io/api/v1/random" />
    <Avatar
      src={
        <Image
          src="https://joeschmoe.io/api/v1/random"
          style={{ width: 32 }}
        />
      }
    />
    <Avatar
      style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf'
      }}
    >
      U
    </Avatar>
    <Avatar
      style={{ backgroundColor: '#87d068' }}
      icon={<UserOutlined />}
    />
  </>
)

export default App
