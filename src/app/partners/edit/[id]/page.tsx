"use client"

import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { PartnerEdit } from "@/components/partners/edit"

export const dynamic = "force-dynamic"

function PartnerEditContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <PartnerEdit />
    </AdminLayout>
  )
}

export default function PartnerEditPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PartnerEditContent params={params} />
    </Suspense>
  )
}
