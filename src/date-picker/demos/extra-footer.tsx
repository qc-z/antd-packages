/**
 * title: 额外的页脚
 * desc: 在浮层中加入额外的页脚，以满足某些定制信息的需求。
 */

import { DatePicker, Space } from 'antd-packages'
import React from 'react'

const { RangePicker } = DatePicker

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      renderExtraFooter={() => 'extra footer'}
    />
    <DatePicker
      renderExtraFooter={() => 'extra footer'}
      showTime
    />
    <RangePicker
      renderExtraFooter={() => 'extra footer'}
    />
    <RangePicker
      renderExtraFooter={() => 'extra footer'}
      showTime
    />
    <DatePicker
      renderExtraFooter={() => 'extra footer'}
      picker="month"
    />
  </Space>
)

export default App
