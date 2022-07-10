/**
 * title: 多层抽屉
 * desc: 在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。
 */

import { Button, Drawer } from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [childrenDrawer, setChildrenDrawer] =
    useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const showChildrenDrawer = () => {
    setChildrenDrawer(true)
  }

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open drawer
      </Button>
      <Drawer
        title="Multi-level drawer"
        width={520}
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Button
          type="primary"
          onClick={showChildrenDrawer}
        >
          Two-level drawer
        </Button>
        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          visible={childrenDrawer}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  )
}

export default App
