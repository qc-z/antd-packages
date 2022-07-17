/**
 * title: 超出边界
 * desc: 当通过受控将`value`超出边界时，提供警告样式。
 */

import { Button, InputNumber, Space } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [value, setValue] = useState<
    string | number
  >('99')

  return (
    <Space>
      <InputNumber
        min={1}
        max={10}
        value={value}
        onChange={setValue}
      />
      <Button
        type="primary"
        onClick={() => {
          setValue(99)
        }}
      >
        Reset
      </Button>
    </Space>
  )
}

export default App
