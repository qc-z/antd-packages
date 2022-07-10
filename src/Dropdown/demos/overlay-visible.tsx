/**
 * title: 菜单隐藏方式
 * desc: 默认是点击关闭菜单，可以关闭此功能。
 */

import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Menu, Space } from 'antd'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const handleMenuClick: MenuProps['onClick'] = (
    e
  ) => {
    if (e.key === '3') {
      setVisible(false)
    }
  }

  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag)
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label:
            'Clicking me will not close the menu.',
          key: '1'
        },
        {
          label:
            'Clicking me will not close the menu also.',
          key: '2'
        },
        {
          label:
            'Clicking me will close the menu.',
          key: '3'
        }
      ]}
    />
  )

  return (
    <Dropdown
      overlay={menu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}

export default App
