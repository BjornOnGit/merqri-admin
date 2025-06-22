import { Suspense } from "react"
import { PartnerList } from "@/components/partners"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

export const dynamic = "force-dynamic"

function PartnerListContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
      <PartnerList />
    </ThemedLayoutV2>
  )
}

export default function PartnerListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PartnerListContent />
    </Suspense>
  )
}
