/**
 * title: 单选组合 - 配合 name 使用
 * desc: 可以为Radio.Group配置`name`参数，为组合内的input元素赋予相同的`name`属性，使浏览器把Radio.Group下的Radio真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。
 */

import { Radio } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </Radio.Group>
)

export default App
