/**
 * title: 顶部公告
 * desc: 页面顶部通告形式，默认有图标且`type`为'warning'。
 */

import { Alert } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Alert message="Warning text" banner />
    <br />
    <Alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <Alert
      showIcon={false}
      message="Warning text without icon"
      banner
    />
    <br />
    <Alert
      type="error"
      message="Error text"
      banner
    />
  </>
)

export default App
