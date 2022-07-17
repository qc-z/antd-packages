/**
 * title: 自定义回填方式
 * desc: 通过设置`ShowCheckedStrategy`选择回填方式。
 */

import { Cascader } from 'antd-packages'

const { SHOW_CHILD } = Cascader

interface Option {
  value: string | number
  label: string
  children?: Option[]
}
const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({
        label: `Number ${index}`,
        value: index
      }))
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish'
          },
          {
            label: 'Toy Cards',
            value: 'cards'
          },
          {
            label: 'Toy Bird',
            value: 'bird'
          }
        ]
      }
    ]
  }
]

const App: React.FC = () => {
  const onChange = (value: string[][]) => {
    console.log(value)
  }
  return (
    <>
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ['bamboo', 'little', 'fish'],
          ['bamboo', 'little', 'cards'],
          ['bamboo', 'little', 'bird']
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={['bamboo']}
      />
    </>
  )
}

export default App
