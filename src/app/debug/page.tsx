import { Suspense } from "react"
import { DataChecker } from "@/components/debug/DataChecker"
import { ThemedLayoutV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

function DebugContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />}>
      <DataChecker />
    </ThemedLayoutV2>
  )
}

export default function DebugPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DebugContent />
    </Suspense>
  )
}
