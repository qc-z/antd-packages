/**
 * title: 悬停点击弹出窗口
 * desc: 以下示例显示如何创建可悬停和单击的弹出窗口。
 */

import { Button, Popover } from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)

  const hide = () => {
    setClicked(false)
    setHovered(false)
  }

  const handleHoverChange = (
    visible: boolean
  ) => {
    setHovered(visible)
    setClicked(false)
  }

  const handleClickChange = (
    visible: boolean
  ) => {
    setHovered(false)
    setClicked(visible)
  }

  const hoverContent = (
    <div>This is hover content.</div>
  )
  const clickContent = (
    <div>This is click content.</div>
  )
  return (
    <Popover
      style={{ width: 500 }}
      content={hoverContent}
      title="Hover title"
      trigger="hover"
      visible={hovered}
      onVisibleChange={handleHoverChange}
    >
      <Popover
        content={
          <div>
            {clickContent}
            <a onClick={hide}>Close</a>
          </div>
        }
        title="Click title"
        trigger="click"
        visible={clicked}
        onVisibleChange={handleClickChange}
      >
        <Button>
          Hover and click / 悬停并单击
        </Button>
      </Popover>
    </Popover>
  )
}

export default App
