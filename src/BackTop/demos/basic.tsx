/**
 * title: 基本
 * desc: 最简单的用法。
 */

import { BackTop } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <BackTop />
    Scroll down to see the bottom-right
    <strong className="site-back-top-basic">
      {' '}
      gray{' '}
    </strong>
    button.
  </>
)

export default App
