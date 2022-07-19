/**
 * title: 控制 ToolTip 的显示
 * desc: 当`tooltipVisible`为`true`时，将始终显示ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。
 */

import { Slider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Slider defaultValue={30} tooltipVisible />
)

export default App
