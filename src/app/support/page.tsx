import { Suspense } from "react"
import { SupportList } from "@/components/support"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

function SupportListContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
      <SupportList />
    </ThemedLayoutV2>
  )
}

export default function SupportListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SupportListContent />
    </Suspense>
  )
}
