/**
 * title: 通知事项日历
 * desc: 一个复杂的应用示例，用`dateCellRender`和`monthCellRender`函数来自定义需要渲染的数据。
 */

import type { BadgeProps } from 'antd-packages'
import { Badge, Calendar } from 'antd-packages'
import type { Moment } from 'moment'
import React from 'react'

const getListData = (value: Moment) => {
  let listData
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.'
        },
        {
          type: 'success',
          content: 'This is usual event.'
        }
      ]
      break
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.'
        },
        {
          type: 'success',
          content: 'This is usual event.'
        },
        {
          type: 'error',
          content: 'This is error event.'
        }
      ]
      break
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event'
        },
        {
          type: 'success',
          content:
            'This is very long usual event。。....'
        },
        {
          type: 'error',
          content: 'This is error event 1.'
        },
        {
          type: 'error',
          content: 'This is error event 2.'
        },
        {
          type: 'error',
          content: 'This is error event 3.'
        },
        {
          type: 'error',
          content: 'This is error event 4.'
        }
      ]
      break
    default:
  }
  return listData || []
}

const getMonthData = (value: Moment) => {
  if (value.month() === 8) {
    return 1394
  }
}

const App: React.FC = () => {
  const monthCellRender = (value: Moment) => {
    const num = getMonthData(value)
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null
  }

  const dateCellRender = (value: Moment) => {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={
                item.type as BadgeProps['status']
              }
              text={item.content}
            />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  )
}

export default App
