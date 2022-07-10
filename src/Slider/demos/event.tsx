/**
 * title: 事件
 * desc: 当Slider的值发生改变时，会触发`onChange`事件，并把改变后的值作为参数传入。在`onmouseup`时，会触发`onAfterChange`事件，并把当前值作为参数传入。
 */

import { Slider } from 'antd'
import React from 'react'

const onChange = (
  value: number | [number, number]
) => {
  console.log('onChange: ', value)
}

const onAfterChange = (
  value: number | [number, number]
) => {
  console.log('onAfterChange: ', value)
}

const App: React.FC = () => (
  <>
    <Slider
      defaultValue={30}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
    <Slider
      range
      step={10}
      defaultValue={[20, 50]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  </>
)

export default App
