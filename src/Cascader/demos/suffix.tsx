/**
 * title: 自定义图标
 * desc: 通过`suffixIcon`自定义选择框后缀图标，通过`expandIcon`自定义次级菜单展开图标。
 */

import { SmileOutlined } from '@ant-design/icons'
import { Cascader } from 'antd-packages'
import React from 'react'

interface Option {
  value: string
  label: string
  children?: Option[]
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const onChange = (value: string[]) => {
  console.log(value)
}

const App: React.FC = () => (
  <>
    <Cascader
      suffixIcon={<SmileOutlined />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader
      suffixIcon="ab"
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader
      expandIcon={<SmileOutlined />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader
      expandIcon="ab"
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
  </>
)

export default App
