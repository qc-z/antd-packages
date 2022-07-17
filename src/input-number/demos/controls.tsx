/**
 * title: 图标按钮
 * desc: 可以扩展`controls`属性用以设置自定义图标。
 */

import {
  ArrowDownOutlined,
  ArrowUpOutlined
} from '@ant-design/icons'
import { InputNumber } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <InputNumber
    controls={{
      upIcon: <ArrowUpOutlined />,
      downIcon: <ArrowDownOutlined />
    }}
  />
)

export default App
