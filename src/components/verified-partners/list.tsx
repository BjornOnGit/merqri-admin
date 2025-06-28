"use client"
import { List, useTable, EditButton, ShowButton, DeleteButton } from "@refinedev/antd"
import { Table, Space, Tag, Rate, Avatar } from "antd"
import { UserOutlined, DollarOutlined, ClockCircleOutlined, PhoneOutlined } from "@ant-design/icons"

export const VerifiedPartnerList = () => {
  const { tableProps } = useTable({
    resource: "verified_partners",
    syncWithLocation: true,
  })

  const getStatusColor = (status: string) => {
    switch (status) {
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount || 0)
  }

  const columns = [
    {
      title: "Company",
      dataIndex: "company_name",
      key: "company_name",
      render: (text: string, record: any) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar icon={<UserOutlined />} />
          <div>
            <div style={{ fontWeight: "bold" }}>{text}</div>
            <div style={{ fontSize: "12px", color: "#666" }}>{record.contact_person}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Contact",
      key: "contact",
      render: (record: any) => (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <PhoneOutlined style={{ fontSize: "12px" }} />
            <span style={{ fontSize: "12px" }}>{record.phone}</span>
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>{record.email}</div>
        </div>
      ),
    },
    {
      title: "Location",
      key: "location",
      render: (record: any) => (
        <div>
          <div style={{ fontWeight: "500" }}>
            {record.city}, {record.state}
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>{record.zip_code}</div>
        </div>
      ),
    },
    {
      title: "Pricing",
      key: "pricing",
      render: (record: any) => (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <DollarOutlined style={{ fontSize: "12px" }} />
            <span style={{ fontSize: "12px" }}>{formatCurrency(record.base_rate_per_hour)}/hr</span>
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>{formatCurrency(record.base_rate_per_mile)}/mile</div>
        </div>
      ),
    },
    {
      title: "Availability",
      dataIndex: "availability_status",
      key: "availability_status",
      render: (status: string, record: any) => (
        <div>
          <Tag color={getStatusColor(status)}>{status?.toUpperCase()}</Tag>
          <div style={{ fontSize: "12px", color: "#666", display: "flex", alignItems: "center", gap: "4px" }}>
            <ClockCircleOutlined />
            {record.operating_hours_start} - {record.operating_hours_end}
          </div>
        </div>
      ),
    },
    {
      title: "Performance",
      key: "performance",
      render: (record: any) => (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Rate disabled defaultValue={record.average_rating || 0} style={{ fontSize: "12px" }} />
            <span style={{ fontSize: "12px" }}>({record.average_rating || 0})</span>
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>{record.total_jobs_completed || 0} jobs completed</div>
        </div>
      ),
    },
    {
      title: "Services",
      key: "services",
      render: (record: any) => {
        const services = []
        if (record.residential_moving) services.push("Residential")
        if (record.commercial_moving) services.push("Commercial")
        if (record.long_distance) services.push("Long Distance")
        if (record.packing_services) services.push("Packing")
        if (record.storage_services) services.push("Storage")

        return (
          <div>
            {services.slice(0, 2).map((service, index) => (
              <Tag key={index} size="small" style={{ marginBottom: "2px" }}>
                {service}
              </Tag>
            ))}
            {services.length > 2 && (
              <Tag size="small" color="blue">
                +{services.length - 2} more
              </Tag>
            )}
          </div>
        )
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record: any) => (
        <Space>
          <ShowButton hideText size="small" recordItemId={record.id} />
          <EditButton hideText size="small" recordItemId={record.id} />
          <DeleteButton hideText size="small" recordItemId={record.id} />
        </Space>
      ),
    },
  ]

  return (
    <List>
      <Table {...tableProps} columns={columns} rowKey="id" size="small" scroll={{ x: 1200 }} />
    </List>
  )
}
