"use client"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"
import { SupportList } from "@/components/support"

export default function SupportPage() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
      <SupportList />
    </ThemedLayoutV2>
  )
}
