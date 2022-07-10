/**
 * title: 固定表头
 * desc: 方便一页内展示大量数据。需要指定column的`width`属性，否则列头和内容可能不对齐。如果指定`width`不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有[超长连续字段破坏布局](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)。
 */

import { Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import React from 'react'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data: DataType[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{ pageSize: 50 }}
    scroll={{ y: 240 }}
  />
)

export default App
