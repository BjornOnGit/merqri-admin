import { Suspense } from "react"
import { PartnerList } from "@/components/partners"
import { AdminLayout } from "@components/layout/AdminLayout"

export const dynamic = "force-dynamic"

function PartnerListContent() {
  return (
    <AdminLayout>
      <PartnerList />
    </AdminLayout>
  )
}

export default function PartnerListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PartnerListContent />
    </Suspense>
  )
}
