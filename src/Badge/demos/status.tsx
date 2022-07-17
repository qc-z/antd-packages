/**
 * title: 状态点
 * desc: 用于表示状态的小圆点。
 */

import { Badge } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge
      status="processing"
      text="Processing"
    />
    <br />
    <Badge status="warning" text="Warning" />
  </>
)

export default App
