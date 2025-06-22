import { Suspense } from "react"
import { BookingEdit } from "@/components/bookings"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

export const dynamic = "force-dynamic"

function BookingEditContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
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
