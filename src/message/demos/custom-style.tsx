/**
 * title: 自定义样式
 * desc: 使用`style`和`className`来定义样式。
 */

import { Button, message } from 'antd-packages'
import React from 'react'

const success = () => {
  message.success({
    content:
      'This is a prompt message with custom className and style',
    className: 'custom-class',
    style: {
      marginTop: '20vh'
    }
  })
}

const App: React.FC = () => (
  <Button onClick={success}>
    Customized style
  </Button>
)

export default App
