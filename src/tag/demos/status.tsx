/**
 * title: 预设状态的标签
 * desc: 预设五种状态颜色，可以通过设置`color`为`success`、`processing`、`error`、`default`、`warning`来代表不同的状态。
 */

import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined
} from '@ant-design/icons'
import { Divider, Tag } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Divider orientation="left">
      Without icon
    </Divider>
    <div>
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>
    </div>
    <Divider orientation="left">
      With icon
    </Divider>
    <div>
      <Tag
        icon={<CheckCircleOutlined />}
        color="success"
      >
        success
      </Tag>
      <Tag
        icon={<SyncOutlined spin />}
        color="processing"
      >
        processing
      </Tag>
      <Tag
        icon={<CloseCircleOutlined />}
        color="error"
      >
        error
      </Tag>
      <Tag
        icon={<ExclamationCircleOutlined />}
        color="warning"
      >
        warning
      </Tag>
      <Tag
        icon={<ClockCircleOutlined />}
        color="default"
      >
        waiting
      </Tag>
      <Tag
        icon={<MinusCircleOutlined />}
        color="default"
      >
        stop
      </Tag>
    </div>
  </>
)

export default App
