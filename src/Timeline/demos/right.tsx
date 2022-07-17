/**
 * title: 右侧时间轴点
 * desc: 时间轴点可以在内容的右边。
 */

import { ClockCircleOutlined } from '@ant-design/icons'
import { Timeline } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Timeline mode="right">
    <Timeline.Item>
      Create a services site 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Solve initial network problems 2015-09-01
    </Timeline.Item>
    <Timeline.Item
      dot={
        <ClockCircleOutlined
          style={{ fontSize: '16px' }}
        />
      }
      color="red"
    >
      Technical testing 2015-09-01
    </Timeline.Item>
    <Timeline.Item>
      Network problems being solved 2015-09-01
    </Timeline.Item>
  </Timeline>
)

export default App
