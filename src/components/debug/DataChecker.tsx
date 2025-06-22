"use client"

import type React from "react"
import { useList } from "@refinedev/core"
import { Card, Typography, Spin, Alert } from "antd"

const { Title, Text } = Typography

export const DataChecker: React.FC = () => {
  const partnersQuery = useList({
    resource: "partner_applications",
    pagination: { pageSize: 5 },
  })

  const supportQuery = useList({
    resource: "support_tickets",
    pagination: { pageSize: 5 },
  })

  const contactsQuery = useList({
    resource: "contact_messages",
    pagination: { pageSize: 5 },
  })

  const bookingsQuery = useList({
    resource: "bookings",
    pagination: { pageSize: 5 },
  })

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Data Connection Test</Title>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Card title="Partner Applications">
          {partnersQuery.isLoading ? (
            <Spin />
          ) : partnersQuery.isError ? (
            <Alert message="Error" description={partnersQuery.error?.message} type="error" />
          ) : (
            <div>
              <Text>Total: {partnersQuery.data?.total || 0}</Text>
              <pre>{JSON.stringify(partnersQuery.data?.data?.[0] || {}, null, 2)}</pre>
            </div>
          )}
        </Card>

        <Card title="Support Tickets">
          {supportQuery.isLoading ? (
            <Spin />
          ) : supportQuery.isError ? (
            <Alert message="Error" description={supportQuery.error?.message} type="error" />
          ) : (
            <div>
              <Text>Total: {supportQuery.data?.total || 0}</Text>
              <pre>{JSON.stringify(supportQuery.data?.data?.[0] || {}, null, 2)}</pre>
            </div>
          )}
        </Card>

        <Card title="Contact Messages">
          {contactsQuery.isLoading ? (
            <Spin />
          ) : contactsQuery.isError ? (
            <Alert message="Error" description={contactsQuery.error?.message} type="error" />
          ) : (
            <div>
              <Text>Total: {contactsQuery.data?.total || 0}</Text>
              <pre>{JSON.stringify(contactsQuery.data?.data?.[0] || {}, null, 2)}</pre>
            </div>
          )}
        </Card>

        <Card title="Bookings">
          {bookingsQuery.isLoading ? (
            <Spin />
          ) : bookingsQuery.isError ? (
            <Alert message="Error" description={bookingsQuery.error?.message} type="error" />
          ) : (
            <div>
              <Text>Total: {bookingsQuery.data?.total || 0}</Text>
              <pre>{JSON.stringify(bookingsQuery.data?.data?.[0] || {}, null, 2)}</pre>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
