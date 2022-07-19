/**
 * title: 无边框
 * desc: 无边框样式。
 */

import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const App: React.FC = () => (
  <>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      bordered={false}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      bordered={false}
    >
      <Option value="lucy">Lucy</Option>
    </Select>
  </>
)

export default App
