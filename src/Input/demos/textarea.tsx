/**
 * title: 文本域
 * desc: 用于多行输入。
 */

import { Input } from 'antd'
import React from 'react'

const { TextArea } = Input

const App: React.FC = () => (
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea
      rows={4}
      placeholder="maxLength is 6"
      maxLength={6}
    />
  </>
)

export default App
