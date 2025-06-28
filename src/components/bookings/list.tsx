"use client"

import type React from "react"
import { useTable, List, EditButton, ShowButton, DeleteButton, DateField } from "@refinedev/antd"
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
        <Table.Column dataIndex="pickup_location" title="Pickup Location" />
        <Table.Column dataIndex="destination" title="Destination" />
        <Table.Column dataIndex="pickup_date" title="Pickup Date" />
        <Table.Column dataIndex="pickup_time" title="Pickup Time" />
        <Table.Column dataIndex="passenger_count" title="Passengers" />
        <Table.Column dataIndex="booking_status" title="Status" />
        <Table.Column
          dataIndex={["created_at"]}
          title="Created At"
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: any) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  )
}
