import { Suspense } from "react"
import { ContactList } from "@/components/contacts"
import { ThemedLayoutV2 } from "@refinedev/antd"
import { Header } from "@/components/header"

function ContactListContent() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />}>
      <ContactList />
    </ThemedLayoutV2>
  )
}

export default function ContactListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactListContent />
    </Suspense>
  )
}
