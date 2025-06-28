import { Suspense } from "react"
import { BookingEdit } from "@/components/bookings"
import { AdminLayout } from "@/components/layout/AdminLayout"

export const dynamic = "force-dynamic"

function BookingEditContent() {
  return (
    <AdminLayout>
      <BookingEdit />
    </AdminLayout>
  )
}

export default function BookingEditPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingEditContent />
    </Suspense>
  )
}
