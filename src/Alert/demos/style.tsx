/**
 * title: 四种样式
 * desc: 共有四种样式`success`、`info`、`warning`、`error`。
 */

import { Alert } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Alert
      message="Success Text"
      type="success"
    />
    <Alert message="Info Text" type="info" />
    <Alert
      message="Warning Text"
      type="warning"
    />
    <Alert message="Error Text" type="error" />
  </>
)

export default App
