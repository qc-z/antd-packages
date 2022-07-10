/**
 * title: 卡片加载中
 * desc: 可以直接把内容内嵌到`Spin`中，将现有容器变为加载状态。
 */

import { Alert, Spin, Switch } from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const toggle = (checked: boolean) => {
    setLoading(checked)
  }

  return (
    <div>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state：
        <Switch
          checked={loading}
          onChange={toggle}
        />
      </div>
    </div>
  )
}

export default App
