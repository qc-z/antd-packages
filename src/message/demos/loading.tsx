/**
 * title: 加载中
 * desc: 进行全局loading，异步自行移除。
 */

import { Button, message } from 'antd-packages'
import React from 'react'

const success = () => {
  const hide = message.loading(
    'Action in progress..',
    0
  )
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500)
}

const App: React.FC = () => (
  <Button onClick={success}>
    Display a loading indicator
  </Button>
)

export default App
