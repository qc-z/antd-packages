/**
 * title: 迷你版
 * desc: 迷你版的步骤条，通过设置`<Stepssize="small">`启用.
 */

import { Steps } from 'antd'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
)

export default App
