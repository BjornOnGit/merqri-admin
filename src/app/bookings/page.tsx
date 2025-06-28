import { Suspense } from "react"
import { BookingList } from "@/components/bookings"
import { AdminLayout } from "@/components/layout/AdminLayout"

export const dynamic = "force-dynamic"
function BookingListContent() {
  return (
    <AdminLayout>
      <BookingList />
    </AdminLayout>
  )
}

export default function BookingListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingListContent />
    </Suspense>
  )
}
