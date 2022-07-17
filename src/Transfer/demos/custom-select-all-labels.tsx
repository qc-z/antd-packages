/**
 * title: 自定义全选文字
 * desc: 自定义穿梭框全选按钮的文字。
 */

import { Transfer } from 'antd-packages'
import type { SelectAllLabel } from 'antd-packages/es/transfer'
import React, { useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
}

const mockData: RecordType[] = Array.from({
  length: 10
}).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`
}))

const oriTargetKeys = mockData
  .filter((item) => Number(item.key) % 3 > 1)
  .map((item) => item.key)

const selectAllLabels: SelectAllLabel[] = [
  'Select All',
  ({ selectedCount, totalCount }) =>
    `${selectedCount}/${totalCount}`
]

const App: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState(
    oriTargetKeys
  )
  return (
    <Transfer
      dataSource={mockData}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      render={(item) => item.title}
      selectAllLabels={selectAllLabels}
    />
  )
}

export default App
