/**
 * title: 预设范围
 * desc: 可以预设常用的日期范围以提高用户体验。
 */

import { DatePicker, Space } from 'antd-packages'
import type { RangePickerProps } from 'antd-packages/es/date-picker'
import moment from 'moment'
import React from 'react'

const { RangePicker } = DatePicker

const onChange: RangePickerProps['onChange'] = (
  dates,
  dateStrings
) => {
  if (dates) {
    console.log(
      'From: ',
      dates[0],
      ', to: ',
      dates[1]
    )
    console.log(
      'From: ',
      dateStrings[0],
      ', to: ',
      dateStrings[1]
    )
  } else {
    console.log('Clear')
  }
}

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [
          moment().startOf('month'),
          moment().endOf('month')
        ]
      }}
      onChange={onChange}
    />
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [
          moment().startOf('month'),
          moment().endOf('month')
        ]
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
  </Space>
)

export default App
