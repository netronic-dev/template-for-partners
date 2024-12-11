"use client";

import ModalsProvider from "@/context/ModalsProvider";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <ModalsProvider>{children}</ModalsProvider>;
};
