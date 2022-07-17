/**
 * title: 基本
 * desc: 最简单的用法。
 */

import { message, Popconfirm } from 'antd-packages'
import React from 'react'

const confirm = (
  e: React.MouseEvent<HTMLElement>
) => {
  console.log(e)
  message.success('Click on Yes')
}

const cancel = (
  e: React.MouseEvent<HTMLElement>
) => {
  console.log(e)
  message.error('Click on No')
}

const App: React.FC = () => (
  <Popconfirm
    title="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
)

export default App
