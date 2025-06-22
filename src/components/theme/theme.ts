import type { ThemeConfig } from "antd"

export const merqriTheme: ThemeConfig = {
  token: {
    // Primary colors from your style guide
    colorPrimary: "#F2800A", // Primary orange
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#FF0000", // Error red from style guide
    colorInfo: "#27285C", // Secondary navy blue

    // Background colors
    colorBgContainer: "#FFFFFF", // Tertiary white
    colorBgLayout: "#f5f5f5",
    colorBgElevated: "#FFFFFF",

    // Text colors
    colorText: "#363E51", // Text color from style guide
    colorTextSecondary: "#8c8c8c",
    colorTextDisabled: "#D9D9D9", // Disable color from style guide

    // Border and divider
    colorBorder: "#d9d9d9",
    colorSplit: "#f0f0f0",

    // Font
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: 14,

    // Border radius
    borderRadius: 8,

    // Layout
    padding: 16,
    margin: 16,
  },
  components: {
    Layout: {
      headerBg: "#27285C", // Navy blue header
      siderBg: "#FFFFFF", // White sidebar
      bodyBg: "#f5f5f5",
    },
    Menu: {
      itemBg: "transparent",
      itemSelectedBg: "#F2800A1A", // Light orange background for selected items
      itemSelectedColor: "#F2800A", // Orange text for selected items
      itemHoverBg: "#F2800A0D", // Very light orange on hover
    },
    Button: {
      primaryColor: "#FFFFFF",
      colorPrimary: "#F2800A",
      colorPrimaryHover: "#e66f00",
      colorPrimaryActive: "#d65f00",
    },
    Table: {
      headerBg: "#fafafa",
      rowHoverBg: "#F2800A0A", // Very light orange on row hover
    },
    Card: {
      colorBgContainer: "#FFFFFF",
      colorBorderSecondary: "#f0f0f0",
    },
  },
}
