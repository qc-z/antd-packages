/**
 * title: 限制数量
 * desc: 通过`maxCount`限制上传数量。当为`1`时，始终用最新上传的代替当前。
 */

import { UploadOutlined } from '@ant-design/icons'
import { Button, Space, Upload } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <Space
    direction="vertical"
    style={{ width: '100%' }}
    size="large"
  >
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>
        Upload (Max: 1)
      </Button>
    </Upload>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={3}
      multiple
    >
      <Button icon={<UploadOutlined />}>
        Upload (Max: 3)
      </Button>
    </Upload>
  </Space>
)

export default App
