"use client"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"
import { BookingShow } from "@/components/bookings"

export default function BookingShowPage() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
      <BookingShow />
    </ThemedLayoutV2>
  )
}
