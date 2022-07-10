/**
 * title: 步长选项
 * desc: 可以使用`hourStep``minuteStep``secondStep`按步长展示可选的时分秒。
 */

import { TimePicker } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <TimePicker minuteStep={15} secondStep={10} />
)

export default App
