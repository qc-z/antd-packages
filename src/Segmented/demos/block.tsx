/**
 * title: Block 分段选择器
 * desc: `block`属性使其适合父元素宽度。
 */

import { Segmented } from 'antd'

export default () => (
  <Segmented
    block
    options={[
      123,
      456,
      'longtext-longtext-longtext-longtext'
    ]}
  />
)
