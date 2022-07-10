/**
 * title: 自定义触发器 Debug
 * desc: 修改内容前，请尝试此Demo查看样式是否抖动。```tsximport{DesktopOutlined,FileOutlined,MenuFoldOutlined,MenuUnfoldOutlined,PieChartOutlined,TeamOutlined,UserOutlined,}from'@ant-design/icons';importtype{MenuProps}from'antd';import{Layout,Menu}from'antd';importReact,{useState}from'react';const{Header,Sider,Content}=Layout;constitems:MenuProps['items']=[{key:'1',icon:<PieChartOutlined/>,label:'Option1',},{key:'2',icon:<DesktopOutlined/>,label:'Option2',},{key:'sub1',icon:<UserOutlined/>,label:'User',children:[{key:'3',label:'Tom',},{key:'4',label:'Bill',},{key:'5',label:'Alex',},],},{key:'sub2',icon:<TeamOutlined/>,label:'Team',children:[{key:'6',label:'Team1',},{key:'7',label:'Team2',},],},{key:'9',icon:<FileOutlined/>,},];constApp:React.FC=()=>{const[collapsed,setCollapsed]=useState(true);return(<Layout><Sidertrigger={null}collapsiblecollapsed={collapsed}><divclassName="logo"/><Menutheme="dark"mode="inline"defaultSelectedKeys={['3']}defaultOpenKeys={['sub1']}items={items}/></Sider><Layout><HeaderclassName="site-layout-background"style={{padding:0}}>{React.createElement(collapsed?MenuUnfoldOutlined:MenuFoldOutlined,{className:'trigger',onClick:()=>setCollapsed(!collapsed),})}</Header><ContentclassName="site-layout-background"style={{margin:'24px16px',padding:24,minHeight:280,}}>Content</Content></Layout></Layout>);};exportdefaultApp;``````css#components-layout-demo-custom-trigger.trigger{padding:024px;font-size:18px;line-height:64px;cursor:pointer;transition:color0.3s;}#components-layout-demo-custom-trigger.trigger:hover{color:#1890ff;}```
 */

import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'

const { Header, Sider, Content } = Layout

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Option 1'
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'Option 2'
  },
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'User',
    children: [
      {
        key: '3',
        label: 'Tom'
      },
      {
        key: '4',
        label: 'Bill'
      },
      {
        key: '5',
        label: 'Alex'
      }
    ]
  },
  {
    key: 'sub2',
    icon: <TeamOutlined />,
    label: 'Team',
    children: [
      {
        key: '6',
        label: 'Team 1'
      },
      {
        key: '7',
        label: 'Team 2'
      }
    ]
  },
  {
    key: '9',
    icon: <FileOutlined />
  }
]

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['3']}
          defaultOpenKeys={['sub1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed
              ? MenuUnfoldOutlined
              : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () =>
                setCollapsed(!collapsed)
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
