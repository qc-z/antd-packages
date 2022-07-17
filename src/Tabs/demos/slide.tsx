/**
 * title: 滑动
 * desc: 可以左右、上下滑动，容纳更多标签。
 */

import type { RadioChangeEvent } from 'antd-packages'
import { Radio, Tabs } from 'antd-packages'
import React, { useState } from 'react'

const { TabPane } = Tabs

type TabPosition =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'

const App: React.FC = () => {
  const [mode, setMode] =
    useState<TabPosition>('top')

  const handleModeChange = (
    e: RadioChangeEvent
  ) => {
    setMode(e.target.value)
  }

  return (
    <div>
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">
          Horizontal
        </Radio.Button>
        <Radio.Button value="left">
          Vertical
        </Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{ height: 220 }}
      >
        {[
          ...Array.from(
            { length: 30 },
            (_, i) => i
          )
        ].map((i) => (
          <TabPane
            tab={`Tab-${i}`}
            key={i}
            disabled={i === 28}
          >
            Content of tab {i}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default App
