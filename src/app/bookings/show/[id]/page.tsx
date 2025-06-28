import { Suspense } from "react"
import { BookingShow } from "@/components/bookings"
import { AdminLayout } from "@/components/layout/AdminLayout"

export const dynamic = "force-dynamic"
function BookingShowContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <BookingShow />
    </AdminLayout>
  )
}

export default function BookingShowPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingShowContent params={params} />
    </Suspense>
  )
}
