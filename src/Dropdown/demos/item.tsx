/**
 * title: 其他元素
 * desc: 分割线和不可用菜单项。
 */

import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd-packages'
import React from 'react'

const menu = (
  <Menu
    items={[
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
        key: '0'
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
        key: '1'
      },
      {
        type: 'divider'
      },
      {
        label: '3rd menu item（disabled）',
        key: '3',
        disabled: true
      }
    ]}
  />
)

const App: React.FC = () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default App
