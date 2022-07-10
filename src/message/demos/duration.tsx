/**
 * title: 修改延时
 * desc: 自定义时长`10s`，默认时长为`3s`。
 */

import { Button, message } from 'antd'
import React from 'react'

const success = () => {
  message.success(
    'This is a prompt message for success, and it will disappear in 10 seconds',
    10
  )
}

const App: React.FC = () => (
  <Button onClick={success}>
    Customized display duration
  </Button>
)

export default App
