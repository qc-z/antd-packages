/**
 * title: 弹出层中的新建表单
 * desc: 当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用Modal弹出一个表单，用户填写必要信息后创建新的项。>🛎️想要3分钟实现？试试ProForm的[Modal表单](https://procomponents.ant.design/components/form#modal-%E8%A1%A8%E5%8D%95)！
 */

import {
  Button,
  Form,
  Input,
  Modal,
  Radio
} from 'antd'
import React, { useState } from 'react'

interface Values {
  title: string
  description: string
  modifier: string
}

interface CollectionCreateFormProps {
  visible: boolean
  onCreate: (values: Values) => void
  onCancel: () => void
}

const CollectionCreateForm: React.FC<
  CollectionCreateFormProps
> = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message:
                'Please input the title of collection!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}

const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const onCreate = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
    setVisible(false)
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true)
        }}
      >
        New Collection
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}

export default App
