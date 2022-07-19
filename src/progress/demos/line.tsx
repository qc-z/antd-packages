/**
 * title: 进度条
 * desc: 标准的进度条。
 */

import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>
)

export default App
