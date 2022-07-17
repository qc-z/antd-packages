/**
 * title: 带有图标的通知提醒框
 * desc: 通知提醒框左侧有图标。
 */

import { Button, notification, Space } from 'antd-packages'
import React from 'react'

type NotificationType =
  | 'success'
  | 'info'
  | 'warning'
  | 'error'

const openNotificationWithIcon = (
  type: NotificationType
) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
  })
}

const App: React.FC = () => (
  <Space>
    <Button
      onClick={() =>
        openNotificationWithIcon('success')
      }
    >
      Success
    </Button>
    <Button
      onClick={() =>
        openNotificationWithIcon('info')
      }
    >
      Info
    </Button>
    <Button
      onClick={() =>
        openNotificationWithIcon('warning')
      }
    >
      Warning
    </Button>
    <Button
      onClick={() =>
        openNotificationWithIcon('error')
      }
    >
      Error
    </Button>
  </Space>
)

export default App
