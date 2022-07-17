/**
 * title: Info
 * desc: 展示处理结果。
 */

import { Button, Result } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
)

export default App
