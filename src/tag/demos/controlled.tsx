/**
 * title: 控制关闭状态
 * desc: 通过`visible`属性控制关闭状态。
 */

import { Button, Tag } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <Tag
        closable
        visible={visible}
        onClose={() => setVisible(false)}
      >
        Movies
      </Tag>
      <br />
      <Button
        size="small"
        onClick={() => setVisible(!visible)}
      >
        Toggle
      </Button>
    </>
  )
}

export default App
