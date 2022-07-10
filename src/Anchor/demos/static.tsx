/**
 * title: 静态位置
 * desc: 不浮动，状态不随页面滚动变化。
 */

import { Anchor } from 'antd'
import React from 'react'

const { Link } = Anchor

const App: React.FC = () => (
  <Anchor affix={false}>
    <Link
      href="#components-anchor-demo-basic"
      title="Basic demo"
    />
    <Link
      href="#components-anchor-demo-static"
      title="Static demo"
    />
    <Link href="#API" title="API">
      <Link
        href="#Anchor-Props"
        title="Anchor Props"
      />
      <Link
        href="#Link-Props"
        title="Link Props"
      />
    </Link>
  </Anchor>
)

export default App
