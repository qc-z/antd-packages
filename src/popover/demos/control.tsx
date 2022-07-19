/**
 * title: 从浮层内关闭
 * desc: 使用`visible`属性控制浮层显示。
 */

import { Button, Popover } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const hide = () => {
    setVisible(false)
  }

  const handleVisibleChange = (
    newVisible: boolean
  ) => {
    setVisible(newVisible)
  }

  return (
    <Popover
      content={<a onClick={hide}>Close</a>}
      title="Title"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button type="primary">Click me</Button>
    </Popover>
  )
}

export default App
