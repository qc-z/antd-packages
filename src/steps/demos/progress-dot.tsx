/**
 * title: 点状步骤条
 * desc: 包含步骤点的进度条。
 */

import { Divider, Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <>
    <Steps progressDot current={1}>
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
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
    >
      <Step
        title="Finished"
        description="This is a description. This is a description."
      />
      <Step
        title="Finished"
        description="This is a description. This is a description."
      />
      <Step
        title="In Progress"
        description="This is a description. This is a description."
      />
      <Step
        title="Waiting"
        description="This is a description."
      />
      <Step
        title="Waiting"
        description="This is a description."
      />
    </Steps>
  </>
)

export default App
