/**
 * title: 自定义头部
 * desc: 自定义日历头部内容。
 */

import {
  Calendar,
  Col,
  Radio,
  Row,
  Select,
  Typography
} from 'antd-packages'
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
    <div className="site-calendar-customize-header-wrapper">
      <Calendar
        fullscreen={false}
        headerRender={({
          value,
          type,
          onChange,
          onTypeChange
        }) => {
          const start = 0
          const end = 12
          const monthOptions = []

          const current = value.clone()
          const localeData = value.localeData()
          const months = []
          for (let i = 0; i < 12; i++) {
            current.month(i)
            months.push(
              localeData.monthsShort(current)
            )
          }

          for (
            let index = start;
            index < end;
            index++
          ) {
            monthOptions.push(
              <Select.Option
                className="month-item"
                key={`${index}`}
              >
                {months[index]}
              </Select.Option>
            )
          }
          const month = value.month()

          const year = value.year()
          const options = []
          for (
            let i = year - 10;
            i < year + 10;
            i += 1
          ) {
            options.push(
              <Select.Option
                key={i}
                value={i}
                className="year-item"
              >
                {i}
              </Select.Option>
            )
          }
          return (
            <div style={{ padding: 8 }}>
              <Typography.Title level={4}>
                Custom header
              </Typography.Title>
              <Row gutter={8}>
                <Col>
                  <Radio.Group
                    size="small"
                    onChange={(e) =>
                      onTypeChange(e.target.value)
                    }
                    value={type}
                  >
                    <Radio.Button value="month">
                      Month
                    </Radio.Button>
                    <Radio.Button value="year">
                      Year
                    </Radio.Button>
                  </Radio.Group>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={
                      false
                    }
                    className="my-year-select"
                    onChange={(newYear) => {
                      const now = value
                        .clone()
                        .year(Number(newYear))
                      onChange(now)
                    }}
                    value={String(year)}
                  >
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={
                      false
                    }
                    value={String(month)}
                    onChange={(selectedMonth) => {
                      const newValue =
                        value.clone()
                      newValue.month(
                        parseInt(
                          selectedMonth,
                          10
                        )
                      )
                      onChange(newValue)
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          )
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  )
}

export default App
