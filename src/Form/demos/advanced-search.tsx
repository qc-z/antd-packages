/**
 * title: 高级搜索
 * desc: 三列栅格式的表单排列方式，常用于数据表格的高级搜索。有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。>🛎️想要3分钟实现？试试ProForm的[查询表单](https://procomponents.ant.design/components/form#%E6%9F%A5%E8%AF%A2%E7%AD%9B%E9%80%89)！
 */

import {
  DownOutlined,
  UpOutlined
} from '@ant-design/icons'
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select
} from 'antd'
import React, { useState } from 'react'

const { Option } = Select

const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false)
  const [form] = Form.useForm()

  const getFields = () => {
    const count = expand ? 10 : 6
    const children = []
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: 'Input something!'
              }
            ]}
          >
            {i % 3 !== 1 ? (
              <Input placeholder="placeholder" />
            ) : (
              <Select defaultValue="2">
                <Option value="1">1</Option>
                <Option value="2">
                  longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                </Option>
              </Select>
            )}
          </Form.Item>
        </Col>
      )
    }
    return children
  }

  const onFinish = (values: any) => {
    console.log(
      'Received values of form: ',
      values
    )
  }

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{ textAlign: 'right' }}
        >
          <Button
            type="primary"
            htmlType="submit"
          >
            Search
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields()
            }}
          >
            Clear
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand)
            }}
          >
            {expand ? (
              <UpOutlined />
            ) : (
              <DownOutlined />
            )}{' '}
            Collapse
          </a>
        </Col>
      </Row>
    </Form>
  )
}

const App: React.FC = () => (
  <div>
    <AdvancedSearchForm />
    <div className="search-result-list">
      Search Result List
    </div>
  </div>
)

export default App
