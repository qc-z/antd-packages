/**
 * title: 自定义进度条渐变色
 * desc: `linear-gradient`的封装。推荐只传两种颜色。
 */

import { Progress } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={99.9}
    />
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068'
      }}
      percent={99.9}
      status="active"
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={90}
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={100}
    />
  </>
)

export default App
