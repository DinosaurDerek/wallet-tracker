"use client"

import dynamic from "next/dynamic";
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { wagmiConfig } from "@/lib/wagmiConfig";
import { ThemeProvider } from "@/providers/ThemeProvider";

const queryClient = new QueryClient();
const RainbowKitWrapper = dynamic(() => import("@/providers/RainbowKitWrapper"), {
    ssr: false,
});

export default function Providers({ children }) {
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <RainbowKitWrapper>
                        {children}
                    </RainbowKitWrapper>
                </ThemeProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
