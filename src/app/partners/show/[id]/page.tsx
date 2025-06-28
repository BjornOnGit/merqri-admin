"use client"

import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { PartnerShow } from "@/components/partners/show"

export const dynamic = "force-dynamic"

function PartnerShowContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <PartnerShow />
    </AdminLayout>
  )
}

export default function PartnerShowPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PartnerShowContent params={params} />
    </Suspense>
  )
}
