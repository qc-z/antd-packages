/**
 * title: 三种大小
 * desc: 三种大小的输入框，若不设置，则为`middle`。
 */

import type { RadioChangeEvent } from 'antd-packages'
import { DatePicker, Radio, Space } from 'antd-packages'
import type { SizeType } from 'antd-packages/es/config-provider/SizeContext'
import React, { useState } from 'react'

const { RangePicker } = DatePicker

const App: React.FC = () => {
  const [size, setSize] =
    useState<SizeType>('middle')

  const handleSizeChange = (
    e: RadioChangeEvent
  ) => {
    setSize(e.target.value)
  }

  return (
    <Space direction="vertical" size={12}>
      <Radio.Group
        value={size}
        onChange={handleSizeChange}
      >
        <Radio.Button value="large">
          Large
        </Radio.Button>
        <Radio.Button value="middle">
          middle
        </Radio.Button>
        <Radio.Button value="small">
          Small
        </Radio.Button>
      </Radio.Group>
      <DatePicker size={size} />
      <DatePicker size={size} picker="month" />
      <RangePicker size={size} />
      <DatePicker size={size} picker="week" />
    </Space>
  )
}

export default App
