import { Suspense } from "react"
import { BookingList } from "@/components/bookings"
import { ThemedLayoutV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

function BookingListContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />}>
      <BookingList />
    </ThemedLayoutV2>
  )
}

export default function BookingListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingListContent />
    </Suspense>
  )
}
