/**
 * title: 延迟
 * desc: 延迟显示loading效果。当spinning状态在`delay`时间内结束，则不显示loading状态。
 */

import { Alert, Spin, Switch } from 'antd-packages'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const toggle = (checked: boolean) => {
    setLoading(checked)
  }
  const container = (
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  )

  return (
    <div>
      <Spin spinning={loading} delay={500}>
        {container}
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
