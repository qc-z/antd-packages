/**
 * title: 受控同步模式
 * desc: 测试受控模式下两个Segmented同步state。
 */

import { useState } from 'react'
import { Segmented } from 'antd-packages'

const Demo = () => {
  const [foo, setFoo] = useState('AND')
  return (
    <>
      <Segmented
        value={foo}
        options={['AND', 'OR', 'NOT']}
        onChange={setFoo}
      />
      &nbsp;&nbsp;
      <Segmented
        value={foo}
        options={['AND', 'OR', 'NOT']}
        onChange={(value) => setFoo(value)}
      />
    </>
  )
}

export default Demo
