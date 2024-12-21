"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Landing from "@/app/(user)/page";
import { Avatar, Button, Layout, Menu, theme } from "antd";
import { usePathname } from "next/navigation";
const { Header, Sider, Content } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const path = usePathname();
  const isAuthPath = path === "/auth/signin";
  const isLoaderPath = path === "/";
  const isProtectedRoute = path.startsWith("/protected-route");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // const pathSegments = path.split("/").filter(Boolean); 
 
  // const buildLink = (index: number) => {
  //   return "/" + pathSegments.slice(0, index + 1).join("/");
  // };
  return (
    <React.Fragment>
      {isAuthPath && <div>{children}</div>}
      {isLoaderPath && <Landing />}
      {isProtectedRoute && (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            style={{ background: "white" }}
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "Dashboard",
                },
                {
                  key: "2",
                  icon: <SettingOutlined />,
                  label: "Settings",
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header
              className="flex justify-between"
              style={{ padding: 0, background: colorBgContainer }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <div className="pr-3">
                <Avatar size="default">
                  <UserOutlined />
                </Avatar>
              </div>
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      )}
    </React.Fragment>
  );
};

export default React.memo(MainLayout);
