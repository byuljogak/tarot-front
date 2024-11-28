"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Template({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
}
