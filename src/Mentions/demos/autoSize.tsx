/**
 * title: 自动大小
 * desc: 自适应内容高度。
 */

import { Mentions } from 'antd'
import React from 'react'

const { Option } = Mentions

const App: React.FC = () => (
  <Mentions autoSize style={{ width: '100%' }}>
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
)

export default App
