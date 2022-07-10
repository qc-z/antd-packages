/**
 * title: 标准样式
 * desc: 标准页头，适合使用在需要简单描述的场景。
 */

import { PageHeader } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />
)

export default App
