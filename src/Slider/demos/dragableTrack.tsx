/**
 * title: 范围可拖拽
 * desc: 可以设置`range.draggableTrack`，使得范围刻度整体可拖拽。
 */

import { Slider } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Slider
    range={{ draggableTrack: true }}
    defaultValue={[20, 50]}
  />
)

export default App
