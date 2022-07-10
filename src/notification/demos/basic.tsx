/**
 * title: 基本
 * desc: 最简单的用法，4.5秒后自动关闭。
 */

import { Button, notification } from 'antd'
import React from 'react'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!')
    }
  })
}
const App: React.FC = () => (
  <Button
    type="primary"
    onClick={openNotification}
  >
    Open the notification box
  </Button>
)

export default App
