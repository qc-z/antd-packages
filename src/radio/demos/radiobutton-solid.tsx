/**
 * title: 填底的按钮样式
 * desc: 实色填底的单选按钮样式。
 */

import { Radio } from 'antd-packages'
import React from 'react'

const App: React.FC = () => (
  <>
    <Radio.Group
      defaultValue="a"
      buttonStyle="solid"
    >
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b">
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="c"
      buttonStyle="solid"
      style={{ marginTop: 16 }}
    >
      <Radio.Button value="a">
        Hangzhou
      </Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">
        Beijing
      </Radio.Button>
      <Radio.Button value="d">
        Chengdu
      </Radio.Button>
    </Radio.Group>
  </>
)

export default App
