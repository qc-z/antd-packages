/**
 * title: 无边框
 * desc: 没有边框。
 */

import { InputNumber } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <InputNumber
    min={1}
    max={10}
    defaultValue={3}
    bordered={false}
  />
)

export default App
