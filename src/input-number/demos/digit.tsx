/**
 * title: 高精度小数
 * desc: 通过`stringMode`开启高精度小数支持，`onChange`事件将返回string类型。对于旧版浏览器，你需要BigIntpolyfill。
 */

import { InputNumber } from 'antd-packages'
import React from 'react'

const onChange = (value: string) => {
  console.log('changed', value)
}

const App: React.FC = () => (
  <InputNumber<string>
    style={{ width: 200 }}
    defaultValue="1"
    min="0"
    max="10"
    step="0.00000000000001"
    onChange={onChange}
    stringMode
  />
)

export default App
