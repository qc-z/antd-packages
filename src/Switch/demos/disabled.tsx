/**
 * title: 不可用
 * desc: Switch失效状态。
 */

import { Button, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true)

  const toggle = () => {
    setDisabled(!disabled)
  }

  return (
    <>
      <Switch
        disabled={disabled}
        defaultChecked
      />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  )
}

export default App
