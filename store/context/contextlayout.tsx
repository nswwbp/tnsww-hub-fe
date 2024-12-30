"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import SonnerToasterWrapper from "@/components/globals/sonnerToasterWrapper";
import { AppContextProvider } from "./app.context";

const queryClient = new QueryClient();

export default function AppContextWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
  session?: any;
}>) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppContextProvider>
        <Suspense>
          <SonnerToasterWrapper />
          {children}
          {/* <ReactQueryDevtools initialIsOpen={true} position="bottom-right" /> */}
        </Suspense>
      </AppContextProvider>
    </QueryClientProvider>
  );
}
