/**
 * title: Block 按钮
 * desc: `block`属性将使按钮适合其父宽度。
 */

import { Button } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </>
)

export default App
