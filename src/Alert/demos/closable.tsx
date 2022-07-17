/**
 * title: 可关闭的警告提示
 * desc: 显示关闭按钮，点击可关闭警告提示。
 */

import { Alert } from 'antd-packages'
import React from 'react'

const onClose = (
  e: React.MouseEvent<
    HTMLButtonElement,
    MouseEvent
  >
) => {
  console.log(e, 'I was closed.')
}

const App: React.FC = () => (
  <>
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose={onClose}
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose={onClose}
    />
  </>
)

export default App
