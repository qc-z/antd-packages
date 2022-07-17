/**
 * title: 操作
 * desc: 可以在右上角自定义操作项。
 */

import { Alert, Button, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Alert
      message="Success Tips"
      type="success"
      showIcon
      action={
        <Button size="small" type="text">
          UNDO
        </Button>
      }
      closable
    />
    <Alert
      message="Error Text"
      showIcon
      description="Error Description Error Description Error Description Error Description"
      type="error"
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
    <Alert
      message="Warning Text"
      type="warning"
      action={
        <Space>
          <Button size="small" type="ghost">
            Done
          </Button>
        </Space>
      }
      closable
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      action={
        <Space direction="vertical">
          <Button size="small" type="primary">
            Accept
          </Button>
          <Button
            size="small"
            danger
            type="ghost"
          >
            Decline
          </Button>
        </Space>
      }
      closable
    />
  </>
)

export default App
