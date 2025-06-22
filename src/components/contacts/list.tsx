"use client"

import type React from "react"
import { List, useTable, DateField, ShowButton } from "@refinedev/antd"
import { Table, Space } from "antd"
import type { IResourceComponentsProps } from "@refinedev/core"

export const ContactList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable({
    resource: "contact_messages",
    syncWithLocation: true,
  })

  return (
    <List resource="contact_messages">
      <Table {...tableProps} rowKey="id" scroll={{ x: 800 }}>
        <Table.Column dataIndex="id" title="ID" width={80} />
        <Table.Column dataIndex="name" title="Name" width={150} />
        <Table.Column dataIndex="email" title="Email" width={200} />
        <Table.Column dataIndex="phone" title="Phone" width={150} />
        <Table.Column
          dataIndex="message"
          title="Message Preview"
          width={300}
          render={(value: string) => (
            <div
              style={{
                maxWidth: 280,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {value}
            </div>
          )}
        />
        <Table.Column
          dataIndex="created_at"
          title="Received"
          width={150}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          width={100}
          fixed="right"
          render={(_, record: any) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  )
}
