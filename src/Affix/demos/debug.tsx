/**
 * title: 调整浏览器大小，观察 Affix 容器是否发生变化。跟随变化为正常。#17678
 * desc: DEBUG
 */

import { Affix, Button } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [top, setTop] = useState(10)

  return (
    <div style={{ height: 10000 }}>
      <div>Top</div>
      <Affix offsetTop={top}>
        <div style={{ background: 'red' }}>
          <Button
            type="primary"
            onClick={() => setTop(top + 10)}
          >
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  )
}

export default App
