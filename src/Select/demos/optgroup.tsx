/**
 * title: 分组
 * desc: 用`OptGroup`进行选项分组。
 */

import { Select } from 'antd-packages'
import React from 'react'

const { Option, OptGroup } = Select

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}

const App: React.FC = () => (
  <Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
  >
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>
)

export default App
