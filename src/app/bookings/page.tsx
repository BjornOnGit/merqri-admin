import { Suspense } from "react"
import { BookingList } from "@/components/bookings"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

export const dynamic = "force-dynamic"
function BookingListContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
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
