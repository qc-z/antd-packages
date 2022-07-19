/**
 * title: 基本
 * desc: 一个通用的日历面板，支持年/月切换。
 */

import { Calendar } from 'antd-packages'
import type { CalendarMode } from 'antd-packages/lib/calendar/generateCalendar'
import type { Moment } from 'moment'
import React from 'react'

const App: React.FC = () => {
  const onPanelChange = (
    value: Moment,
    mode: CalendarMode
  ) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  return (
    <Calendar onPanelChange={onPanelChange} />
  )
}

export default App
