/**
 * title: 获得选项的文本
 * desc: 默认情况下`onChange`里只能拿到`value`，如果需要拿到选中的节点文本`label`，可以使用`labelInValue`属性。选中项的`label`会被包装到`value`中传递给`onChange`等函数，此时`value`是一个对象。
 */

import { Select } from 'antd-packages'
import React from 'react'

const { Option } = Select

const handleChange = (value: {
  value: string
  label: React.ReactNode
}) => {
  console.log(value) // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

const App: React.FC = () => (
  <Select
    labelInValue
    defaultValue={{
      value: 'lucy',
      label: 'Lucy (101)'
    }}
    style={{ width: 120 }}
    onChange={handleChange}
  >
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </Select>
)

export default App
