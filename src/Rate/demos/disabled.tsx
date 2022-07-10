/**
 * title: 只读
 * desc: 只读，无法进行鼠标交互。
 */

import { Rate } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Rate disabled defaultValue={2} />
)

export default App
