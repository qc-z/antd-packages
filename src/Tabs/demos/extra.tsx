/**
 * title: 附加内容
 * desc: 可以在页签两边添加附加操作。
 */

import {
  Button,
  Checkbox,
  Divider,
  Tabs
} from 'antd-packages'
import React, { useMemo, useState } from 'react'

const { TabPane } = Tabs

const CheckboxGroup = Checkbox.Group

const operations = <Button>Extra Action</Button>

const OperationsSlot: Record<
  PositionType,
  React.ReactNode
> = {
  left: (
    <Button className="tabs-extra-demo-button">
      Left Extra Action
    </Button>
  ),
  right: <Button>Right Extra Action</Button>
}

const options = ['left', 'right']

type PositionType = 'left' | 'right'

const App: React.FC = () => {
  const [position, setPosition] = useState<
    PositionType[]
  >(['left', 'right'])

  const slot = useMemo(() => {
    if (position.length === 0) return null

    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction]
      }),
      {}
    )
  }, [position])

  return (
    <>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
      <br />
      <br />
      <br />
      <div>
        You can also specify its direction or both
        side
      </div>
      <Divider />
      <CheckboxGroup
        options={options}
        value={position}
        onChange={(value) => {
          setPosition(value as PositionType[])
        }}
      />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    </>
  )
}

export default App
