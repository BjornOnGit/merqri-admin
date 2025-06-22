"use client"

import type React from "react"
import { Show, TextField, DateField } from "@refinedev/antd"
import { Typography, Card, Space, Divider } from "antd"
import { useShow } from "@refinedev/core"

const { Title, Text, Paragraph } = Typography

export const ContactShow: React.FC = () => {
  const { queryResult } = useShow()
  const { data, isLoading } = queryResult

  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Card>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div>
            <Title level={4}>Contact Message</Title>
          </div>

          <Divider />

          <div>
            <Text strong>Contact Information:</Text>
            <br />
            <Space direction="vertical" style={{ marginTop: 8 }}>
              <div>
                <Text strong>Name:</Text> <TextField value={record?.name} />
              </div>
              <div>
                <Text strong>Email:</Text> <TextField value={record?.email} />
              </div>
              <div>
                <Text strong>Phone:</Text> <TextField value={record?.phone || "Not provided"} />
              </div>
            </Space>
          </div>

          <Divider />

          <div>
            <Text strong>Message:</Text>
            <Paragraph style={{ marginTop: 8, padding: 16, backgroundColor: "#f5f5f5", borderRadius: 6 }}>
              {record?.message}
            </Paragraph>
          </div>

          <Divider />

          <div>
            <Text strong>Received:</Text>
            <br />
            <DateField value={record?.created_at} />
          </div>
        </Space>
      </Card>
    </Show>
  )
}
