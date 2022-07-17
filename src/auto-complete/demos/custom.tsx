/**
 * title: 自定义输入组件
 * desc: 自定义输入组件。
 */

import { AutoComplete, Input } from 'antd-packages'
import React, { useState } from 'react'

const { TextArea } = Input

const App: React.FC = () => {
  const [options, setOptions] = useState<
    { value: string }[]
  >([])

  const handleSearch = (value: string) => {
    setOptions(
      !value
        ? []
        : [
            { value },
            { value: value + value },
            { value: value + value + value }
          ]
    )
  }

  const handleKeyPress = (
    ev: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    console.log('handleKeyPress', ev)
  }

  const onSelect = (value: string) => {
    console.log('onSelect', value)
  }

  return (
    <AutoComplete
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{ height: 50 }}
        onKeyPress={handleKeyPress}
      />
    </AutoComplete>
  )
}

export default App
