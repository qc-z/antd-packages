/**
 * title: 国际化
 * desc: 使用`okText`和`cancelText`自定义按钮文字。
 */

import { Popconfirm } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Popconfirm
    title="Are you sure？"
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
)

export default App
