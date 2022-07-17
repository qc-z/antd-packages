/**
 * title: 更新消息内容
 * desc: 可以通过唯一的`key`来更新内容。
 */

import { Button, message } from 'antd-packages'
import React from 'react'

const key = 'updatable'

const openMessage = () => {
  message.loading({ content: 'Loading...', key })
  setTimeout(() => {
    message.success({
      content: 'Loaded!',
      key,
      duration: 2
    })
  }, 1000)
}

const App: React.FC = () => (
  <Button type="primary" onClick={openMessage}>
    Open the message box
  </Button>
)

export default App
