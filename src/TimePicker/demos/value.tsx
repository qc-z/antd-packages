/**
 * title: 受控组件
 * desc: value和onChange需要配合使用。
 */

import { TimePicker } from 'antd'
import type { Moment } from 'moment'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] =
    useState<Moment | null>(null)

  const onChange = (time: Moment) => {
    setValue(time)
  }

  return (
    <TimePicker
      value={value}
      onChange={onChange}
    />
  )
}

export default App
