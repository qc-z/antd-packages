/**
 * title: 通过 Hooks 获取上下文（4.5.0+）
 * desc: 通过`message.useMessage`创建支持读取context的`contextHolder`。
 */

import { Button, message } from 'antd-packages'
import React from 'react'

const Context = React.createContext({
  name: 'Default'
})

const App: React.FC = () => {
  const [messageApi, contextHolder] =
    message.useMessage()

  const info = () => {
    messageApi.open({
      type: 'info',
      content: (
        <Context.Consumer>
          {({ name }) => `Hello, ${name}!`}
        </Context.Consumer>
      ),
      duration: 1
    })
  }

  return (
    <Context.Provider
      value={{ name: 'Ant Design' }}
    >
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </Context.Provider>
  )
}

export default App
