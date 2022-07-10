/**
 * title: 格式化展示
 * desc: 通过`formatter`格式化数字，以展示具有具体含义的数据，往往需要配合`parser`一起使用。>这里有一个更复杂的货币格式化输入框：[https://codesandbox.io/s/currency-wrapper-antd-input-3ynzo](https://codesandbox.io/s/currency-wrapper-antd-input-3ynzo)
 */

import { InputNumber, Space } from 'antd'
import React from 'react'

const onChange = (value: number | string) => {
  console.log('changed', value)
}

const App: React.FC = () => (
  <Space>
    <InputNumber
      defaultValue={1000}
      formatter={(value) =>
        `$ ${value}`.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ','
        )
      }
      parser={(value) =>
        value!.replace(/\$\s?|(,*)/g, '')
      }
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={(value) => `${value}%`}
      parser={(value) => value!.replace('%', '')}
      onChange={onChange}
    />
  </Space>
)

export default App
