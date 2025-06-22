"use client"

import type React from "react"
import { List, useTable, DateField, TagField, ShowButton, EditButton } from "@refinedev/antd"
import { Table, Space } from "antd"
import type { IResourceComponentsProps } from "@refinedev/core"

export const BookingList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  })

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="first_name" title="First Name" />
        <Table.Column dataIndex="last_name" title="Last Name" />
        <Table.Column dataIndex="email" title="Email" />
        <Table.Column dataIndex="phone" title="Phone" />
        <Table.Column dataIndex="pickup_address" title="Pickup Address" />
        <Table.Column dataIndex="delivery_address" title="Delivery Address" />
        <Table.Column
          dataIndex="booking_status"
          title="Status"
          render={(value: string) => (
            <TagField
              value={value}
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
        <Table.Column dataIndex="created_at" title="Created At" render={(value: any) => <DateField value={value} />} />
        <Table.Column
          title="Actions"
          dataIndex="actions"
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
