/**
 * title: 分段进度条
 * desc: 标准的进度条。`type="circle|dashboard"`时不支持分段颜色。
 */

import { Progress, Tooltip } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress
        percent={60}
        success={{ percent: 30 }}
      />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress
        percent={60}
        success={{ percent: 30 }}
        type="circle"
      />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress
        percent={60}
        success={{ percent: 30 }}
        type="dashboard"
      />
    </Tooltip>
  </>
)

export default App
