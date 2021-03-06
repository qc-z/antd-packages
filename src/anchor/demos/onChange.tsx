/**
 * title: 监听锚点链接改变
 * desc: 监听锚点链接改变
 */

import { Anchor } from 'antd-packages'
import React from 'react'

const { Link } = Anchor

const onChange = (link: string) => {
  console.log('Anchor:OnChange', link)
}

const App: React.FC = () => (
  <Anchor affix={false} onChange={onChange}>
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
