import { Suspense } from "react"
import { BookingShow } from "@/components/bookings"
import { ThemedLayoutV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

function BookingShowContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />}>
      <BookingShow />
    </ThemedLayoutV2>
  )
}

export default function BookingShowPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingShowContent />
    </Suspense>
  )
}
