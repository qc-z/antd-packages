/**
 * title: 字段监听 Hooks
 * desc: `useWatch`允许你监听字段变化，同时仅当改字段变化时重新渲染。API文档请[查阅此处](#Form.useWatch)。
 */

import React from 'react'
import {
  Form,
  Input,
  InputNumber,
  Typography
} from 'antd-packages'

const Demo = () => {
  const [form] = Form.useForm<{
    name: string
    age: number
  }>()
  const nameValue = Form.useWatch('name', form)

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Name (Watch to trigger rerender)"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age (Not Watch)"
        >
          <InputNumber />
        </Form.Item>
      </Form>

      <Typography>
        <pre>Name Value: {nameValue}</pre>
      </Typography>
    </>
  )
}

export default Demo
