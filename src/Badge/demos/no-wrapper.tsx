/**
 * title: 独立使用
 * desc: 不包裹任何元素即是独立使用，可自定样式展现。>在右上角的badge则限定为红色。
 */

import { ClockCircleOutlined } from '@ant-design/icons'
import { Badge, Space, Switch } from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [show, setShow] = useState(true)

  return (
    <Space>
      <Switch
        checked={show}
        onChange={() => setShow(!show)}
      />
      <Badge count={show ? 25 : 0} />
      <Badge
        count={
          show ? (
            <ClockCircleOutlined
              style={{ color: '#f5222d' }}
            />
          ) : (
            0
          )
        }
      />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#52c41a' }}
      />
    </Space>
  )
}

export default App
