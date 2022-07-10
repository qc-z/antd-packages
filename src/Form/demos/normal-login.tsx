/**
 * title: 登录框
 * desc: 普通的登录框，可以容纳更多的元素。>🛎️想要3分钟实现？试试[ProForm](https://procomponents.ant.design/components/form/#%E7%99%BB%E5%BD%95)！
 */

import {
  LockOutlined,
  UserOutlined
} from '@ant-design/icons'
import {
  Button,
  Checkbox,
  Form,
  Input
} from 'antd'
import React from 'react'

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!'
          }
        ]}
      >
        <Input
          prefix={
            <UserOutlined className="site-form-item-icon" />
          }
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!'
          }
        ]}
      >
        <Input
          prefix={
            <LockOutlined className="site-form-item-icon" />
          }
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          noStyle
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  )
}

export default App
