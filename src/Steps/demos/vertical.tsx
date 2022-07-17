/**
 * title: 竖直方向的步骤条
 * desc: 简单的竖直方向的步骤条。
 */

import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps direction="vertical" current={1}>
    <Step
      title="Finished"
      description="This is a description."
    />
    <Step
      title="In Progress"
      description="This is a description."
    />
    <Step
      title="Waiting"
      description="This is a description."
    />
  </Steps>
)

export default App
