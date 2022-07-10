/**
 * title: 基本
 * desc: 基本标签的用法，可以通过添加`closable`变为可关闭标签。可关闭标签具有`onClose`事件。
 */

import { Tag } from 'antd'
import React from 'react'

const log = (
  e: React.MouseEvent<HTMLElement>
) => {
  console.log(e)
}

const preventDefault = (
  e: React.MouseEvent<HTMLElement>
) => {
  e.preventDefault()
  console.log('Clicked! But prevent default.')
}

const App: React.FC = () => (
  <>
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design/issues/1862">
        Link
      </a>
    </Tag>
    <Tag closable onClose={log}>
      Tag 2
    </Tag>
    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag>
  </>
)

export default App
