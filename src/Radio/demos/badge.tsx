/**
 * title: Badge style
 * desc: 测试Badge的样式。
 */

import { Badge, Radio } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Radio.Group buttonStyle="solid">
    <Badge count={1}>
      <Radio.Button value={1}>
        Click Me
      </Radio.Button>
    </Badge>
    <Badge count={2}>
      <Radio.Button value={2}>
        Not Me
      </Radio.Button>
    </Badge>
  </Radio.Group>
)

export default App
