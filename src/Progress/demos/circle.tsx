/**
 * title: 进度圈
 * desc: 圈形的进度。
 */

import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress type="circle" percent={75} />
    <Progress
      type="circle"
      percent={70}
      status="exception"
    />
    <Progress type="circle" percent={100} />
  </>
)

export default App
