/**
 * title: 水平分割线
 * desc: 默认为水平分割线，可在中间加入文字。
 */

import { Divider } from 'antd'
import React from 'react'

const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed nonne merninisti licere
      mihi ista probare, quae sunt a te dicta?
      Refert tamen, quo modo.
    </p>
  </>
)

export default App
