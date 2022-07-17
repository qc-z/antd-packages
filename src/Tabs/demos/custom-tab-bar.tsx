/**
 * title: 自定义页签头
 * desc: 使用react-sticky组件实现吸顶效果。
 */

import type { TabsProps } from 'antd-packages'
import { Tabs } from 'antd-packages'
import React from 'react'
import {
  Sticky,
  StickyContainer
} from 'react-sticky'

const { TabPane } = Tabs

const renderTabBar: TabsProps['renderTabBar'] = (
  props,
  DefaultTabBar
) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className="site-custom-tab-bar"
        style={{ ...style }}
      />
    )}
  </Sticky>
)

const App: React.FC = () => (
  <StickyContainer>
    <Tabs
      defaultActiveKey="1"
      renderTabBar={renderTabBar}
    >
      <TabPane
        tab="Tab 1"
        key="1"
        style={{ height: 200 }}
      >
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </StickyContainer>
)

export default App
