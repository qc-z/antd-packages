/**
 * title: 固定状态改变的回调
 * desc: 可以获得是否固定的状态。
 */

import { Affix, Button } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Affix
    offsetTop={120}
    onChange={(affixed) => console.log(affixed)}
  >
    <Button>120px to affix top</Button>
  </Affix>
)

export default App
