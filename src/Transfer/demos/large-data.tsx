/**
 * title: 分页
 * desc: 大数据下使用分页。
 */

import { Switch, Transfer } from 'antd-packages'
import type { TransferDirection } from 'antd-packages/es/transfer'
import React, { useEffect, useState } from 'react'

interface RecordType {
  key: string
  title: string
  description: string
  chosen: boolean
}

const App: React.FC = () => {
  const [oneWay, setOneWay] = useState(false)
  const [mockData, setMockData] = useState<
    RecordType[]
  >([])
  const [targetKeys, setTargetKeys] = useState<
    string[]
  >([])

  useEffect(() => {
    const newTargetKeys = []
    const newMockData = []
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1
          }`,
        chosen: Math.random() * 2 > 1
      }
      if (data.chosen) {
        newTargetKeys.push(data.key)
      }
      newMockData.push(data)
    }

    setTargetKeys(newTargetKeys)
    setMockData(newMockData)
  }, [])

  const onChange = (
    newTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => {
    console.log(
      newTargetKeys,
      direction,
      moveKeys
    )
    setTargetKeys(newTargetKeys)
  }

  return (
    <>
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={onChange}
        render={(item) => item.title}
        oneWay={oneWay}
        pagination
      />
      <br />
      <Switch
        unCheckedChildren="one way"
        checkedChildren="one way"
        checked={oneWay}
        onChange={setOneWay}
      />
    </>
  )
}

export default App
