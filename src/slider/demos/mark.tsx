/**
 * title: 带标签的滑块
 * desc: 使用`marks`属性标注分段式滑块，使用`value`/`defaultValue`指定滑块位置。当`included=false`时，表明不同标记间为并列关系。当`step=null`时，Slider的可选值仅有`marks`标出来的部分。
 */

import { Slider } from 'antd-packages'
import type { SliderMarks } from 'antd-packages/lib/slider'
import React from 'react'

const marks: SliderMarks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50'
    },
    label: <strong>100°C</strong>
  }
}

const App: React.FC = () => (
  <>
    <h4>included=true</h4>
    <Slider marks={marks} defaultValue={37} />
    <Slider
      range
      marks={marks}
      defaultValue={[26, 37]}
    />

    <h4>included=false</h4>
    <Slider
      marks={marks}
      included={false}
      defaultValue={37}
    />

    <h4>marks & step</h4>
    <Slider
      marks={marks}
      step={10}
      defaultValue={37}
    />

    <h4>step=null</h4>
    <Slider
      marks={marks}
      step={null}
      defaultValue={37}
    />
  </>
)

export default App
