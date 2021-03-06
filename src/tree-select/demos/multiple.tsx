/**
 * title: 多选
 * desc: 多选的树选择。
 */

import { TreeSelect } from 'antd-packages'
import React, { useState } from 'react'

const { TreeNode } = TreeSelect

const App: React.FC = () => {
  const [value, setValue] = useState<string>()

  const onChange = (newValue: string) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto'
      }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
    >
      <TreeNode value="parent 1" title="parent 1">
        <TreeNode
          value="parent 1-0"
          title="parent 1-0"
        >
          <TreeNode
            value="leaf1"
            title="my leaf"
          />
          <TreeNode
            value="leaf2"
            title="your leaf"
          />
        </TreeNode>
        <TreeNode
          value="parent 1-1"
          title="parent 1-1"
        >
          <TreeNode
            value="sss"
            title={
              <b style={{ color: '#08c' }}>sss</b>
            }
          />
        </TreeNode>
      </TreeNode>
    </TreeSelect>
  )
}

export default App
