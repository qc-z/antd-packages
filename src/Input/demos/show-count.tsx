/**
 * title: 带字数提示
 * desc: 展示字数提示。
 */

import { Input } from 'antd-packages'
import React from 'react'

const { TextArea } = Input

const onChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  console.log('Change:', e.target.value)
}

const App: React.FC = () => (
  <>
    <Input
      showCount
      maxLength={20}
      onChange={onChange}
    />
    <br />
    <br />
    <TextArea
      showCount
      maxLength={100}
      onChange={onChange}
    />
  </>
)

export default App
