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

        <Form.Item label="Pickup City" name="pickup_city">
          <Input />
        </Form.Item>

        <Form.Item label="Pickup State" name="pickup_state">
          <Input />
        </Form.Item>

        <Form.Item label="Delivery Address" name="delivery_address">
          <Input />
        </Form.Item>

        <Form.Item label="Delivery City" name="delivery_city">
          <Input />
        </Form.Item>

        <Form.Item label="Delivery State" name="delivery_state">
          <Input />
        </Form.Item>

        <Form.Item label="Moving Date" name="moving_date">
          <Input type="date" />
        </Form.Item>

        <Form.Item label="Moving Time" name="moving_time">
          <Input type="time" />
        </Form.Item>

        <Form.Item label="Property Type" name="property_type">
          <Select>
            <Select.Option value="apartment">Apartment</Select.Option>
            <Select.Option value="house">House</Select.Option>
            <Select.Option value="office">Office</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Bedrooms" name="bedrooms">
          <Select>
            <Select.Option value={1}>1 Bedroom</Select.Option>
            <Select.Option value={2}>2 Bedrooms</Select.Option>
            <Select.Option value={3}>3 Bedrooms</Select.Option>
            <Select.Option value={4}>4 Bedrooms</Select.Option>
            <Select.Option value={5}>5+ Bedrooms</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Special Instructions" name="special_instructions">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Booking Status" name="booking_status">
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

        <Form.Item label="Total Amount" name="total_amount">
          <Input type="number" prefix="₦" />
        </Form.Item>
      </Form>
    </Edit>
  )
}
