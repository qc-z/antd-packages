/**
 * title: 弹出位置
 * desc: 可以通过`placement`手动指定弹出的位置。
 */

import type { RadioChangeEvent } from 'antd-packages'
import { Radio, Select } from 'antd-packages'
import type { SelectCommonPlacement } from 'antd-packages/es/_util/motion'
import React, { useState } from 'react'

const { Option } = Select

const App: React.FC = () => {
  const [placement, SetPlacement] =
    useState<SelectCommonPlacement>('topLeft')

  const placementChange = (
    e: RadioChangeEvent
  ) => {
    SetPlacement(e.target.value)
  }

  return (
    <>
      <Radio.Group
        value={placement}
        onChange={placementChange}
      >
        <Radio.Button value="topLeft">
          topLeft
        </Radio.Button>
        <Radio.Button value="topRight">
          topRight
        </Radio.Button>
        <Radio.Button value="bottomLeft">
          bottomLeft
        </Radio.Button>
        <Radio.Button value="bottomRight">
          bottomRight
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Select
        defaultValue="HangZhou"
        style={{ width: 120 }}
        dropdownMatchSelectWidth={false}
        placement={placement}
      >
        <Option value="HangZhou">
          HangZhou #310000
        </Option>
        <Option value="NingBo">
          NingBo #315000
        </Option>
        <Option value="WenZhou">
          WenZhou #325000
        </Option>
      </Select>
    </>
  )
}

export default App
