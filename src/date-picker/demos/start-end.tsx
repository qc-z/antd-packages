/**
 * title: 自定义日期范围选择
 * desc: 当`RangePicker`无法满足业务需求时，可以使用两个`DatePicker`实现类似的功能。>-通过设置`disabledDate`方法，来约束开始和结束日期。>-通过`open``onOpenChange`来优化交互。
 */

import { DatePicker, Space } from 'antd-packages'
import type { Moment } from 'moment'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [startValue, setStartValue] =
    useState<Moment | null>(null)
  const [endValue, setEndValue] =
    useState<Moment | null>(null)
  const [endOpen, setEndOpen] = useState(false)

  const disabledStartDate = (
    startDate: Moment
  ) => {
    if (!startDate || !endValue) {
      return false
    }
    return (
      startDate.valueOf() > endValue.valueOf()
    )
  }

  const disabledEndDate = (endDate: Moment) => {
    if (!endDate || !startValue) {
      return false
    }
    return (
      endDate.valueOf() <= startValue.valueOf()
    )
  }

  const handleStartOpenChange = (
    open: boolean
  ) => {
    if (!open) {
      setEndOpen(true)
    }
  }

  const handleEndOpenChange = (open: boolean) => {
    setEndOpen(open)
  }

  return (
    <Space>
      <DatePicker
        disabledDate={disabledStartDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={startValue}
        placeholder="Start"
        onChange={setStartValue}
        onOpenChange={handleStartOpenChange}
      />
      <DatePicker
        disabledDate={disabledEndDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={endValue}
        placeholder="End"
        onChange={setEndValue}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </Space>
  )
}

export default App
