"use client";

import type React from "react"
import { Layout, Typography, Space, Avatar } from "antd"
import { useGetIdentity } from "@refinedev/core"
import { UserOutlined } from "@ant-design/icons"

const { Header: AntdHeader } = Layout
const { Text } = Typography

export const Header: React.FC<{ sticky?: boolean }> = ({ sticky }) => {
  const { data: user } = useGetIdentity<{
    id: string
    email: string
    full_name?: string
  }>()

  return (
    <AntdHeader
      style={{
        backgroundColor: "#27285C", // Navy blue from style guide
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        position: sticky ? "sticky" : "static",
        top: 0,
        zIndex: 999,
      }}
    >
      <Space>
        <Text
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          MerQri Admin
        </Text>
      </Space>

      <Space>
        <Text style={{ color: "#FFFFFF" }}>Welcome, {user?.full_name || user?.email || "Admin"}</Text>
        <Avatar
          style={{
            backgroundColor: "#F2800A", // Orange from style guide
            color: "#FFFFFF",
          }}
          icon={<UserOutlined />}
        />
      </Space>
    </AntdHeader>
  )
}
