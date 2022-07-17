/**
 * title: 基本用法
 * desc: 简单的checkbox。
 */

import { Checkbox } from 'antd-packages'
import type { CheckboxChangeEvent } from 'antd-packages/es/checkbox'
import React from 'react'

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`)
}

const App: React.FC = () => (
  <Checkbox onChange={onChange}>
    Checkbox
  </Checkbox>
)

export default App
