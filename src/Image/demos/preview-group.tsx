/**
 * title: 多张图片预览
 * desc: 点击左右切换按钮可以预览多张图片。
 */

import { Image } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Image.PreviewGroup>
    <Image
      width={200}
      src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
    <Image
      width={200}
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
  </Image.PreviewGroup>
)

export default App
