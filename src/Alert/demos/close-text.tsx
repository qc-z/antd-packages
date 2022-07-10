/**
 * title: 自定义关闭
 * desc: 可以自定义关闭，自定义的文字会替换原先的关闭`Icon`。
 */

import { Alert } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Alert
    message="Info Text"
    type="info"
    closeText="Close Now"
  />
)

export default App
