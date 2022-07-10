/**
 * title: 步骤运行错误
 * desc: 使用Steps的`status`属性来指定当前步骤的状态。
 */

import { Steps } from 'antd'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps current={1} status="error">
    <Step
      title="Finished"
      description="This is a description"
    />
    <Step
      title="In Process"
      description="This is a description"
    />
    <Step
      title="Waiting"
      description="This is a description"
    />
  </Steps>
)

export default App
