/**
 * title: 自定义锚点高亮
 * desc: 自定义锚点高亮。
 */

import { Anchor } from 'antd-packages'
import React from 'react'

const { Link } = Anchor

const getCurrentAnchor = () =>
  '#components-anchor-demo-static'

const App: React.FC = () => (
  <Anchor
    affix={false}
    getCurrentAnchor={getCurrentAnchor}
  >
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
