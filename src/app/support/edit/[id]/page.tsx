"use client"

import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { SupportEdit } from "@/components/support/edit"

export const dynamic = "force-dynamic"

function SupportEditContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <SupportEdit />
    </AdminLayout>
  )
}

export default function SupportEditPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupportEditContent params={params} />
    </Suspense>
  )
}
