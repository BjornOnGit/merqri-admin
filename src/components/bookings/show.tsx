"use client"

import { useShow } from "@refinedev/core"
import { Show, TextField, NumberField } from "@refinedev/antd"
import { Typography, Tag, Space } from "antd"

const { Title } = Typography

export const BookingShow = () => {
  const { queryResult } = useShow({
    resource: "bookings",
  })
  const { data, isLoading } = queryResult

  const record = data?.data

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "orange"
      case "confirmed":
        return "blue"
      case "in_progress":
        return "cyan"
      case "completed":
        return "green"
      case "cancelled":
        return "red"
      default:
        return "default"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "orange"
      case "paid":
        return "green"
      case "failed":
        return "red"
      case "refunded":
        return "purple"
      default:
        return "default"
    }
  }

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Booking ID</Title>
      <TextField value={record?.id} />

      <Title level={5}>Customer Name</Title>
      <TextField value={`${record?.first_name} ${record?.last_name}`} />

      <Title level={5}>Email</Title>
      <TextField value={record?.email} />

      <Title level={5}>Phone</Title>
      <TextField value={record?.phone} />

      <Title level={5}>Pickup Address</Title>
      <TextField value={record?.pickup_address} />

      <Title level={5}>Pickup City</Title>
      <TextField value={record?.pickup_city} />

      <Title level={5}>Pickup State</Title>
      <TextField value={record?.pickup_state} />

      <Title level={5}>Delivery Address</Title>
      <TextField value={record?.delivery_address} />

      <Title level={5}>Delivery City</Title>
      <TextField value={record?.delivery_city} />

      <Title level={5}>Delivery State</Title>
      <TextField value={record?.delivery_state} />

      <Title level={5}>Moving Date</Title>
      <TextField value={record?.moving_date ? new Date(record.moving_date).toLocaleDateString() : "Not set"} />

      <Title level={5}>Moving Time</Title>
      <TextField value={record?.moving_time || "Not set"} />

      <Title level={5}>Property Type</Title>
      <TextField value={record?.property_type} />

      <Title level={5}>Bedrooms</Title>
      <NumberField value={record?.bedrooms} />

      <Title level={5}>Special Instructions</Title>
      <TextField value={record?.special_instructions || "None"} />

      <Title level={5}>Booking Status</Title>
      <Space>
        <Tag color={getStatusColor(record?.booking_status)}>{record?.booking_status?.toUpperCase() || "PENDING"}</Tag>
      </Space>

      <Title level={5}>Payment Status</Title>
      <Space>
        <Tag color={getPaymentStatusColor(record?.payment_status)}>
          {record?.payment_status?.toUpperCase() || "PENDING"}
        </Tag>
      </Space>

      <Title level={5}>Total Amount</Title>
      <TextField value={record?.total_amount ? `₦${record.total_amount.toLocaleString()}` : "Not calculated"} />

      <Title level={5}>Created At</Title>
      <TextField value={record?.created_at ? new Date(record.created_at).toLocaleString() : ""} />

      <Title level={5}>Updated At</Title>
      <TextField value={record?.updated_at ? new Date(record.updated_at).toLocaleString() : ""} />
    </Show>
  )
}
