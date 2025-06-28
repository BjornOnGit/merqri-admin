import { Suspense } from "react"
import { BookingEdit } from "@/components/bookings"
import { AdminLayout } from "@/components/layout/AdminLayout"

export const dynamic = "force-dynamic"

function BookingEditContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <BookingEdit />
    </AdminLayout>
  )
}

export default function BookingEditPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingEditContent params={params} />
    </Suspense>
  )
}
