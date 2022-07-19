/**
 * title: 简单列表
 * desc: 列表拥有大、中、小三种尺寸。通过设置`size`为`large``small`分别把按钮设为大、小尺寸。若不设置`size`，则尺寸为中。可通过设置`header`和`footer`，来自定义列表头部和尾部。
 */

import { Divider, List, Typography } from 'antd-packages'
import React from 'react'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

const App: React.FC = () => (
  <>
    <Divider orientation="left">
      Default Size
    </Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>
            [ITEM]
          </Typography.Text>{' '}
          {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">
      Small Size
    </Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
    />
    <Divider orientation="left">
      Large Size
    </Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
    />
  </>
)

export default App
