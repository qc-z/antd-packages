/**
 * title: 销毁确认对话框
 * desc: 使用`Modal.destroyAll()`可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。
 */

import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd-packages'
import React from 'react'

const { confirm } = Modal

const destroyAll = () => {
  Modal.destroyAll()
}

const showConfirm = () => {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: (
          <Button onClick={destroyAll}>
            Click to destroy all
          </Button>
        ),
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        }
      })
    }, i * 500)
  }
}

const App: React.FC = () => (
  <Button onClick={showConfirm}>Confirm</Button>
)

export default App
