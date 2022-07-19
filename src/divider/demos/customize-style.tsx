/**
 * title: 样式自定义
 * desc: 测试一些`style`修改样式的行为。
 */

import { Divider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Divider
      style={{
        borderWidth: 2,
        borderColor: '#7cb305'
      }}
    />
    <Divider
      style={{ borderColor: '#7cb305' }}
      dashed
    />
    <Divider
      style={{ borderColor: '#7cb305' }}
      dashed
    >
      Text
    </Divider>
    <Divider
      type="vertical"
      style={{
        height: 60,
        borderColor: '#7cb305'
      }}
    />
    <Divider
      type="vertical"
      style={{
        height: 60,
        borderColor: '#7cb305'
      }}
      dashed
    />
  </>
)

export default App
