"use client";

import { Suspense } from "react";
import { ErrorComponent, ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd";
import { Header } from "@components/header";
import { Authenticated } from "@refinedev/core";

export const dynamic = "force-dynamic"

function NotFoundContent(){
  return (
    <ThemedLayoutV2 Header={() => <Header sticky />} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
      <ErrorComponent />
    </ThemedLayoutV2>
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
