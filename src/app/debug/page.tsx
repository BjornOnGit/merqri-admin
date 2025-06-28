import { Suspense } from "react"
import { DataChecker } from "@/components/debug/DataChecker"
import { AdminLayout } from "@components/layout/AdminLayout"

function DebugContent() {
  return (
    <AdminLayout>
      <DataChecker />
    </AdminLayout>
  )
}

export default function DebugPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DebugContent />
    </Suspense>
  )
}
