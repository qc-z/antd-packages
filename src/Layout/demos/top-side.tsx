/**
 * title: 顶部-侧边布局
 * desc: 拥有顶部导航及侧边栏的页面，多用于展示类网站。
 */

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import { Breadcrumb, Layout, Menu } from 'antd-packages'
import React from 'react'

const { Header, Content, Footer, Sider } = Layout

const items1: MenuProps['items'] = [
  '1',
  '2',
  '3'
].map((key) => ({
  key,
  label: `nav ${key}`
}))

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4)
      .fill(null)
      .map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: `option${subKey}`
        }
      })
  }
})

const App: React.FC = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout
        className="site-layout-background"
        style={{ padding: '24px 0' }}
      >
        <Sider
          className="site-layout-background"
          width={200}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            items={items2}
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
)

export default App
