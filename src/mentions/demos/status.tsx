/**
 * title: 自定义状态
 * desc: 使用`status`为Mentions添加状态。可选`error`或者`warning`。
 */

import { Mentions, Space } from 'antd-packages'
import type { OptionProps } from 'antd-packages/es/mentions'
import React from 'react'

const { Option } = Mentions

const onChange = (value: string) => {
  console.log('Change:', value)
}

const onSelect = (option: OptionProps) => {
  console.log('select', option)
}

const App: React.FC = () => {
  const options = (
    <>
      <Option value="afc163">afc163</Option>
      <Option value="zombieJ">zombieJ</Option>
      <Option value="yesmeck">yesmeck</Option>
    </>
  )

  return (
    <Space direction="vertical">
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="error"
      >
        {options}
      </Mentions>
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="warning"
      >
        {options}
      </Mentions>
    </Space>
  )
}

export default App
