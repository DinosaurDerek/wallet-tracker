"use client";

import { useAccount } from 'wagmi';
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Dashboard() {
  const { status, isConnected, chain, chainId  } = useAccount();

  return (
    <div className="p-4 text-center">
      <ConnectButton />
      {isConnected && (
          <div>
              <p className="mt-4 capitalize">{status}</p>
              <p className="mt-4">Network: {chain?.name} ({chainId})</p>
          </div>
      )}
    </div>
  );
}
