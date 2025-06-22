import { Suspense } from "react"
import { BookingEdit } from "@/components/bookings"
import { ThemedLayoutV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

function BookingEditContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />}>
      <BookingEdit />
    </ThemedLayoutV2>
  )
}

export default function BookingEditPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingEditContent />
    </Suspense>
  )
}
