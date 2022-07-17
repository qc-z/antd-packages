/**
 * title: 设置锚点滚动偏移量
 * desc: 锚点目标滚动到屏幕正中间。
 */

import { Anchor } from 'antd-packages'
import React, { useEffect, useState } from 'react'

const { Link } = Anchor

const App: React.FC = () => {
  const [targetOffset, setTargetOffset] =
    useState<number | undefined>(undefined)

  useEffect(() => {
    setTargetOffset(window.innerHeight / 2)
  }, [])

  return (
    <Anchor targetOffset={targetOffset}>
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
}

export default App
