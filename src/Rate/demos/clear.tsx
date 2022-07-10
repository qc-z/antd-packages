/**
 * title: 清除
 * desc: 支持允许或者禁用清除。
 */

import { Rate } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Rate defaultValue={3} />
    <span className="ant-rate-text">
      allowClear: true
    </span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ant-rate-text">
      allowClear: false
    </span>
  </>
)

export default App
