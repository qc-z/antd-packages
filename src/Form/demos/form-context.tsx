/**
 * title: 多表单联动
 * desc: 通过`Form.Provider`在表单间处理数据。本例子中，Modal的确认按钮在Form之外，通过`form.submit`方法调用表单提交功能。反之，则推荐使用`<ButtonhtmlType="submit"/>`调用web原生提交逻辑。
 */

import {
  SmileOutlined,
  UserOutlined
} from '@ant-design/icons'
import {
  Avatar,
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Typography
} from 'antd-packages'
import type { FormInstance } from 'antd-packages/es/form'
import React, {
  useEffect,
  useRef,
  useState
} from 'react'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

interface UserType {
  name: string
  age: string
}

interface ModalFormProps {
  visible: boolean
  onCancel: () => void
}

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({
  form,
  visible
}: {
  form: FormInstance
  visible: boolean
}) => {
  const prevVisibleRef = useRef<boolean>()
  useEffect(() => {
    prevVisibleRef.current = visible
  }, [visible])
  const prevVisible = prevVisibleRef.current

  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields()
    }
  }, [form, prevVisible, visible])
}

const ModalForm: React.FC<ModalFormProps> = ({
  visible,
  onCancel
}) => {
  const [form] = Form.useForm()

  useResetFormOnCloseModal({
    form,
    visible
  })

  const onOk = () => {
    form.submit()
  }

  return (
    <Modal
      title="Basic Drawer"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout="vertical"
        name="userForm"
      >
        <Form.Item
          name="name"
          label="User Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="User Age"
          rules={[{ required: true }]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  )
}

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const showUserModal = () => {
    setVisible(true)
  }

  const hideUserModal = () => {
    setVisible(false)
  }

  const onFinish = (values: any) => {
    console.log('Finish:', values)
  }

  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { basicForm } = forms
          const users =
            basicForm.getFieldValue('users') || []
          basicForm.setFieldsValue({
            users: [...users, values]
          })
          setVisible(false)
        }
      }}
    >
      <Form
        {...layout}
        name="basicForm"
        onFinish={onFinish}
      >
        <Form.Item
          name="group"
          label="Group Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="User List"
          shouldUpdate={(prevValues, curValues) =>
            prevValues.users !== curValues.users
          }
        >
          {({ getFieldValue }) => {
            const users: UserType[] =
              getFieldValue('users') || []
            return users.length ? (
              <ul>
                {users.map((user, index) => (
                  <li
                    key={index}
                    className="user"
                  >
                    <Avatar
                      icon={<UserOutlined />}
                    />
                    {user.name} - {user.age}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography.Text
                className="ant-form-text"
                type="secondary"
              >
                ( <SmileOutlined /> No user yet. )
              </Typography.Text>
            )
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            htmlType="submit"
            type="primary"
          >
            Submit
          </Button>
          <Button
            htmlType="button"
            style={{ margin: '0 8px' }}
            onClick={showUserModal}
          >
            Add User
          </Button>
        </Form.Item>
      </Form>

      <ModalForm
        visible={visible}
        onCancel={hideUserModal}
      />
    </Form.Provider>
  )
}

export default App
