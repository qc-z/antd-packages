/**
 * title: 触发事件
 * desc: 点击菜单项后会触发事件，用户可以通过相应的菜单项key进行不同的操作。
 */

import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd-packages'
import {
  Dropdown,
  Menu,
  message,
  Space
} from 'antd-packages'
import React from 'react'

const onClick: MenuProps['onClick'] = ({
  key
}) => {
  message.info(`Click on item ${key}`)
}

const menu = (
  <Menu
    onClick={onClick}
    items={[
      {
        label: '1st menu item',
        key: '1'
      },
      {
        label: '2nd menu item',
        key: '2'
      },
      {
        label: '3rd menu item',
        key: '3'
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App
