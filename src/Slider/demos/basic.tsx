/**
 * title: 基本
 * desc: 基本滑动条。当`range`为`true`时，渲染为双滑块。当`disabled`为`true`时，滑块处于不可用状态。
 */

import { Slider, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false)

  const onChange = (checked: boolean) => {
    setDisabled(checked)
  }

  return (
    <>
      <Slider
        defaultValue={30}
        disabled={disabled}
      />
      <Slider
        range
        defaultValue={[20, 50]}
        disabled={disabled}
      />
      Disabled:{' '}
      <Switch
        size="small"
        checked={disabled}
        onChange={onChange}
      />
    </>
  )
}

export default App
