"use client"

import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { VerifiedPartnerList } from "@/components/verified-partners"

export const dynamic = "force-dynamic"

function VerifiedPartnerListContent() {
  return (
    <AdminLayout>
      <VerifiedPartnerList />
    </AdminLayout>
  )
}

export default function VerifiedPartnersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifiedPartnerListContent />
    </Suspense>
  )
}
