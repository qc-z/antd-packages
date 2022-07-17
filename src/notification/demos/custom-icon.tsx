/**
 * title: 自定义图标
 * desc: 图标可以被自定义。
 */

import { SmileOutlined } from '@ant-design/icons'
import { Button, notification } from 'antd-packages'
import React from 'react'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: (
      <SmileOutlined
        style={{ color: '#108ee9' }}
      />
    )
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
