/**
 * title: 多图预览时顶部进度自定义
 * desc: 多图预览时顶部展示进度,支持自定义
 */

import { Image } from 'antd'

const App = () => (
  <Image.PreviewGroup
    preview={{
      countRender: (current, total) =>
        `当前 ${current} / 总计 ${total}`
    }}
  >
    <Image
      width={150}
      src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
    <Image
      width={150}
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
    <Image
      width={150}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  </Image.PreviewGroup>
)

export default App
