/**
 * title: 响应式尺寸
 * desc: 头像大小可以根据屏幕大小自动调整。
 */

import { AntDesignOutlined } from '@ant-design/icons'
import { Avatar } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100
    }}
    icon={<AntDesignOutlined />}
  />
)

export default App
