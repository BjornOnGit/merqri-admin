"use client"
import { Edit, useForm } from "@refinedev/antd"
import { Form, Input, Select } from "antd"

const { TextArea } = Input

export const SupportEdit = () => {
  const { formProps, saveButtonProps } = useForm({
    resource: "support_tickets",
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

        <Form.Item label="Category" name="category">
          <Select>
            <Select.Option value="booking">Booking Issues</Select.Option>
            <Select.Option value="payment">Payment Problems</Select.Option>
            <Select.Option value="service">Service Quality</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Priority" name="priority">
          <Select>
            <Select.Option value="low">Low</Select.Option>
            <Select.Option value="medium">Medium</Select.Option>
            <Select.Option value="high">High</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select>
            <Select.Option value="open">Open</Select.Option>
            <Select.Option value="in_progress">In Progress</Select.Option>
            <Select.Option value="resolved">Resolved</Select.Option>
            <Select.Option value="closed">Closed</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Message" name="message">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Order Number" name="order_number">
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  )
}
