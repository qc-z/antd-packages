/**
 * title: 不可用
 * desc: 点击按钮切换可用状态。
 */

import { Button, InputNumber } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true)

  const toggle = () => {
    setDisabled(!disabled)
  }

  return (
    <>
      <InputNumber
        min={1}
        max={10}
        disabled={disabled}
        defaultValue={3}
      />
      <div style={{ marginTop: 20 }}>
        <Button onClick={toggle} type="primary">
          Toggle disabled
        </Button>
      </div>
    </>
  )
}

export default App
