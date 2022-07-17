/**
 * title: 不可用
 * desc: checkbox不可用。
 */

import { Checkbox } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </>
)

export default App
