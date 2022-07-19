/**
 * title: Checkbox 组
 * desc: 方便的从数组生成Checkbox组。
 */

import { Checkbox } from 'antd-packages'
import type { CheckboxValueType } from 'antd-packages/es/checkbox/Group'
import React from 'react'

const onChange = (
  checkedValues: CheckboxValueType[]
) => {
  console.log('checked = ', checkedValues)
}

const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  {
    label: 'Orange',
    value: 'Orange',
    disabled: false
  }
]

const App: React.FC = () => (
  <>
    <Checkbox.Group
      options={plainOptions}
      defaultValue={['Apple']}
      onChange={onChange}
    />
    <br />
    <br />
    <Checkbox.Group
      options={options}
      defaultValue={['Pear']}
      onChange={onChange}
    />
    <br />
    <br />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </>
)

export default App
