"use client"
import { Refine } from "@refinedev/core"
import { useNotificationProvider } from "@refinedev/antd";
import routerBindings from "@refinedev/nextjs-router";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { authProvider } from "../providers/auth-provider";
import { supabaseAdminDataProvider } from "@providers/auth-provider/auth-provider.client";
import { supabaseBrowserClient as supabase } from "../utils/supabase/client";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons"

export const dynamic = "force-dynamic"

export default function RefineProvider({ children }: { children: React.ReactNode }) {
  return (
    <Refine
                  dataProvider={supabaseAdminDataProvider}
                  liveProvider={liveProvider(supabase)}
                  authProvider={authProvider}
                  routerProvider={routerBindings}
                  notificationProvider={useNotificationProvider}
                  resources={[
                    {
                      name: "dashboard",
                      list: "/",
                      meta: {
                        label: "Dashboard",
                        icon: <DashboardOutlined />,
                      },
                    },
                    {
                      name: "bookings",
                      list: "/bookings",
                      show: "/bookings/show/:id",
                      edit: "/bookings/edit/:id",
                      meta: {
                        label: "Bookings",
                        icon: <ShoppingCartOutlined />,
                      },
                    },
                    {
                      name: "partner_applications",
                      list: "/partners",
                      show: "/partners/show/:id",
                      edit: "/partners/edit/:id",
                      meta: {
                        label: "Partner Applications",
                        icon: <UserOutlined />,
                      },
                    },
                    {
                    name: "verified_partners",
                    list: "/verified-partners",
                    show: "/verified-partners/show/:id",
                    edit: "/verified-partners/edit/:id",
                    meta: {
                      canDelete: true,
                      label: "Verified Partners",
                      icon: <CheckCircleOutlined />,
                    },
                    },
                    {
                      name: "support_tickets",
                      list: "/support",
                      show: "/support/show/:id",
                      edit: "/support/edit/:id",
                      meta: {
                        label: "Support Tickets",
                        icon: <CustomerServiceOutlined />,
                      },
                    },
                    {
                      name: "contact_messages",
                      list: "/contacts",
                      show: "/contacts/show/:id",
                      edit: "/contacts/edit/:id",
                      meta: {
                        label: "Contact Messages",
                        icon: <MessageOutlined />,
                      },
                    },
                  ]}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    projectId: "merqri-admin",
                    disableTelemetry: true,
                  }}
                >
                  {children}
                </Refine>
  );
}