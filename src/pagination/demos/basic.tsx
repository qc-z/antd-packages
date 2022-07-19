/**
 * title: 基本
 * desc: 基础分页。
 */

import { Pagination } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Pagination defaultCurrent={1} total={50} />
)

export default App
