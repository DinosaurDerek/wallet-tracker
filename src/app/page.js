"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';

import TokenBalances from "@/components/TokenBalances";
import SendButton from "@/components/SendToken";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
    const { address, chainId, isConnected, status } = useAccount();

    return (
        <div className="flex flex-col flex-wrap gap-5 h-screen justify-between">
            <header className="flex justify-between gap-3 p-4">
                <ConnectButton accountStatus="address" />
                <ThemeToggle />
            </header>
            <main className="flex px-4 justify-center mb-auto">
                <div className="text-center">
                    <p className="pb-4 capitalize">{status}</p>
                    {isConnected && <TokenBalances chainId={chainId} walletAddress={address} />}
                </div>
            </main>
            <footer className="px-4 py-10 border-t-zinc-500 border-t">
                {isConnected && <SendButton />}
            </footer>
        </div>
    );
}
