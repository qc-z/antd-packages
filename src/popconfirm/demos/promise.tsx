/**
 * title: 基于 Promise 的异步关闭
 * desc: 点击确定后异步关闭Popconfirm，例如提交表单。
 */

import { Button, Popconfirm } from 'antd-packages'
import React from 'react'

const App: React.FC = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000)
    })

  return (
    <Popconfirm
      title="Title"
      onConfirm={confirm}
      onVisibleChange={() =>
        console.log('visible change')
      }
    >
      <Button type="primary">
        Open Popconfirm with Promise
      </Button>
    </Popconfirm>
  )
}

export default App
