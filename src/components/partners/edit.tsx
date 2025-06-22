"use client"
import { Edit, useForm } from "@refinedev/antd"
import { Form, Input, Select } from "antd"

const { TextArea } = Input

export const PartnerEdit = () => {
  const { formProps, saveButtonProps } = useForm({
    resource: "partner_applications",
  })

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Company Name" name="company_name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Contact Person" name="contact_person" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select>
            <Select.Option value="pending">Pending</Select.Option>
            <Select.Option value="approved">Approved</Select.Option>
            <Select.Option value="rejected">Rejected</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Company Size" name="company_size">
          <Select>
            <Select.Option value="1-10">1-10 employees</Select.Option>
            <Select.Option value="11-50">11-50 employees</Select.Option>
            <Select.Option value="51-200">51-200 employees</Select.Option>
            <Select.Option value="200+">200+ employees</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Services" name="services">
          <TextArea rows={3} />
        </Form.Item>
      </Form>
    </Edit>
  )
}
