/**
 * title: 无边框
 * desc: 没有边框。
 */

import { Input } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Input
    placeholder="Borderless"
    bordered={false}
  />
)

export default App
