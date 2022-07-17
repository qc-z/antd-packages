/**
 * title: 隐藏后销毁
 * desc: 通过`destroyTooltipOnHide`控制提示关闭时是否销毁dom节点。
 */

import { Tooltip } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Tooltip
    destroyTooltipOnHide={{ keepParent: false }}
    title="prompt text"
  >
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
)

export default App
