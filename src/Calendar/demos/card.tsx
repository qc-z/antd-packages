/**
 * title: 卡片模式
 * desc: 用于嵌套在空间有限的容器中。
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
    <div className="site-calendar-demo-card">
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
      />
    </div>
  )
}

export default App
