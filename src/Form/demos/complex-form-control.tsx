/**
 * title: 复杂一点的控件
 * desc: 这里演示`Form.Item`内有多个元素的使用方式。`<Form.Itemname="field"/>`只会对它的直接子元素绑定表单功能，例如直接包裹了Input/Select。如果控件前后还有一些文案或样式装点，或者一个表单项内有多个控件，你可以使用内嵌的`Form.Item`完成。你可以给`Form.Item`自定义`style`进行内联布局，或者添加`noStyle`作为纯粹的无样式绑定组件（类似3.x中的`getFieldDecorator`）。```diff-<Form.Itemlabel="Field"name="field">-<Input/>-</Form.Item>+<Form.Itemlabel="Field">+<Form.Itemname="field"noStyle><Input/></Form.Item>//直接包裹才会绑定表单+<span>description</span>+</Form.Item>```这里展示了三种典型场景：-`Username`：输入框后面有描述文案或其他组件，在`Form.Item`内使用`<Form.Itemname="field"noStyle/>`去绑定对应子控件。-`Address`：有两个控件，在`Form.Item`内使用两个`<Form.Itemname="field"noStyle/>`分别绑定对应控件。-`BirthDate`：有两个内联控件，错误信息展示各自控件下，使用两个`<Form.Itemname="field"/>`分别绑定对应控件，并修改`style`使其内联布局。>注意，在label对应的Form.Item上不要在指定`name`属性，这个Item只作为布局作用。更复杂的封装复用方式可以参考下面的`自定义表单控件`演示。
 */

import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography
} from 'antd-packages'
import React from 'react'

const { Option } = Select

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
  }

  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="Username">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[
              {
                required: true,
                message: 'Username is required'
              }
            ]}
          >
            <Input
              style={{ width: 160 }}
              placeholder="Please input"
            />
          </Form.Item>
          <Tooltip title="Useful information">
            <Typography.Link href="#API">
              Need Help?
            </Typography.Link>
          </Tooltip>
        </Space>
      </Form.Item>
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[
              {
                required: true,
                message: 'Province is required'
              }
            ]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">
                Zhejiang
              </Option>
              <Option value="Jiangsu">
                Jiangsu
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['address', 'street']}
            noStyle
            rules={[
              {
                required: true,
                message: 'Street is required'
              }
            ]}
          >
            <Input
              style={{ width: '50%' }}
              placeholder="Input street"
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item
        label="BirthDate"
        style={{ marginBottom: 0 }}
      >
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)'
          }}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px'
          }}
        >
          <Input placeholder="Input birth month" />
        </Form.Item>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
