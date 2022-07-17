/**
 * title: 基本
 * desc: 最简单的用法。
 */

import { Segmented } from 'antd-packages'

export default () => (
  <Segmented
    options={[
      'Daily',
      'Weekly',
      'Monthly',
      'Quarterly',
      'Yearly'
    ]}
  />
)
