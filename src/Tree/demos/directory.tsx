/**
 * title: 目录
 * desc: 内置的目录树，`multiple`模式支持`ctrl(Windows)`/`command(Mac)`复选。
 */

import { Tree } from 'antd-packages'
import type {
  DataNode,
  DirectoryTreeProps
} from 'antd-packages/lib/tree'
import React from 'react'

const { DirectoryTree } = Tree

const treeData: DataNode[] = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      {
        title: 'leaf 0-0',
        key: '0-0-0',
        isLeaf: true
      },
      {
        title: 'leaf 0-1',
        key: '0-0-1',
        isLeaf: true
      }
    ]
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      {
        title: 'leaf 1-0',
        key: '0-1-0',
        isLeaf: true
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true
      }
    ]
  }
]

const App: React.FC = () => {
  const onSelect: DirectoryTreeProps['onSelect'] =
    (keys, info) => {
      console.log('Trigger Select', keys, info)
    }

  const onExpand: DirectoryTreeProps['onExpand'] =
    (keys, info) => {
      console.log('Trigger Expand', keys, info)
    }

  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  )
}

export default App
