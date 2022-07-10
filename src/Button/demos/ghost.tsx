/**
 * title: 幽灵按钮
 * desc: 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
 */

import { Button } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <div className="site-button-ghost-wrapper">
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="primary" danger ghost>
      Danger
    </Button>
  </div>
)

export default App
