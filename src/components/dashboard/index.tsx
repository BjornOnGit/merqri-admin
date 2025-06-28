"use client"

import type React from "react"
import { Row, Col, Card, Statistic, Typography, Space, Table, Tag } from "antd"
import { useList } from "@refinedev/core"
import {
  UserOutlined,
  ShoppingCartOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons"

const { Title, Text } = Typography

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

  const { data: verifiedPartnersData } = useList({
    resource: "verified_partners",
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

  // Get recent verified partners for the table
  const { data: recentVerifiedPartners } = useList({
    resource: "verified_partners",
    pagination: { pageSize: 5 },
    sorters: [{ field: "approved_at", order: "desc" }],
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
      title: "Verified Partners",
      value: verifiedPartnersData?.total || 0,
      icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
      color: "#52c41a",
    },
    {
      title: "Support Tickets",
      value: supportData?.total || 0,
      icon: <CustomerServiceOutlined style={{ color: "#faad14" }} />,
      color: "#faad14",
    },
    {
      title: "Contact Messages",
      value: contactsData?.total || 0,
      icon: <MessageOutlined style={{ color: "#722ed1" }} />,
      color: "#722ed1",
    },
  ]

  const getAvailabilityColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "available":
        return "green"
      case "busy":
        return "orange"
      case "unavailable":
        return "red"
      default:
        return "default"
    }
  }

  const verifiedPartnersColumns = [
    {
      title: "Company",
      dataIndex: "company_name",
      key: "company_name",
      width: 200,
    },
    {
      title: "Location",
      key: "location",
      width: 150,
      render: (record: any) => `${record.city}, ${record.state}`,
    },
    {
      title: "Availability",
      dataIndex: "availability_status",
      key: "availability_status",
      width: 120,
      render: (status: string) => (
        <Tag color={getAvailabilityColor(status)}>{status?.toUpperCase() || "AVAILABLE"}</Tag>
      ),
    },
    {
      title: "Rating",
      dataIndex: "average_rating",
      key: "average_rating",
      width: 100,
      render: (rating: number) => `${rating?.toFixed(1) || "0.0"} ⭐`,
    },
    {
      title: "Jobs",
      dataIndex: "total_jobs_completed",
      key: "total_jobs_completed",
      width: 80,
      render: (jobs: number) => jobs || 0,
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
            <Col xs={24} sm={12} lg={8} xl={4.8} key={index}>
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
          <Col xs={24} lg={14}>
            <Card title="Recent Verified Partners" style={{ height: "400px" }}>
              <Table
                dataSource={recentVerifiedPartners?.data || []}
                columns={verifiedPartnersColumns}
                pagination={false}
                size="small"
                scroll={{ y: 280 }}
                rowKey="id"
              />
            </Card>
          </Col>
          <Col xs={24} lg={10}>
            <Card title="Partner Performance Overview" style={{ height: "400px" }}>
              <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                <div>
                  <Text strong>Total Revenue Generated:</Text>
                  <br />
                  <Text style={{ fontSize: "24px", color: "#52c41a" }}>
                    ₦
                    {verifiedPartnersData?.data
                      ?.reduce((sum: number, partner: any) => sum + (partner.total_revenue || 0), 0)
                      ?.toLocaleString() || "0"}
                  </Text>
                </div>
                <div>
                  <Text strong>Average Partner Rating:</Text>
                  <br />
                  <Text style={{ fontSize: "20px", color: "#faad14" }}>
                    {verifiedPartnersData?.data?.length
                      ? (
                          verifiedPartnersData.data.reduce(
                            (sum: number, partner: any) => sum + (partner.average_rating || 0),
                            0,
                          ) / verifiedPartnersData.data.length
                        ).toFixed(1)
                      : "0.0"}{" "}
                    ⭐
                  </Text>
                </div>
                <div>
                  <Text strong>Total Jobs Completed:</Text>
                  <br />
                  <Text style={{ fontSize: "20px", color: "#1890ff" }}>
                    {verifiedPartnersData?.data
                      ?.reduce((sum: number, partner: any) => sum + (partner.total_jobs_completed || 0), 0)
                      ?.toLocaleString() || "0"}
                  </Text>
                </div>
                <div>
                  <Text strong>Available Partners:</Text>
                  <br />
                  <Text style={{ fontSize: "20px", color: "#52c41a" }}>
                    {verifiedPartnersData?.data?.filter((partner: any) => partner.availability_status === "available")
                      ?.length || 0}{" "}
                    / {verifiedPartnersData?.total || 0}
                  </Text>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card title="Recent Activity" style={{ height: "300px" }}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Text>• New booking received from John Doe</Text>
                <Text>• Partner application approved: ABC Movers</Text>
                <Text>• Support ticket resolved: #MERQ-12345</Text>
                <Text>• Payment completed for booking #BK-67890</Text>
                <Text>• New contact message from Jane Smith</Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="System Status" style={{ height: "300px" }}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Text>Database Connection:</Text>
                  <Tag color="green">Healthy</Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Text>Payment Gateway:</Text>
                  <Tag color="green">Online</Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Text>Email Service:</Text>
                  <Tag color="green">Active</Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Text>SMS Service:</Text>
                  <Tag color="orange">Maintenance</Tag>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Text>Backup Status:</Text>
                  <Tag color="green">Up to date</Tag>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  )
}
