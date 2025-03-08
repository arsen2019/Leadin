// "use client"; // Ensure this runs only on the client

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
    children: React.ReactNode;
};

export default function QueryProvider({ children }: Props) {
    // Ensure QueryClient is created per instance, preventing state loss
    const [queryClient] = useState(() => new QueryClient());

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
