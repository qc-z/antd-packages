/**
 * title: 加载中
 * desc: 标识开关操作仍在执行中。
 */

import { Switch } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
)

export default App
