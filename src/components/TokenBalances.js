import { TOKENS_BY_CHAIN } from "@/constants/tokens";
import TokenBalance from "@/components/TokenBalance";

export default function TokenBalances({ chainId, walletAddress }) {
    return (
        <div>
            {TOKENS_BY_CHAIN[chainId]?.map((token) => (
                <TokenBalance
                    key={`${chainId}-${token.address || 'native'}`}
                    address={walletAddress}
                    chainId={chainId}
                    tokenAddress={token.address}
                    name={token.name}
                />
            ))}
        </div>
    );
}