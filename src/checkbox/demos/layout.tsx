/**
 * title: 布局
 * desc: Checkbox.Group内嵌Checkbox并与Grid组件一起使用，可以实现灵活的布局。
 */

import { Checkbox, Col, Row } from 'antd-packages'
import type { CheckboxValueType } from 'antd-packages/es/checkbox/Group'
import React from 'react'

const onChange = (
  checkedValues: CheckboxValueType[]
) => {
  console.log('checked = ', checkedValues)
}

const App: React.FC = () => (
  <Checkbox.Group
    style={{ width: '100%' }}
    onChange={onChange}
  >
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
)

export default App
