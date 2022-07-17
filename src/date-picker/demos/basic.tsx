/**
 * title: 基本
 * desc: 最简单的用法，在浮层中可以选择或者输入日期。
 */

import type { DatePickerProps } from 'antd-packages'
import { DatePicker, Space } from 'antd-packages'
import React from 'react'

const onChange: DatePickerProps['onChange'] = (
  date,
  dateString
) => {
  console.log(date, dateString)
}

const App: React.FC = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker
      onChange={onChange}
      picker="week"
    />
    <DatePicker
      onChange={onChange}
      picker="month"
    />
    <DatePicker
      onChange={onChange}
      picker="quarter"
    />
    <DatePicker
      onChange={onChange}
      picker="year"
    />
  </Space>
)

export default App
