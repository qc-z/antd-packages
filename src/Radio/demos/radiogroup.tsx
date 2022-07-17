/**
 * title: 单选组合
 * desc: 一组互斥的Radio配合使用。
 */

import type { RadioChangeEvent } from 'antd-packages'
import { Radio } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] = useState(1)

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <Radio.Group
      onChange={onChange}
      value={value}
    >
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  )
}

export default App
