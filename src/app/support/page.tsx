import { Suspense } from "react"
import { SupportList } from "@/components/support"
import { AdminLayout } from "@components/layout/AdminLayout"

function SupportListContent() {
  return (
    <AdminLayout>
      <SupportList />
    </AdminLayout>
  )
}

export default function SupportListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupportListContent />
    </Suspense>
  )
}
