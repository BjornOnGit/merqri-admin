"use client"
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd"
import { Header } from "@/components/header"
import { ContactEdit } from "@/components/contacts"

export default function ContactEditPage() {
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
      <ContactEdit />
    </ThemedLayoutV2>
  )
}
