import { TOKENS_BY_CHAIN } from "@/constants/tokens";
import TokenBalance from "@/components/TokenBalance";

export default function TokenBalances({ chainId }) {
    return (
        <div>
            {TOKENS_BY_CHAIN[chainId]?.map((token) => (
                <TokenBalance
                    key={`${chainId}-${token.address || 'native'}`}
                    chainId={chainId}
                    tokenAddress={token.address}
                    name={token.symbol}
                />
            ))}
        </div>
    );
}