/**
 * title: 基本用法
 * desc: 相邻组件水平间距。
 */

import { UploadOutlined } from '@ant-design/icons'
import {
  Button,
  Popconfirm,
  Space,
  Upload
} from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button>
        <UploadOutlined /> Click to Upload
      </Button>
    </Upload>
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
)

export default App
