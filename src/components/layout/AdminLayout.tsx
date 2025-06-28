"use client"

import type React from "react"

import { Layout } from "antd"
import { ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

const { Content } = Layout

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ThemedSiderV2 fixed />
      <Layout>
        <Header sticky />
        <Content style={{ padding: "24px", marginLeft: "200px" }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
