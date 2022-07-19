/**
 * title: 图片列表样式
 * desc: 上传文件为图片，可展示本地缩略图。`IE8/9`不支持浏览器本地缩略图展示（[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)），可以写`thumbUrl`属性来代替。
 */

import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd-packages'
import type { UploadFile } from 'antd-packages/es/upload/interface'
import React from 'react'

const fileList: UploadFile[] = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error'
  }
]

const App: React.FC = () => (
  <>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      defaultFileList={[...fileList]}
    >
      <Button icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
    <br />
    <br />
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  </>
)

export default App
