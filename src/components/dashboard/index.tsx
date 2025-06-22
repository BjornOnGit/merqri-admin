"use client"

import type React from "react"
import { Row, Col, Card, Statistic, Typography, Space } from "antd"
import { useList } from "@refinedev/core"
import { UserOutlined, ShoppingCartOutlined, CustomerServiceOutlined, MessageOutlined } from "@ant-design/icons"

const { Title } = Typography

export const Dashboard: React.FC = () => {
  // Fetch data for statistics
  const { data: bookingsData } = useList({
    resource: "bookings",
    pagination: { mode: "off" },
  })

  const { data: partnersData } = useList({
    resource: "partner_applications",
    pagination: { mode: "off" },
  })

  const { data: supportData } = useList({
    resource: "support_tickets",
    pagination: { mode: "off" },
  })

  const { data: contactsData } = useList({
    resource: "contact_messages",
    pagination: { mode: "off" },
  })

  const stats = [
    {
      title: "Total Bookings",
      value: bookingsData?.total || 0,
      icon: <ShoppingCartOutlined style={{ color: "#F2800A" }} />,
      color: "#F2800A",
    },
    {
      title: "Partner Applications",
      value: partnersData?.total || 0,
      icon: <UserOutlined style={{ color: "#27285C" }} />,
      color: "#27285C",
    },
    {
      title: "Support Tickets",
      value: supportData?.total || 0,
      icon: <CustomerServiceOutlined style={{ color: "#52c41a" }} />,
      color: "#52c41a",
    },
    {
      title: "Contact Messages",
      value: contactsData?.total || 0,
      icon: <MessageOutlined style={{ color: "#faad14" }} />,
      color: "#faad14",
    },
  ]

  return (
    <div style={{ padding: "24px" }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Title level={2} style={{ color: "#27285C" }}>
          MerQri Admin Dashboard
        </Title>

        <Row gutter={[16, 16]}>
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card>
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  prefix={stat.icon}
                  valueStyle={{ color: stat.color }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card title="Recent Activity" style={{ height: "400px" }}>
              <p>Recent bookings and activities will be displayed here</p>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="System Status" style={{ height: "400px" }}>
              <p>System health and status information will be displayed here</p>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  )
}
