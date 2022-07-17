/**
 * title: 渲染在当前 DOM
 * desc: 渲染在当前dom里。自定义容器，查看`getContainer`。
 */

import { Button, Drawer } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <div className="site-drawer-render-in-current-wrapper">
      Render in this
      <div style={{ marginTop: 16 }}>
        <Button
          type="primary"
          onClick={showDrawer}
        >
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        style={{ position: 'absolute' }}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default App
