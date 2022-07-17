/**
 * title: 色付きポップアップ
 * desc: カスタムクラスを`TimePicker`ポップアップに渡す
 */

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
    onChange={onChange}
    defaultOpenValue={moment(
      '00:00:00',
      'HH:mm:ss'
    )}
    popupClassName="myCustomClassName"
  />
)

export default App
