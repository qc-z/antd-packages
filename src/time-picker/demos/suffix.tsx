/**
 * title: 后缀图标
 * desc: 点击TimePicker，然后可以在浮层中选择或者输入某一时间。
 */

import { SmileOutlined } from '@ant-design/icons'
import { TimePicker } from 'antd-packages'
import type { Moment } from 'moment'
import moment from 'moment'
import React from 'react'

const onChange = (
  time: Moment,
  timeString: string
) => {
  console.log(time, timeString)
}

const App: React.FC = () => (
  <TimePicker
    suffixIcon={<SmileOutlined />}
    onChange={onChange}
    defaultOpenValue={moment(
      '00:00:00',
      'HH:mm:ss'
    )}
  />
)

export default App
