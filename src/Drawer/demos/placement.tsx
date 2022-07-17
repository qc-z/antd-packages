/**
 * title: 自定义位置
 * desc: 自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。
 */

import type {
  DrawerProps,
  RadioChangeEvent
} from 'antd-packages'
import {
  Button,
  Drawer,
  Radio,
  Space
} from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] =
    useState<DrawerProps['placement']>('left')

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value)
  }

  return (
    <>
      <Space>
        <Radio.Group
          value={placement}
          onChange={onChange}
        >
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button
          type="primary"
          onClick={showDrawer}
        >
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default App
