"use client"
import { Edit, useForm } from "@refinedev/antd"
import { Form, Input, Select } from "antd"

export const BookingEdit = () => {
  const { formProps, saveButtonProps } = useForm({
    resource: "bookings",
  })

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="First Name" name="first_name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Last Name" name="last_name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Pickup Address" name="pickup_address">
          <Input />
        </Form.Item>

        <Form.Item label="Delivery Address" name="delivery_address">
          <Input />
        </Form.Item>

        <Form.Item label="Status" name="booking_status">
          <Select>
            <Select.Option value="pending">Pending</Select.Option>
            <Select.Option value="confirmed">Confirmed</Select.Option>
            <Select.Option value="in_progress">In Progress</Select.Option>
            <Select.Option value="completed">Completed</Select.Option>
            <Select.Option value="cancelled">Cancelled</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Payment Status" name="payment_status">
          <Select>
            <Select.Option value="pending">Pending</Select.Option>
            <Select.Option value="paid">Paid</Select.Option>
            <Select.Option value="failed">Failed</Select.Option>
            <Select.Option value="refunded">Refunded</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Edit>
  )
}
