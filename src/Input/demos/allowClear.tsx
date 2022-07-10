/**
 * title: 带移除图标
 * desc: 带移除图标的输入框，点击图标删除所有内容。
 */

import { Input } from 'antd'
import React from 'react'

const { TextArea } = Input

const onChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  console.log(e)
}

const App: React.FC = () => (
  <>
    <Input
      placeholder="input with clear icon"
      allowClear
      onChange={onChange}
    />
    <br />
    <br />
    <TextArea
      placeholder="textarea with clear icon"
      allowClear
      onChange={onChange}
    />
  </>
)

export default App
