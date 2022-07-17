/**
 * title: 受控模式
 * desc: 受控的Segmented。
 */

import React, { useState } from 'react'
import { Segmented } from 'antd-packages'

const Demo: React.FC = () => {
  const [value, setValue] = useState<
    string | number
  >('Map')

  return (
    <Segmented
      options={['Map', 'Transit', 'Satellite']}
      value={value}
      onChange={setValue}
    />
  )
}

export default Demo
