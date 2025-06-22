"use client"
import { Edit, useForm } from "@refinedev/antd"
import { Form, Input, Select } from "antd"

const { TextArea } = Input

export const ContactEdit = () => {
  const { formProps, saveButtonProps } = useForm({
    resource: "contact_messages",
  })

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select>
            <Select.Option value="new">New</Select.Option>
            <Select.Option value="contacted">Contacted</Select.Option>
            <Select.Option value="resolved">Resolved</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Message" name="message">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Edit>
  )
}
