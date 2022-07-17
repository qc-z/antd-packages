/**
 * title: 多样的 Child
 * desc: Debugusage
 */

import { Button, Popconfirm, Space } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space>
    <>
      Button
      <Button>Button</Button>
    </>
    Button
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <Button>Delete</Button>
    </Popconfirm>
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <Button disabled>Delete</Button>
    </Popconfirm>
    {null}
    {false}
    {1}
    Button
    {null}
    {undefined}
  </Space>
)

export default App
