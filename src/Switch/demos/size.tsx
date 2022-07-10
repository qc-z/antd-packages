/**
 * title: 两种大小
 * desc: `size="small"`表示小号开关。
 */

import { Switch } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
)

export default App
