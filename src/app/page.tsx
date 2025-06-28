"use client"
import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { Dashboard } from "@/components/dashboard"

export const dynamic = "force-dynamic"

function DashboardContent() {
  return (
    <AdminLayout>
      <Dashboard />
    </AdminLayout>
  )
}

export default function IndexPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}