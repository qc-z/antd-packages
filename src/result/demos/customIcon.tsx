/**
 * title: 自定义 icon
 * desc: 自定义icon。
 */

import { SmileOutlined } from '@ant-design/icons'
import { Button, Result } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
)

export default App
