/**
 * title: 基本
 * desc: 默认选中第一项。
 */

import { Tabs } from 'antd-packages'
import React from 'react'

const { TabPane } = Tabs

const onChange = (key: string) => {
  console.log(key)
}

const App: React.FC = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
)

export default App
