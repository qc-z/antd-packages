/**
 * title: 密码框
 * desc: 密码框。
 */

import {
  EyeInvisibleOutlined,
  EyeTwoTone
} from '@ant-design/icons'
import { Input, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space direction="vertical">
    <Input.Password placeholder="input password" />
    <Input.Password
      placeholder="input password"
      iconRender={(visible) =>
        visible ? (
          <EyeTwoTone />
        ) : (
          <EyeInvisibleOutlined />
        )
      }
    />
  </Space>
)

export default App
