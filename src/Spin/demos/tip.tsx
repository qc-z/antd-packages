/**
 * title: 自定义描述文案
 * desc: 自定义描述文案。
 */

import { Alert, Spin } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
)

export default App
