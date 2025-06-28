"use client"

import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { ContactEdit } from "@/components/contacts/edit"

export const dynamic = "force-dynamic"

function ContactEditContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <ContactEdit />
    </AdminLayout>
  )
}

export default function ContactEditPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactEditContent params={params} />
    </Suspense>
  )
}
