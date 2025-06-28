import { Suspense } from "react"
import { BookingShow } from "@/components/bookings"
import { AdminLayout } from "@/components/layout/AdminLayout"

export const dynamic = "force-dynamic"
function BookingShowContent() {
  return (
    <AdminLayout>
      <BookingShow />
    </AdminLayout>
  )
}

export default function BookingShowPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingShowContent />
    </Suspense>
  )
}
