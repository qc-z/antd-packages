/**
 * title: 无效或只读
 * desc: 通过`disabled`属性设置是否生效。通过`readOnly`属性设置是否只读。
 */

import { Mentions } from 'antd'
import React from 'react'

const { Option } = Mentions

const getOptions = () =>
  ['afc163', 'zombiej', 'yesmeck'].map(
    (value) => (
      <Option key={value} value={value}>
        {value}
      </Option>
    )
  )

const App: React.FC = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <Mentions
        style={{ width: '100%' }}
        placeholder="this is disabled Mentions"
        disabled
      >
        {getOptions()}
      </Mentions>
    </div>
    <Mentions
      style={{ width: '100%' }}
      placeholder="this is readOnly Mentions"
      readOnly
    >
      {getOptions()}
    </Mentions>
  </>
)

export default App
