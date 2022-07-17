/**
 * title: 改变
 * desc: 改变每页显示条目数。
 */

import type { PaginationProps } from 'antd-packages'
import { Pagination } from 'antd-packages'
import React from 'react'

const onShowSizeChange: PaginationProps['onShowSizeChange'] =
  (current, pageSize) => {
    console.log(current, pageSize)
  }

const App: React.FC = () => (
  <>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />
  </>
)

export default App
