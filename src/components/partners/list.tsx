"use client"

import type React from "react"
import { List, useTable, DateField, TagField, ShowButton, EditButton } from "@refinedev/antd"
import { Table, Space } from "antd"
import type { IResourceComponentsProps } from "@refinedev/core"

export const PartnerList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable({
    resource: "partner_applications",
    syncWithLocation: true,
  })

  return (
    <List resource="partner_aplications">
      <Table {...tableProps} rowKey="id" scroll={{ x: 1200 }}>
        <Table.Column dataIndex="id" title="ID" width={80} />
        <Table.Column dataIndex="company_name" title="Company Name" width={200} />
        <Table.Column dataIndex="contact_person" title="Contact Person" width={150} />
        <Table.Column dataIndex="email" title="Email" width={200} />
        <Table.Column dataIndex="phone" title="Phone" width={150} />
        <Table.Column dataIndex="city" title="City" width={120} />
        <Table.Column dataIndex="state" title="State" width={120} />
        <Table.Column dataIndex="cac_number" title="CAC Number" width={150} />
        <Table.Column
          dataIndex="status"
          title="Status"
          width={120}
          render={(value: string) => (
            <TagField
              value={value || "pending"}
              color={value === "approved" ? "green" : value === "rejected" ? "red" : "orange"}
            />
          )}
        />
        <Table.Column
          dataIndex="created_at"
          title="Applied At"
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
