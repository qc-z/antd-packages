/**
 * title: 危险按钮
 * desc: 在4.0之后，危险成为一种按钮属性而不是按钮类型。
 */

import { Button } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </>
)

export default App
