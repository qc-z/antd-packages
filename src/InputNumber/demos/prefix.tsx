/**
 * title: 前缀
 * desc: 在输入框上添加前缀图标。
 */

import { UserOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <InputNumber
      prefix="￥"
      style={{ width: '100%' }}
    />
    <br />
    <br />
    <InputNumber
      addonBefore={<UserOutlined />}
      prefix="￥"
      style={{ width: '100%' }}
    />
    <br />
    <br />
    <InputNumber
      prefix="￥"
      disabled
      style={{ width: '100%' }}
    />
  </>
)

export default App
