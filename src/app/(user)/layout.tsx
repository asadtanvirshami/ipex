import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import MainLayout from "@/components/ui/main-layout";
import { ConfigProvider } from "antd";
import StoreProvider from "@/redux/store/store-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <AntdRegistry>
        <ConfigProvider wave={{ disabled: true }}>
          <StoreProvider>
            <MainLayout>{children}</MainLayout>
          </StoreProvider>
        </ConfigProvider>
      </AntdRegistry>
    </React.Fragment>
  );
}
