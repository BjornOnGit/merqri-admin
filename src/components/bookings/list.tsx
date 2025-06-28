"use client"

import type React from "react"
import { List, useTable, DateField, TagField, ShowButton, EditButton } from "@refinedev/antd"
import { Table, Space } from "antd"
import type { IResourceComponentsProps } from "@refinedev/core"

export const BookingList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable({
    resource: "bookings",
    syncWithLocation: true,
  })

  return (
    <List resource="bookings">
      <Table {...tableProps} rowKey="id" scroll={{ x: 1200 }}>
        <Table.Column dataIndex="id" title="ID" width={80} />
        <Table.Column dataIndex="first_name" title="First Name" width={120} />
        <Table.Column dataIndex="last_name" title="Last Name" width={120} />
        <Table.Column dataIndex="email" title="Email" width={200} />
        <Table.Column dataIndex="phone" title="Phone" width={150} />
        <Table.Column dataIndex="pickup_address" title="Pickup Address" width={200} />
        <Table.Column dataIndex="pickup_city" title="Pickup City" width={120} />
        <Table.Column dataIndex="pickup_state" title="Pickup State" width={120} />
        <Table.Column dataIndex="delivery_address" title="Delivery Address" width={200} />
        <Table.Column dataIndex="delivery_city" title="Delivery City" width={120} />
        <Table.Column dataIndex="delivery_state" title="Delivery State" width={120} />
        <Table.Column
          dataIndex="booking_status"
          title="Status"
          width={120}
          render={(value: string) => (
            <TagField
              value={value || "pending"}
              color={
                value === "completed"
                  ? "green"
                  : value === "in_progress"
                    ? "blue"
                    : value === "cancelled"
                      ? "red"
                      : "orange"
              }
            />
          )}
        />
        <Table.Column
          dataIndex="payment_status"
          title="Payment"
          width={120}
          render={(value: string) => (
            <TagField
              value={value || "pending"}
              color={
                value === "paid" ? "green" : value === "failed" ? "red" : value === "refunded" ? "purple" : "orange"
              }
            />
          )}
        />
        <Table.Column
          dataIndex="created_at"
          title="Created"
          width={150}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          width={150}
          fixed="right"
          render={(_, record: any) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record.id} />
              <EditButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  )
}
