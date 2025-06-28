"use client"

import type React from "react"
import type { IResourceComponentsProps } from "@refinedev/core"
import { Edit, useForm } from "@refinedev/antd"
import { Form, Input, Select, InputNumber } from "antd"

export const BookingEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, queryResult } = useForm()

  const bookingData = queryResult?.data?.data

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Pickup Location"
          name={["pickup_location"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Destination"
          name={["destination"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pickup Date"
          name={["pickup_date"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pickup Time"
          name={["pickup_time"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Passenger Count"
          name={["passenger_count"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Booking Status"
          name={["booking_status"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue="pending"
            options={[
              { value: "pending", label: "Pending" },
              { value: "confirmed", label: "Confirmed" },
              { value: "completed", label: "Completed" },
              { value: "cancelled", label: "Cancelled" },
            ]}
          />
        </Form.Item>
      </Form>
    </Edit>
  )
}
