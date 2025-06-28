"use client"

import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { VerifiedPartnerShow } from "@/components/verified-partners/show"

export const dynamic = "force-dynamic"

function VerifiedPartnerShowContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <VerifiedPartnerShow />
    </AdminLayout>
  )
}

export default function VerifiedPartnerShowPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifiedPartnerShowContent params={params} />
    </Suspense>
  )
}
