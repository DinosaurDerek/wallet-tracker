"use client";

import '@rainbow-me/rainbowkit/styles.css';
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import TokenBalances from "@/components/TokenBalances";

export default function Home() {
    const { address, chainId, isConnected, status } = useAccount();

    return (
        <main className="flex mt-10 justify-center">
            <div className="p-4 text-center">
                <p className="mb-4 capitalize">{status}</p>
                <ConnectButton/>
                {isConnected && <TokenBalances chainId={chainId} walletAddress={address}/>}
            </div>
        </main>
    );
}
