/**
 * title: 带有进度的步骤
 * desc: 带有进度的步骤。
 */

import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps current={1} percent={60}>
    <Step
      title="Finished"
      description="This is a description."
    />
    <Step
      title="In Progress"
      subTitle="Left 00:00:08"
      description="This is a description."
    />
    <Step
      title="Waiting"
      description="This is a description."
    />
  </Steps>
)

export default App
