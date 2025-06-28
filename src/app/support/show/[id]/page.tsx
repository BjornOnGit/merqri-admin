"use client"

import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { SupportShow } from "@/components/support/show"

export const dynamic = "force-dynamic"

function SupportShowContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <SupportShow />
    </AdminLayout>
  )
}

export default function SupportShowPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupportShowContent params={params} />
    </Suspense>
  )
}
