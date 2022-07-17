/**
 * title: 不可用
 * desc: Segmented不可用。
 */

import { Segmented } from 'antd-packages'

export default () => (
  <>
    <Segmented
      options={['Map', 'Transit', 'Satellite']}
      disabled
    />
    <br />
    <Segmented
      options={[
        'Daily',
        {
          label: 'Weekly',
          value: 'Weekly',
          disabled: true
        },
        'Monthly',
        {
          label: 'Quarterly',
          value: 'Quarterly',
          disabled: true
        },
        'Yearly'
      ]}
    />
  </>
)
