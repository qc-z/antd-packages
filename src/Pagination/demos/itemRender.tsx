/**
 * title: 上一步和下一步
 * desc: 修改上一步和下一步为文字链接。
 */

import type { PaginationProps } from 'antd-packages'
import { Pagination } from 'antd-packages'
import React from 'react'

const itemRender: PaginationProps['itemRender'] =
  (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>
    }
    if (type === 'next') {
      return <a>Next</a>
    }
    return originalElement
  }

const App: React.FC = () => (
  <Pagination
    total={500}
    itemRender={itemRender}
  />
)

export default App
