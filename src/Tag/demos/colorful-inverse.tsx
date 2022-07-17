/**
 * title: 反色多彩标签
 * desc: 内部反色标签
 */

import { Divider, Tag } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Divider orientation="left">
      Presets Inverse
    </Divider>
    <div>
      <Tag color="magenta-inverse">magenta</Tag>
      <Tag color="red-inverse">red</Tag>
      <Tag color="volcano-inverse">volcano</Tag>
      <Tag color="orange-inverse">orange</Tag>
      <Tag color="gold-inverse">gold</Tag>
      <Tag color="lime-inverse">lime</Tag>
      <Tag color="green-inverse">green</Tag>
      <Tag color="cyan-inverse">cyan</Tag>
      <Tag color="blue-inverse">blue</Tag>
      <Tag color="geekblue-inverse">geekblue</Tag>
      <Tag color="purple-inverse">purple</Tag>
    </div>
  </>
)

export default App
