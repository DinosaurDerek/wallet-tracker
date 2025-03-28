"use client";

import { useAccount, useBalance } from 'wagmi';

export default function TokenBalance({ chainId, tokenAddress, name }) {
    const { address } = useAccount();
    const { data, error, isError, isLoading } = useBalance({
        address: address,
        chainId,
        token: tokenAddress,
    });

    if (isError) {
        return (
            <div className="mt-4 text-red-500">
                {error?.message || error?.name || 'An error occurred while fetching balance'}
            </div>
        );
    }

    return (
        <div className="mt-4">
            <span className="mt-4 font-bold">{name}</span>
            <span className="mt-4">: {isLoading ? 'Loading...' : data?.formatted}</span>
        </div>
    );
}
