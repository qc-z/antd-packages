/**
 * title: 带搜索框
 * desc: 展开后可对选项进行搜索。
 */

import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const onChange = (value: string) => {
  console.log(`selected ${value}`)
}

const onSearch = (value: string) => {
  console.log('search:', value)
}

const App: React.FC = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option!.children as unknown as string)
        .toLowerCase()
        .includes(input.toLowerCase())
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
)

export default App
