/**
 * title: 三种大小
 * desc: 三种大小的数字输入框，当size分别为`large`和`small`时，输入框高度为`40px`和`24px`，默认高度为`32px`。
 */

import { InputNumber, Space } from 'antd'
import React from 'react'

const onChange = (value: number) => {
  console.log('changed', value)
}

const App: React.FC = () => (
  <Space>
    <InputNumber
      size="large"
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />
    <InputNumber
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />
    <InputNumber
      size="small"
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />
  </Space>
)

export default App
