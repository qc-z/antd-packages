/**
 * title: 可以自定义显示
 * desc: 切换按钮和结果分开。
 */

import { Cascader } from 'antd-packages'
import React, { useState } from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou'
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing'
      }
    ]
  }
]

const App: React.FC = () => {
  const [text, setText] = useState('Unselect')

  const onChange = (
    _: string[],
    selectedOptions: Option[]
  ) => {
    setText(
      selectedOptions
        .map((o) => o.label)
        .join(', ')
    )
  }

  return (
    <span>
      {text}
      &nbsp;
      <Cascader
        options={options}
        onChange={onChange}
      >
        <a href="#">Change city</a>
      </Cascader>
    </span>
  )
}

export default App
