import type React from "react"
import "@refinedev/antd/dist/reset.css"
import { ConfigProvider, App as AntdApp } from "antd"
import { ColorModeContextProvider } from "@/contexts/color-mode"
import { merqriTheme } from "../components/theme/theme"
import RefineProvider from "./refine-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <ColorModeContextProvider>
            <ConfigProvider theme={merqriTheme}>
              <AntdApp>
                <RefineProvider>
                  {children}
                </RefineProvider>
              </AntdApp>
            </ConfigProvider>
          </ColorModeContextProvider>
      </body>
    </html>
  )
}
