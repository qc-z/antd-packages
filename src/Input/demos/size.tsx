/**
 * title: 三种大小
 * desc: 我们为`<Input/>`输入框定义了三种尺寸（大、默认、小），高度分别为`40px`、`32px`和`24px`。
 */

import { UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Input
      size="large"
      placeholder="large size"
      prefix={<UserOutlined />}
    />
    <br />
    <br />
    <Input
      placeholder="default size"
      prefix={<UserOutlined />}
    />
    <br />
    <br />
    <Input
      size="small"
      placeholder="small size"
      prefix={<UserOutlined />}
    />
  </>
)

export default App
