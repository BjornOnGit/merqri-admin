"use client"

import type React from "react"
import { Layout, Menu, Typography } from "antd"
import {
  DashboardOutlined,
  CalendarOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  ContactsOutlined,
  CheckCircleOutlined,
  UserOutlined,
} from "@ant-design/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"

const { Sider, Content } = Layout
const { Title } = Typography

interface AdminLayoutProps {
  children: React.ReactNode
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const pathname = usePathname()

  const menuItems = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: <Link href="/">Dashboard</Link>,
    },
    {
      key: "/bookings",
      icon: <CalendarOutlined />,
      label: <Link href="/bookings">Bookings</Link>,
    },
    {
      key: "partners",
      icon: <TeamOutlined />,
      label: "Partners",
      children: [
        {
          key: "/partners",
          icon: <UserOutlined />,
          label: <Link href="/partners">Applications</Link>,
        },
        {
          key: "/verified-partners",
          icon: <CheckCircleOutlined />,
          label: <Link href="/verified-partners">Verified Partners</Link>,
        },
      ],
    },
    {
      key: "/support",
      icon: <CustomerServiceOutlined />,
      label: <Link href="/support">Support</Link>,
    },
    {
      key: "/contacts",
      icon: <ContactsOutlined />,
      label: <Link href="/contacts">Contacts</Link>,
    },
  ]

  const getSelectedKey = () => {
    if (pathname === "/") return ["/"]
    if (pathname.startsWith("/bookings")) return ["/bookings"]
    if (pathname.startsWith("/partners")) return ["/partners"]
    if (pathname.startsWith("/verified-partners")) return ["/verified-partners"]
    if (pathname.startsWith("/support")) return ["/support"]
    if (pathname.startsWith("/contacts")) return ["/contacts"]
    return []
  }

  const getOpenKeys = () => {
    if (pathname.startsWith("/partners") || pathname.startsWith("/verified-partners")) {
      return ["partners"]
    }
    return []
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={256}
        style={{
          position: "fixed",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ padding: "16px", textAlign: "center" }}>
          <Title level={4} style={{ color: "white", margin: 0 }}>
            MerQri Admin
          </Title>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={getSelectedKey()}
          defaultOpenKeys={getOpenKeys()}
          items={menuItems}
        />
      </Sider>
      <Layout style={{ marginLeft: 256 }}>
        <Content style={{ padding: "24px", minHeight: "100vh" }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
