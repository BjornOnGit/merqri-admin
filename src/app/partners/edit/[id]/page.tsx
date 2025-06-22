"use client"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"
import { PartnerEdit } from "@/components/partners"

export default function PartnerEditPage() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
      <PartnerEdit />
    </ThemedLayoutV2>
  )
}
