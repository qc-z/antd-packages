/**
 * title: 禁用
 * desc: 禁用时间选择。
 */

import { TimePicker } from 'antd-packages'
import moment from 'moment'
import React from 'react'

const App: React.FC = () => (
  <TimePicker
    defaultValue={moment('12:08:23', 'HH:mm:ss')}
    disabled
  />
)

export default App
