import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import MainLayout from "@/components/ui/main-layout";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <AntdRegistry>
        <MainLayout>{children}</MainLayout>
      </AntdRegistry>
    </React.Fragment>
  );
}
