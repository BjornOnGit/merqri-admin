"use client";

import { Suspense } from "react";
import { ErrorComponent } from "@refinedev/antd";
import { Authenticated } from "@refinedev/core";
import { AdminLayout } from "@components/layout/AdminLayout";

export const dynamic = "force-dynamic"

function NotFoundContent(){
  return (
    <AdminLayout>
      <ErrorComponent />
    </AdminLayout>
  )
}
export default function NotFound() {
  return (
    <Suspense>
      <Authenticated key="not-found">
        <NotFoundContent />
      </Authenticated>
    </Suspense>
  );
}
