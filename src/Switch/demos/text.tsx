/**
 * title: 文字和图标
 * desc: 带有文字和图标。
 */

import {
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons'
import { Switch } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Switch
      checkedChildren="开启"
      unCheckedChildren="关闭"
      defaultChecked
    />
    <br />
    <Switch
      checkedChildren="1"
      unCheckedChildren="0"
    />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </>
)

export default App
