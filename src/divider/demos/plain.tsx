/**
 * title: 分割文字使用正文样式
 * desc: 使用`plain`可以设置为更轻量的分割文字样式。
 */

import { Divider } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider plain>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider orientation="left" plain>
      Left Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider orientation="right" plain>
      Right Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
  </>
)

export default App
