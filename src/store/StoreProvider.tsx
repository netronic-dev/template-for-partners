"use client";

import { Provider } from "react-redux";
import store from ".";
import ModalsProvider from "../context/ModalsProvider";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ModalsProvider>
      {children}
      </ModalsProvider>
    </Provider>
  );
};
