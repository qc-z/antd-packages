/**
 * title: 自定义样式
 * desc: 使用style和className来定义样式。
 */

import { Button, notification } from 'antd-packages'
import React from 'react'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    className: 'custom-class',
    style: {
      width: 600
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
