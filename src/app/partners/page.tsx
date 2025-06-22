import { Suspense } from "react"
import { PartnerList } from "@/components/partners"
import { ThemedLayoutV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

function PartnerListContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />}>
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
