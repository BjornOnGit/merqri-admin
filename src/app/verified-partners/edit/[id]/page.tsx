"use client"

import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { VerifiedPartnerEdit } from "@/components/verified-partners/edit"

export const dynamic = "force-dynamic"

function VerifiedPartnerEditContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <VerifiedPartnerEdit />
    </AdminLayout>
  )
}

export default function VerifiedPartnerEditPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifiedPartnerEditContent params={params} />
    </Suspense>
  )
}
