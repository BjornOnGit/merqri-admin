import { Suspense } from "react"
import { BookingShow } from "@/components/bookings"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

export const dynamic = "force-dynamic"
function BookingShowContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
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
