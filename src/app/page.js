"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css';

import TokenBalances from "@/components/TokenBalances";

export default function Home() {
    const { address, chainId, isConnected, status } = useAccount();

    return (
        <main className="flex m-4 justify-center">
            <div className="text-center">
                <p className="mb-4 capitalize">{status}</p>
                <ConnectButton/>
                {isConnected && <TokenBalances chainId={chainId} walletAddress={address}/>}
            </div>
        </main>
    );
}
