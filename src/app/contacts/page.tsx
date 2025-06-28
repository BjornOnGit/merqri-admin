import { Suspense } from "react"
import { ContactList } from "@/components/contacts"
import { AdminLayout } from "@/components/layout/AdminLayout"

function ContactListContent() {
  return (
    <AdminLayout>
      <ContactList />
    </AdminLayout>
  )
}

export default function ContactListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactListContent />
    </Suspense>
  )
}
