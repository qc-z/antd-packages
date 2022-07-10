/**
 * title: 无边框
 * desc: 无边框样式。
 */

import { TimePicker } from 'antd'
import React from 'react'

const { RangePicker } = TimePicker

const App: React.FC = () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
)

export default App
