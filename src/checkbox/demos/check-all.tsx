/**
 * title: 全选
 * desc: 在实现全选效果时，你可能会用到`indeterminate`属性。
 */

import { Checkbox, Divider } from 'antd-packages'
import type { CheckboxChangeEvent } from 'antd-packages/es/checkbox'
import type { CheckboxValueType } from 'antd-packages/es/checkbox/Group'
import React, { useState } from 'react'

const CheckboxGroup = Checkbox.Group

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState<
    CheckboxValueType[]
  >(defaultCheckedList)
  const [indeterminate, setIndeterminate] =
    useState(true)
  const [checkAll, setCheckAll] = useState(false)

  const onChange = (
    list: CheckboxValueType[]
  ) => {
    setCheckedList(list)
    setIndeterminate(
      !!list.length &&
      list.length < plainOptions.length
    )
    setCheckAll(
      list.length === plainOptions.length
    )
  }

  const onCheckAllChange = (
    e: CheckboxChangeEvent
  ) => {
    setCheckedList(
      e.target.checked ? plainOptions : []
    )
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  )
}

export default App
