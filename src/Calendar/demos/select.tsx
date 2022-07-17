/**
 * title: 选择功能
 * desc: 一个通用的日历面板，支持年/月切换。
 */

import { Alert, Calendar } from 'antd-packages'
import type { Moment } from 'moment'
import moment from 'moment'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] = useState(
    moment('2017-01-25')
  )
  const [selectedValue, setSelectedValue] =
    useState(moment('2017-01-25'))

  const onSelect = (newValue: Moment) => {
    setValue(newValue)
    setSelectedValue(newValue)
  }

  const onPanelChange = (newValue: Moment) => {
    setValue(newValue)
  }

  return (
    <>
      <Alert
        message={`You selected date: ${selectedValue?.format(
          'YYYY-MM-DD'
        )}`}
      />
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </>
  )
}

export default App
