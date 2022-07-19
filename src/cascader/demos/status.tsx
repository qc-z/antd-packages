/**
 * title: 自定义状态
 * desc: 使用`status`为Cascader添加状态，可选`error`或者`warning`。
 */

import { Cascader, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space direction="vertical">
    <Cascader
      status="error"
      placeholder="Error"
    />
    <Cascader
      status="warning"
      multiple
      placeholder="Warning multiple"
    />
  </Space>
)

export default App
