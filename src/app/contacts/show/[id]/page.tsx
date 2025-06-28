"use client"

import { Suspense } from "react"
import { AdminLayout } from "@/components/layout/AdminLayout"
import { ContactShow } from "@/components/contacts/show"

export const dynamic = "force-dynamic"

function ContactShowContent({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <ContactShow />
    </AdminLayout>
  )
}

export default function ContactShowPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactShowContent params={params} />
    </Suspense>
  )
}
