/**
 * title: 三种大小
 * desc: 我们为`<Segmented/>`组件定义了三种尺寸（大、默认、小），高度分别为`40px`、`32px`和`24px`。
 */

import { Segmented } from 'antd'

export default () => (
  <>
    <Segmented
      size="large"
      options={[
        'Daily',
        'Weekly',
        'Monthly',
        'Quarterly',
        'Yearly'
      ]}
    />
    <br />
    <Segmented
      options={[
        'Daily',
        'Weekly',
        'Monthly',
        'Quarterly',
        'Yearly'
      ]}
    />
    <br />
    <Segmented
      size="small"
      options={[
        'Daily',
        'Weekly',
        'Monthly',
        'Quarterly',
        'Yearly'
      ]}
    />
  </>
)
