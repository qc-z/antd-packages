/**
 * title: 更多
 * desc: 更多分页。
 */

import { Pagination } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Pagination defaultCurrent={6} total={500} />
)

export default App
