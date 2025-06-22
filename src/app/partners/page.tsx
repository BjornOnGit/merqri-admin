"use client"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"
import { PartnerList } from "@/components/partners"

export default function PartnersPage() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
      <PartnerList />
    </ThemedLayoutV2>
  )
}
