/**
 * title: 可选择标签
 * desc: 可通过`CheckableTag`实现类似Checkbox的效果，点击切换选中效果。>该组件为完全受控组件，不支持非受控用法。
 */

import { Tag } from 'antd-packages'
import React, { useState } from 'react'

const { CheckableTag } = Tag

const tagsData = [
  'Movies',
  'Books',
  'Music',
  'Sports'
]

const App: React.FC = () => {
  const [selectedTags, setSelectedTags] =
    useState<string[]>(['Books'])

  const handleChange = (
    tag: string,
    checked: boolean
  ) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    console.log(
      'You are interested in: ',
      nextSelectedTags
    )
    setSelectedTags(nextSelectedTags)
  }

  return (
    <>
      <span style={{ marginRight: 8 }}>
        Categories:
      </span>
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) =>
            handleChange(tag, checked)
          }
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  )
}

export default App
