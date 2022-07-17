/**
 * title: 按钮尺寸
 * desc: 按钮有大、中、小三种尺寸。通过设置`size`为`large``small`分别把按钮设为大、小尺寸。若不设置`size`，则尺寸为中。
 */

import { DownloadOutlined } from '@ant-design/icons'
import { Button, Radio } from 'antd-packages'
import type { SizeType } from 'antd-packages/es/config-provider/SizeContext'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [size, setSize] =
    useState<SizeType>('large')

  return (
    <>
      <Radio.Group
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <Radio.Button value="large">
          Large
        </Radio.Button>
        <Radio.Button value="default">
          Default
        </Radio.Button>
        <Radio.Button value="small">
          Small
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Button type="primary" size={size}>
        Primary
      </Button>
      <Button size={size}>Default</Button>
      <Button type="dashed" size={size}>
        Dashed
      </Button>
      <br />
      <Button type="link" size={size}>
        Link
      </Button>
      <br />
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        size={size}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<DownloadOutlined />}
        size={size}
      />
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size={size}
      />
      <Button
        type="primary"
        shape="round"
        icon={<DownloadOutlined />}
        size={size}
      >
        Download
      </Button>
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        size={size}
      >
        Download
      </Button>
    </>
  )
}

export default App
