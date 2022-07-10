/**
 * title: 标题组件
 * desc: 展示不同级别的标题。
 */

import { Typography } from 'antd'
import React from 'react'

const { Title } = Typography

const App: React.FC = () => (
  <>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
  </>
)

export default App
