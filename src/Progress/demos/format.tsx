/**
 * title: 自定义文字格式
 * desc: `format`属性指定格式。
 */

import { Progress } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress
      type="circle"
      percent={75}
      format={(percent) => `${percent} Days`}
    />
    <Progress
      type="circle"
      percent={100}
      format={() => 'Done'}
    />
  </>
)

export default App
