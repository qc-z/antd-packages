/**
 * title: 只设置图标
 * desc: 在SegmentedItem选项中只设置Icon。
 */

import { Segmented } from 'antd'
import {
  AppstoreOutlined,
  BarsOutlined
} from '@ant-design/icons'

export default () => (
  <Segmented
    options={[
      {
        value: 'List',
        icon: <BarsOutlined />
      },
      {
        value: 'Kanban',
        icon: <AppstoreOutlined />
      }
    ]}
  />
)
