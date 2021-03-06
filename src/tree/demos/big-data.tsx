/**
 * title: 大数据
 * desc: 大数据展示。
 */

import { Tree } from 'antd-packages'
import type { DataNode } from 'antd-packages/lib/tree'
import React from 'react'

const treeData: DataNode[] = []

for (let i = 0; i < 100; i += 1) {
  const children: DataNode[] = []

  for (let j = 0; j < 100; j += 1) {
    children.push({
      title: `child ${i}-${j}`,
      key: `l-${i}-${j}`
    })
  }

  treeData.push({
    title: `parent ${i}`,
    key: `l-${i}`,
    children
  })
}

const App: React.FC = () => (
  <Tree
    defaultExpandAll
    height={400}
    treeData={treeData}
  />
)

export default App
