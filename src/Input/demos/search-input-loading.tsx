/**
 * title: 搜索框 loading
 * desc: 用于`onSearch`的时候展示`loading`。
 */

import { Input } from 'antd-packages'
import React from 'react'

const { Search } = Input

const App: React.FC = () => (
  <>
    <Search
      placeholder="input search loading default"
      loading
    />
    <br />
    <br />
    <Search
      placeholder="input search loading with enterButton"
      loading
      enterButton
    />
    <br />
    <br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      loading
    />
  </>
)

export default App
