/**
 * title: 自定义 onClick 事件
 * desc: 点击锚点不记录历史。
 */

import { Anchor } from 'antd-packages'
import React from 'react'

const { Link } = Anchor

const handleClick = (
  e: React.MouseEvent<HTMLElement>,
  link: {
    title: React.ReactNode
    href: string
  }
) => {
  e.preventDefault()
  console.log(link)
}

const App: React.FC = () => (
  <Anchor affix={false} onClick={handleClick}>
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
