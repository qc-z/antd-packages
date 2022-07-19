/**
 * title: 边缘形状
 * desc: 通过设定`strokeLinecap="butt"`可以调整进度条边缘的形状为方形，详见[stroke-linecap](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap)。
 */

import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress strokeLinecap="butt" percent={75} />
    <Progress
      strokeLinecap="butt"
      type="circle"
      percent={75}
    />
    <Progress
      strokeLinecap="butt"
      type="dashboard"
      percent={75}
    />
  </>
)

export default App
