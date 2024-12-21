"use client";
import React, { useEffect, memo } from "react";
import Router from "next/navigation";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Landing = () => {
  const makeRoute = async () => {
    setTimeout(() => {
      Router.redirect("/auth/signin");
    }, 3000);
  };

  useEffect(() => {
    makeRoute();
  }, []);

  return (
    <div className="h-screen justify-center flex items-center bg-white">
      <div className="flex  h-screen bg-white justify-center items-center">
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 58, color: "red" }} spin />
          }
        />
      </div>
    </div>
  );
};

export default memo(Landing);
