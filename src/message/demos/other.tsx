/**
 * title: 其他提示类型
 * desc: 包括成功、失败、警告。
 */

import { Button, message, Space } from 'antd'
import React from 'react'

const success = () => {
  message.success('This is a success message')
}

const error = () => {
  message.error('This is an error message')
}

const warning = () => {
  message.warning('This is a warning message')
}

const App: React.FC = () => (
  <Space>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>
)

export default App
