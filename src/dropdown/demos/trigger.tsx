/**
 * title: 触发方式
 * desc: 默认是移入触发菜单，可以点击触发。
 */

import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        label: (
          <a href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
        key: '0'
      },
      {
        label: (
          <a href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
        key: '1'
      },
      {
        type: 'divider'
      },
      {
        label: '3rd menu item',
        key: '3'
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Click me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App
