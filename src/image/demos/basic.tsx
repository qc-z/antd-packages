/**
 * title: 基本用法
 * desc: 单击图像可以放大显示。
 */

import { Image } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
)

export default App
