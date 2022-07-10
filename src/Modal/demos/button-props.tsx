/**
 * title: 自定义页脚按钮属性
 * desc: 传入`okButtonProps`和`cancelButtonProps`可分别自定义确定按钮和取消按钮的props。
 */

import { Button, Modal } from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(e)
    setVisible(false)
  }

  const handleCancel = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(e)
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized button props
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default App
