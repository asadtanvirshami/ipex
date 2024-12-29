import React from "react";
import MainContent from "./main-content";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { supplymentApi } from "@/api/supply/supply-api";

async function page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["supplyment"], // Page 1 and page size 8
    queryFn: () => supplymentApi.getAll(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainContent />
    </HydrationBoundary>
  );
}

export default page;
