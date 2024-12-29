"use client";
import React from "react";
import { Button, Input, notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { authApi } from "@/api/user/user-api";
import Cookies from "js-cookie";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();

  const handleClick = async () => {
    setIsLoading(true);

    if (email === "" || password === "") {
      setIsLoading(false);
      return api.error({
        message: "Error",
        description: "Please enter email and password",
      });
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setIsLoading(false);
      return api.error({
        message: "Invalid email",
        description: "Please enter a valid email",
      });
    }

    try {
      const auth_request = await authApi.login(email, password);
      if (auth_request?.data?.success === true) {
        api.success({
          message: "Success",
          description: "Successfully logged in",
        });
        setIsLoading(false);
        const sessionData = auth_request.data?.data;
        Cookies.set("token", JSON.stringify(sessionData?.token), {
          secure: true,
          expires: 1,
        });
        router.push("/protected-route/dashboard");
      }
    } catch (Error) {
      api.error({
        message: "Error",
        description: "An error occured while logging in. Try logging in again",
      });
      console.log(Error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {contextHolder}

      <div
        data-cy="main-grid"
        className="grid items-center justify-center h-screen w-screen"
      >
        <div className="lg:grid bg-gradient-to-r dark:bg-white bg-white lg:grid-cols-2 xl:grid xl:grid-cols-3 md:grid grid-cols-2 w-screen">
          <div className="hidden sm:flex h-screen align-middle justify-center items-center xl:col-span-2">
            <div className="justify-center align-middle items-center">
              <h1 className="mx-auto text-[13rem] font-[family-name:var(--font-geist-sans)] font-semibold text-rose-500">
                IPEX
              </h1>
            </div>
          </div>
          <div className="flex h-screen align-middle justify-center font-[family-name:var(--font-redhat)] items-center border-silver-500 border border-r-1 bg-white">
            <div className="justify-center align-middle space-y-4">
              <div>
                <h1 className="text-4xl font-bold text-rose-500">Sign In</h1>
              </div>
              <form className="space-y-4 w-[400px]">
                <Input
                  size="large"
                  placeholder="xyz@gmail.com"
                  prefix={<UserOutlined />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  size="large"
                  type="password"
                  placeholder="******"
                  prefix={<LockOutlined />}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
              <div >
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                  }}
                  loading={isLoading}
                  className="border bg-red-400 p-2 rounded-lg"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
