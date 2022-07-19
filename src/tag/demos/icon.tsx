/**
 * title: 图标按钮
 * desc: 当需要在`Tag`内嵌入`Icon`时，可以设置`icon`属性，或者直接在`Tag`内使用`Icon`组件。如果想控制`Icon`具体的位置，只能直接使用`Icon`组件，而非`icon`属性。
 */

import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined
} from '@ant-design/icons'
import { Tag } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Tag
      icon={<TwitterOutlined />}
      color="#55acee"
    >
      Twitter
    </Tag>
    <Tag
      icon={<YoutubeOutlined />}
      color="#cd201f"
    >
      Youtube
    </Tag>
    <Tag
      icon={<FacebookOutlined />}
      color="#3b5999"
    >
      Facebook
    </Tag>
    <Tag
      icon={<LinkedinOutlined />}
      color="#55acee"
    >
      LinkedIn
    </Tag>
  </>
)

export default App
