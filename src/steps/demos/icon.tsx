/**
 * title: 带图标的步骤条
 * desc: 通过设置`Steps.Step`的`icon`属性，可以启用自定义图标。
 */

import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Steps } from 'antd-packages'
import React from 'react'

const { Step } = Steps

const App: React.FC = () => (
  <Steps>
    <Step
      status="finish"
      title="Login"
      icon={<UserOutlined />}
    />
    <Step
      status="finish"
      title="Verification"
      icon={<SolutionOutlined />}
    />
    <Step
      status="process"
      title="Pay"
      icon={<LoadingOutlined />}
    />
    <Step
      status="wait"
      title="Done"
      icon={<SmileOutlined />}
    />
  </Steps>
)

export default App
