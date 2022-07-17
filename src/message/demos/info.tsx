/**
 * title: 普通提示
 * desc: 信息提醒反馈。
 */

import { Button, message } from 'antd-packages'
import React from 'react'

const info = () => {
  message.info('This is a normal message')
}

const App: React.FC = () => (
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>
)

export default App
