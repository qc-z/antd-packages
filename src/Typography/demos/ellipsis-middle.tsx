/**
 * title: 省略中间
 * desc: 使用`ellipsis={{suffix:...}}`可以封装一个从中间省略内容的组件，适合于需要保留文本末位特征的内容。
 */

import { Typography } from 'antd'
import React from 'react'

const { Text } = Typography

const EllipsisMiddle: React.FC<{
  suffixCount: number
  children: string
}> = ({ suffixCount, children }) => {
  const start = children
    .slice(0, children.length - suffixCount)
    .trim()
  const suffix = children
    .slice(-suffixCount)
    .trim()
  return (
    <Text
      style={{ maxWidth: '100%' }}
      ellipsis={{ suffix }}
    >
      {start}
    </Text>
  )
}

const App: React.FC = () => (
  <EllipsisMiddle suffixCount={12}>
    In the process of internal desktop
    applications development, many different
    design specs and implementations would be
    involved, which might cause designers and
    developers difficulties and duplication and
    reduce the efficiency of development.
  </EllipsisMiddle>
)

export default App
