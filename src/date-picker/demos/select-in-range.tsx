/**
 * title: 选择不超过七天的范围
 * desc: 这里举例如何用`onCalendarChange`和`disabledDate`来限制动态的日期区间选择。
 */

import { DatePicker } from 'antd-packages'
import type { Moment } from 'moment'
import React, { useState } from 'react'

const { RangePicker } = DatePicker

type RangeValue =
  | [Moment | null, Moment | null]
  | null

const App: React.FC = () => {
  const [dates, setDates] =
    useState<RangeValue>(null)
  const [hackValue, setHackValue] =
    useState<RangeValue>(null)
  const [value, setValue] =
    useState<RangeValue>(null)

  const disabledDate = (current: Moment) => {
    if (!dates) {
      return false
    }
    const tooLate =
      dates[0] &&
      current.diff(dates[0], 'days') > 7
    const tooEarly =
      dates[1] &&
      dates[1].diff(current, 'days') > 7
    return !!tooEarly || !!tooLate
  }

  const onOpenChange = (open: boolean) => {
    if (open) {
      setHackValue([null, null])
      setDates([null, null])
    } else {
      setHackValue(null)
    }
  }

  return (
    <RangePicker
      value={hackValue || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => setDates(val)}
      onChange={(val) => setValue(val)}
      onOpenChange={onOpenChange}
    />
  )
}

export default App
