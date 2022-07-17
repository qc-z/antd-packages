/**
 * title: 自动调整位置
 * desc: 气泡框不可见时自动调整位置
 */

import { Button, Tooltip } from 'antd-packages'
import React from 'react'

const wrapStyles: React.CSSProperties = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9'
}

const App: React.FC = () => (
  <div style={wrapStyles}>
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={(trigger) =>
        trigger.parentElement!
      }
    >
      <Button>
        Adjust automatically / 自动调整
      </Button>
    </Tooltip>
    <br />
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={(trigger) =>
        trigger.parentElement!
      }
      autoAdjustOverflow={false}
    >
      <Button>Ignore / 不处理</Button>
    </Tooltip>
  </div>
)

export default App
