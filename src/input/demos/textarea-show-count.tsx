/**
 * title: 带字数提示的文本域
 * desc: 展示字数提示。
 */

import { Input } from 'antd-packages'
import React from 'react'

const { TextArea } = Input

const onChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>
) => {
  console.log('Change:', e.target.value)
}

const App: React.FC = () => (
  <TextArea
    showCount
    maxLength={100}
    style={{ height: 120 }}
    onChange={onChange}
  />
)

export default App
