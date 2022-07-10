/**
 * title: 简洁
 * desc: 简单的翻页。
 */

import { Pagination } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <Pagination
      simple
      defaultCurrent={2}
      total={50}
    />
    <br />
    <Pagination
      disabled
      simple
      defaultCurrent={2}
      total={50}
    />
  </>
)

export default App
