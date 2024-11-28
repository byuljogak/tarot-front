"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </QueryClientProvider>
    </div>
  );
}
