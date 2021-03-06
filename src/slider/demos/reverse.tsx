/**
 * title: 反向
 * desc: 设置`reverse`可以将滑动条置反。
 */

import { Slider, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [reverse, setReverse] = useState(true)

  return (
    <>
      <Slider
        defaultValue={30}
        reverse={reverse}
      />
      <Slider
        range
        defaultValue={[20, 50]}
        reverse={reverse}
      />
      Reversed:{' '}
      <Switch
        size="small"
        checked={reverse}
        onChange={setReverse}
      />
    </>
  )
}

export default App
