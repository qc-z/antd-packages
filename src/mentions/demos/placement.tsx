/**
 * title: 向上展开
 * desc: 向上展开建议。
 */

import { Mentions } from 'antd-packages'
import React from 'react'

const { Option } = Mentions

const App: React.FC = () => (
  <Mentions
    style={{ width: '100%' }}
    placement="top"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
)

export default App
