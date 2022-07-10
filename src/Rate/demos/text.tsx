/**
 * title: 文案展现
 * desc: 给评分组件加上文案展示。
 */

import { Rate } from 'antd'
import React, { useState } from 'react'

const desc = [
  'terrible',
  'bad',
  'normal',
  'good',
  'wonderful'
]

const App: React.FC = () => {
  const [value, setValue] = useState(3)

  return (
    <span>
      <Rate
        tooltips={desc}
        onChange={setValue}
        value={value}
      />
      {value ? (
        <span className="ant-rate-text">
          {desc[value - 1]}
        </span>
      ) : (
        ''
      )}
    </span>
  )
}

export default App
