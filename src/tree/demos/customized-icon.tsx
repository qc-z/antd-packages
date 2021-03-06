/**
 * title: 自定义图标
 * desc: 可以针对不同的节点定制图标。
 */

import {
  DownOutlined,
  FrownFilled,
  FrownOutlined,
  MehOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { Tree } from 'antd-packages'
import type { DataNode } from 'antd-packages/lib/tree'
import React from 'react'

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <SmileOutlined />,
    children: [
      {
        title: 'leaf',
        key: '0-0-0',
        icon: <MehOutlined />
      },
      {
        title: 'leaf',
        key: '0-0-1',
        icon: ({ selected }) =>
          selected ? (
            <FrownFilled />
          ) : (
            <FrownOutlined />
          )
      }
    ]
  }
]

const App: React.FC = () => (
  <Tree
    showIcon
    defaultExpandAll
    defaultSelectedKeys={['0-0-0']}
    switcherIcon={<DownOutlined />}
    treeData={treeData}
  />
)

export default App
