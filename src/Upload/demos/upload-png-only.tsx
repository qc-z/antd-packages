/**
 * title: 只上传 png 图片
 * desc: `beforeUpload`返回`false`或`Promise.reject`时，只用于拦截上传行为，不会阻止文件进入上传列表（[原因](https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235)）。如果需要阻止列表展现，可以通过返回`Upload.LIST_IGNORE`实现。
 */

import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Button, message, Upload } from 'antd'
import React from 'react'

const props: UploadProps = {
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png'
    if (!isPNG) {
      message.error(
        `${file.name} is not a png file`
      )
    }
    return isPNG || Upload.LIST_IGNORE
  },
  onChange: (info) => {
    console.log(info.fileList)
  }
}

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>
      Upload png only
    </Button>
  </Upload>
)

export default App
