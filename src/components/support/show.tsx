"use client"

import type React from "react"
import { Show, TextField, DateField, TagField } from "@refinedev/antd"
import { Typography, Card, Space, Divider } from "antd"
import { useShow } from "@refinedev/core"

const { Title, Text, Paragraph } = Typography

export const SupportShow: React.FC = () => {
  const { queryResult } = useShow()
  const { data, isLoading } = queryResult

  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Card>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div>
            <Title level={4}>Ticket #{record?.ticket_number}</Title>
            <Space>
              <TagField
                value={record?.status || "open"}
                color={record?.status === "resolved" ? "green" : record?.status === "in_progress" ? "blue" : "orange"}
              />
              <TagField
                value={record?.priority}
                color={record?.priority === "high" ? "red" : record?.priority === "medium" ? "orange" : "default"}
              />
              <TagField
                value={record?.category}
                color={
                  record?.category === "booking"
                    ? "blue"
                    : record?.category === "payment"
                      ? "green"
                      : record?.category === "service"
                        ? "orange"
                        : "default"
                }
              />
            </Space>
          </div>

          <Divider />

          <div>
            <Text strong>Customer Information:</Text>
            <br />
            <Space direction="vertical" style={{ marginTop: 8 }}>
              <div>
                <Text strong>Name:</Text> <TextField value={record?.name} />
              </div>
              <div>
                <Text strong>Email:</Text> <TextField value={record?.email} />
              </div>
              {record?.order_number && (
                <div>
                  <Text strong>Order Number:</Text> <TextField value={record?.order_number} />
                </div>
              )}
            </Space>
          </div>

          <Divider />

          <div>
            <Text strong>Issue Description:</Text>
            <Paragraph style={{ marginTop: 8, padding: 16, backgroundColor: "#f5f5f5", borderRadius: 6 }}>
              {record?.message}
            </Paragraph>
          </div>

          <Divider />

          <div>
            <Text strong>Ticket Created:</Text>
            <br />
            <DateField value={record?.created_at} />
          </div>
        </Space>
      </Card>
    </Show>
  )
}
