/**
 * title: 404
 * desc: 此页面未找到。
 */

import { Button, Result } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary">Back Home</Button>
    }
  />
)

export default App
