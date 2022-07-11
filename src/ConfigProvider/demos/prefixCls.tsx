/**
 * title: 前缀
 * desc: 修改组件和图标前缀。
 */

import { SmileOutlined } from '@ant-design/icons'
import {
  Button,
  ConfigProvider,
  Select
} from 'antd-packages'
import React, { useState } from 'react'

// Ant Design site use `es` module for view
// but do not replace related lib `lib` with `es`
// which do not show correct in site.
// We may need do convert in site also.
const App: React.FC = () => {
  const [prefixCls, setPrefixCls] =
    useState('light')

  return (
    <div>
      <Button
        style={{ marginBottom: '12px' }}
        type="primary"
        onClick={() => setPrefixCls('dark')}
      >
        toggle prefixCls
      </Button>
      <div>
        <ConfigProvider
          prefixCls={prefixCls}
          iconPrefixCls="bamboo"
        >
          <SmileOutlined />
          <Select />
        </ConfigProvider>
      </div>
    </div>
  )
}

export default App
