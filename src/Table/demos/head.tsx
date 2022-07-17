/**
 * title: 筛选和排序
 * desc: 对某一列数据进行筛选，使用列的`filters`属性来指定需要筛选菜单的列，`onFilter`用于筛选当前数据，`filterMultiple`用于指定多选和单选。对某一列数据进行排序，通过指定列的`sorter`函数即可启动排序按钮。`sorter:function(rowA,rowB){...}`，rowA、rowB为比较的两个行数据。`sortDirections:['ascend'|'descend']`改变每列可用的排序方式，切换排序时按数组内容依次切换，设置在tableprops上时对所有列生效。你可以通过设置`['ascend','descend','ascend']`禁止排序恢复到默认状态。使用`defaultSortOrder`属性，设置列的默认排序顺序。
 */

import { Table } from 'antd-packages'
import type {
  ColumnsType,
  TableProps
} from 'antd-packages/lib/table'
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
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Jim',
        value: 'Jim'
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green'
          },
          {
            text: 'Black',
            value: 'Black'
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: string, record) =>
      record.name.indexOf(value) === 0,
    sorter: (a, b) =>
      a.name.length - b.name.length,
    sortDirections: ['descend']
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    onFilter: (value: string, record) =>
      record.address.indexOf(value) === 0
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const onChange: TableProps<DataType>['onChange'] =
  (pagination, filters, sorter, extra) => {
    console.log(
      'params',
      pagination,
      filters,
      sorter,
      extra
    )
  }

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
  />
)

export default App
