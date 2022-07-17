/**
 * title: 更新消息内容
 * desc: 可以通过唯一的key来更新内容。
 */

import { Button, notification } from 'antd-packages'
import React from 'react'

const key = 'updatable'

const openNotification = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.'
  })

  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.'
    })
  }, 1000)
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
