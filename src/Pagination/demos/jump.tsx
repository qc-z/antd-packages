/**
 * title: 跳转
 * desc: 快速跳转到某一页。
 */

import type { PaginationProps } from 'antd-packages'
import { Pagination } from 'antd-packages'
import React from 'react'

const onChange: PaginationProps['onChange'] = (
  pageNumber
) => {
  console.log('Page: ', pageNumber)
}

const App: React.FC = () => (
  <>
    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
    />
    <br />
    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      onChange={onChange}
      disabled
    />
  </>
)

export default App
