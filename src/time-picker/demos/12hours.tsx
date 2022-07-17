/**
 * title: 12 小时制
 * desc: 12小时制的时间选择器，默认的format为`h:mm:ssa`。
 */

import { TimePicker } from 'antd-packages'
import type { Moment } from 'moment'
import React from 'react'

const onChange = (
  time: Moment,
  timeString: string
) => {
  console.log(time, timeString)
}

const App: React.FC = () => (
  <>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker
      use12Hours
      format="h:mm:ss A"
      onChange={onChange}
      style={{ width: 140 }}
    />
    <TimePicker
      use12Hours
      format="h:mm a"
      onChange={onChange}
    />
  </>
)

export default App
