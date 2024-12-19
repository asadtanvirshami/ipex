import React from "react";
import { Button, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
type Props = {};

const SignIn = (props: Props) => {
  return (
    <div
      data-cy="main-grid"
      className="grid items-center justify-center h-screen w-screen"
    >
      <div className="lg:grid bg-gradient-to-r dark:bg-white  bg-white lg:grid-cols-2 xl:grid xl:grid-cols-3 md:grid grid-cols-2 w-screen  ">
        <div className="hidden sm:flex h-screen align-middle justify-center items-center xl:col-span-2">
          <div className="justify-center align-middle items-center">
            {/* <h1 className="mx-auto text-8xl font-bold text-rose-500"> */}
            <h1 className="mx-auto text-[13rem] font-[family-name:var(--font-geist-sans)] font-semibold  text-rose-500">
              IPEX
            </h1>
          </div>
        </div>
        <div className="flex h-screen align-middle justify-center font-[family-name:var(--font-redhat)] items-center  border-silver-500 border border-r-1  bg-white">
          <div className=" justify-center align-middle space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-rose-500">Sign In</h1>
            </div>
            <form className="space-y-4 w-[400px]">
              <Input
                size="large"
                placeholder="xyz@gmail.com"
                prefix={<UserOutlined />}
              />
              <Input
                size="large"
                placeholder="******"
                prefix={<LockOutlined />}
              />
              <div className="float-right">
                <Button loading={true} color="danger" size="middle" variant="solid">
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
