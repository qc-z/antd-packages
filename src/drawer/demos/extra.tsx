/**
 * title: 额外操作
 * desc: 在AntDesign规范中，操作按钮建议放在抽屉的右上角，可以使用`extra`属性来实现。
 */

import {
  Button,
  Drawer,
  Radio,
  Space
} from 'antd-packages'
import type { DrawerProps } from 'antd-packages/es/drawer'
import type { RadioChangeEvent } from 'antd-packages/es/radio'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] =
    useState<DrawerProps['placement']>('right')

  const showDrawer = () => {
    setVisible(true)
  }

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value)
  }

  const onClose = () => {
    setVisible(false)
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
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={onClose}
            >
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default App
