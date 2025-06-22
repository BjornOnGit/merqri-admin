"use client"

import type React from "react"
import { List, useTable, DateField, TagField, ShowButton, EditButton } from "@refinedev/antd"
import { Table, Space } from "antd"
import type { IResourceComponentsProps } from "@refinedev/core"

export const SupportList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable({
    resource: "support_tickets",
    syncWithLocation: true,
  })

  return (
    <List resource="support_tickets">
      <Table {...tableProps} rowKey="id" scroll={{ x: 1000 }}>
        <Table.Column dataIndex="id" title="ID" width={80} />
        <Table.Column dataIndex="ticket_number" title="Ticket #" width={150} />
        <Table.Column dataIndex="name" title="Name" width={150} />
        <Table.Column dataIndex="email" title="Email" width={200} />
        <Table.Column
          dataIndex="category"
          title="Category"
          width={120}
          render={(value: string) => (
            <TagField
              value={value}
              color={
                value === "booking"
                  ? "blue"
                  : value === "payment"
                    ? "green"
                    : value === "service"
                      ? "orange"
                      : "default"
              }
            />
          )}
        />
        <Table.Column
          dataIndex="priority"
          title="Priority"
          width={100}
          render={(value: string) => (
            <TagField value={value} color={value === "high" ? "red" : value === "medium" ? "orange" : "default"} />
          )}
        />
        <Table.Column
          dataIndex="status"
          title="Status"
          width={100}
          render={(value: string) => (
            <TagField
              value={value || "open"}
              color={value === "resolved" ? "green" : value === "in_progress" ? "blue" : "orange"}
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
          width={120}
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
