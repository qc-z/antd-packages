/**
 * title: 自定义 Icon 图标
 * desc: 自定义提示`icon`。
 */

import { QuestionCircleOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Popconfirm
    title="Are you sure？"
    icon={
      <QuestionCircleOutlined
        style={{ color: 'red' }}
      />
    }
  >
    <a href="#">Delete</a>
  </Popconfirm>
)

export default App
