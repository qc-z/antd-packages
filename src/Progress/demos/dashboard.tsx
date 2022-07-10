/**
 * title: 仪表盘
 * desc: 通过设置`type=dashboard`，可以很方便地实现仪表盘样式的进度条。若想要修改缺口的角度，可以设置`gapDegree`为你想要的值。
 */

import { Progress } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress type="dashboard" percent={75} />
    <Progress
      type="dashboard"
      percent={75}
      gapDegree={30}
    />
  </>
)

export default App
