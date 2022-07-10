/**
 * title: 多个按钮组合
 * desc: 按钮组合使用时，推荐使用1个主操作+n个次操作，3个以上操作时把更多操作放到[Dropdown.Button](/components/dropdown/#components-dropdown-demo-dropdown-button)中组合使用。
 */

import type { MenuProps } from 'antd'
import {
  Button,
  Dropdown,
  Menu
} from 'antd-packages'
import React from 'react'

const onMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

const menu = (
  <Menu
    onClick={onMenuClick}
    items={[
      {
        key: '1',
        label: '1st item'
      },
      {
        key: '2',
        label: '2nd item'
      },
      {
        key: '3',
        label: '3rd item'
      }
    ]}
  />
)

const App: React.FC = () => (
  <>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown.Button overlay={menu}>
      Actions
    </Dropdown.Button>
  </>
)

export default App
